import { Resend } from 'resend';

type DiagnosticPayload = {
  name?: string;
  business?: string;
  contact?: string;
  need?: string;
  message?: string;
};

const requiredFields: Array<keyof DiagnosticPayload> = ['name', 'business', 'contact', 'need', 'message'];

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const getField = (payload: DiagnosticPayload, field: keyof DiagnosticPayload) =>
  String(payload[field] ?? '').trim();

const cleanEnvValue = (value: string | undefined, fallback: string) => {
  const rawValue = (value || fallback).trim();
  return rawValue.replace(/^['"]|['"]$/g, '');
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo no permitido' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      error: 'El envio de email no esta configurado todavia.',
    });
  }

  const payload = (req.body ?? {}) as DiagnosticPayload;
  const missingField = requiredFields.find((field) => !getField(payload, field));

  if (missingField) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  const name = getField(payload, 'name');
  const business = getField(payload, 'business');
  const contact = getField(payload, 'contact');
  const need = getField(payload, 'need');
  const message = getField(payload, 'message');

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = cleanEnvValue(process.env.CONTACT_TO_EMAIL, 'alex2005sg@gmail.com');
  const from = cleanEnvValue(process.env.CONTACT_FROM_EMAIL, 'Orykai <onboarding@resend.dev>');

  const plainText = [
    'Nuevo diagnostico solicitado desde la web de Orykai.',
    '',
    `Nombre: ${name}`,
    `Negocio: ${business}`,
    `Contacto: ${contact}`,
    `Necesidad principal: ${need}`,
    '',
    'Mensaje:',
    message,
  ].join('\n');

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Diagnostico Orykai - ${business}`,
    text: plainText,
    html: `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h1 style="font-size: 22px;">Nuevo diagnostico solicitado</h1>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Negocio:</strong> ${escapeHtml(business)}</p>
        <p><strong>Contacto:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Necesidad principal:</strong> ${escapeHtml(need)}</p>
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend diagnostic email error:', error);

    const resendMessage =
      typeof error === 'object' && error && 'message' in error
        ? String(error.message)
        : 'No se pudo enviar el diagnostico.';

    return res.status(400).json({ error: resendMessage });
  }

  return res.status(200).json({ ok: true });
}
