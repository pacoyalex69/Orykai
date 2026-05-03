import { siteContent } from '../content/siteContent';

export default function Trust() {
  return (
    <section className="bg-[#0a0a0a] py-20 text-[#f4f0e5] md:py-28" aria-labelledby="trust-title">
      <div className="container">
        <div className="grid gap-10 border-y border-white/10 py-12 md:grid-cols-[0.72fr_1fr] md:items-end">
          <div>
            <span className="border border-[#d8b35f]/35 px-4 py-2 text-xs uppercase text-[#d8b35f]">
              Prueba visual
            </span>
            <h2 id="trust-title" className="mt-8 font-heading text-5xl font-black uppercase leading-none md:text-7xl">
              Preparado para
              <span className="block stroke-text">casos reales.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-white/58">
            Mientras llegan testimonios y proyectos publicados, mostramos soluciones empaquetadas y
            un proceso claro para que puedas imaginar como aterrizamos tu negocio.
          </p>
        </div>

        <div className="grid gap-4 pt-6 md:grid-cols-3">
          {siteContent.trust.map((item) => (
            <article key={item.label} className="border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-8 font-mono text-xs uppercase text-[#d8b35f]">{item.label}</p>
              <h3 className="font-heading text-3xl font-black uppercase text-white">{item.value}</h3>
              <p className="mt-4 leading-relaxed text-white/54">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
