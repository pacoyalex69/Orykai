import { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const sitemap = [
  { label: 'Servicios', href: '#services' },
  { label: 'Demos', href: '#cases' },
  { label: 'Proceso', href: '#process' },
  { label: 'Equipo', href: '#team' },
];

export default function Footer() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    contact: '',
    need: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formFeedback, setFormFeedback] = useState('');

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');
    setFormFeedback('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      business: String(formData.get('business') ?? '').trim(),
      contact: String(formData.get('contact') ?? '').trim(),
      need: String(formData.get('need') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'No se pudo enviar el diagnostico.');
      }

      setForm({ name: '', business: '', contact: '', need: '', message: '' });
      setFormStatus('success');
      setFormFeedback('Diagnostico enviado. Te responderemos lo antes posible.');
    } catch (error) {
      setFormStatus('error');
      setFormFeedback(error instanceof Error ? error.message : 'No se pudo enviar el diagnostico.');
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#050505] text-[#f4f0e5]">
      <div className="footer-grid absolute inset-0" />
      <div className="section-padding container relative z-10">
        <div id="diagnostico" className="mb-24 grid gap-10 md:mb-32 md:grid-cols-[0.75fr_1fr] md:items-start">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 border border-[#d8b35f]/45 px-4 py-2 text-xs uppercase text-[#d8b35f]">
              <Mail className="h-4 w-4" />
              Diagnóstico inicial
            </p>
            <h2 className="font-serif-italic text-5xl leading-none md:text-7xl">
              Cuéntanos qué quieres mejorar.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/58">
              Revisamos tu negocio, tu captación y tus procesos para detectar dónde una web, una app
              o una automatización puede aportar valor real sin inflar el proyecto.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-white/58">
              <a href={siteContent.brand.whatsapp} className="inline-flex items-center gap-2 text-[#d8b35f] hover:text-white">
                <MessageCircle className="h-5 w-5" />
                WhatsApp {siteContent.brand.phone}
              </a>
              <a href={siteContent.brand.mailto} className="inline-flex items-center gap-2 text-[#d8b35f] hover:text-white">
                <Mail className="h-5 w-5" />
                {siteContent.brand.email}
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4 border border-white/12 bg-white/[0.035] p-4 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs uppercase text-white/50">
                Nombre
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="border border-white/12 bg-[#050505]/70 px-4 py-3 text-base text-white outline-none transition-colors focus:border-[#d8b35f]"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="grid gap-2 text-xs uppercase text-white/50">
                Negocio
                <input
                  name="business"
                  required
                  value={form.business}
                  onChange={(event) => updateField('business', event.target.value)}
                  className="border border-white/12 bg-[#050505]/70 px-4 py-3 text-base text-white outline-none transition-colors focus:border-[#d8b35f]"
                  type="text"
                  autoComplete="organization"
                  placeholder="Nombre del negocio"
                />
              </label>
            </div>
            <label className="grid gap-2 text-xs uppercase text-white/50">
              Email o telefono
              <input
                name="contact"
                required
                value={form.contact}
                onChange={(event) => updateField('contact', event.target.value)}
                className="border border-white/12 bg-[#050505]/70 px-4 py-3 text-base text-white outline-none transition-colors focus:border-[#d8b35f]"
                type="text"
                autoComplete="email"
                placeholder="Email o WhatsApp"
              />
            </label>
            <label className="grid gap-2 text-xs uppercase text-white/50">
              Qué necesitas
              <select
                name="need"
                required
                value={form.need}
                onChange={(event) => updateField('need', event.target.value)}
                className="border border-white/12 bg-[#050505]/70 px-4 py-3 text-base text-white outline-none transition-colors focus:border-[#d8b35f]"
              >
                <option value="">Selecciona una opcion</option>
                <option>Web o tienda online</option>
                <option>App o CRM</option>
                <option>IA o automatización de citas</option>
                <option>SEO local y marketing</option>
                <option>Sistema interno a medida</option>
              </select>
            </label>
            <label className="grid gap-2 text-xs uppercase text-white/50">
              Mensaje
              <textarea
                name="message"
                required
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                className="min-h-32 resize-y border border-white/12 bg-[#050505]/70 px-4 py-3 text-base text-white outline-none transition-colors focus:border-[#d8b35f]"
                placeholder="Cuéntanos qué quieres mejorar, qué te preocupa o qué necesitas lanzar."
              />
            </label>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="inline-flex items-center justify-center gap-2 bg-[#d8b35f] px-6 py-4 text-sm font-bold uppercase text-[#050505] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {formStatus === 'sending' ? 'Enviando...' : 'Enviar diagnóstico'}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="text-sm leading-relaxed text-white/40">
              Normalmente respondemos con una primera lectura y siguiente paso recomendado.
            </p>
            {formFeedback ? (
              <p
                className={`text-sm leading-relaxed ${
                  formStatus === 'success' ? 'text-[#b7e36d]' : 'text-[#f3cc6e]'
                }`}
                role="status"
              >
                {formFeedback}
              </p>
            ) : null}
          </form>
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-8 flex items-center gap-3">
              <img
                src={siteContent.brand.logo}
                alt=""
                className="h-12 w-12 border border-[#d8b35f]/50 object-cover"
              />
              <span className="font-heading text-2xl font-bold uppercase">{siteContent.brand.name}</span>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-white/50">{siteContent.brand.tagline}</p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/38">{siteContent.brand.coverage}</p>
            <a
              href={siteContent.brand.mailto}
              className="mt-6 inline-flex items-center gap-2 text-lg text-[#d8b35f] transition-colors duration-300 hover:text-white"
            >
              {siteContent.brand.email}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase text-white">Mapa</h4>
            <ul className="space-y-4 text-white/50">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-lg transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase text-white">Estado</h4>
            <ul className="space-y-4 text-white/50">
              <li className="text-lg">{siteContent.brand.location}</li>
              <li className="text-lg">Formulario conectado a email web</li>
              <li className="text-lg">Web, apps, IA, SEO local y sistemas internos</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 text-xs uppercase text-white/32 md:flex-row md:items-center">
          <span>© 2026 {siteContent.brand.name}</span>
          <span>Desarrollo web · Apps · IA · Marketing · SEO</span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.04]">
        <h2 className="translate-y-[18%] text-center font-heading text-9xl font-black uppercase md:text-[12rem]">
          Orykai
        </h2>
      </div>
    </footer>
  );
}
