import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Bot, ChartNoAxesCombined, Code2, Layers3, Smartphone } from 'lucide-react';
import { Service, siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = {
  web: Code2,
  multiplataforma: Smartphone,
  ia: Bot,
  'marketing-seo': ChartNoAxesCombined,
  sistemas: Layers3,
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<Service>(siteContent.services[0]);

  const ActiveIcon = useMemo(() => serviceIcons[activeService.id], [activeService.id]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(revealRef.current, { xPercent: -50, yPercent: -50 });

      Array.from(listRef.current?.children ?? []).forEach((item) => {
        gsap.fromTo(
          item as HTMLElement,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 92%',
            },
          }
        );
      });

      const moveReveal = (event: MouseEvent) => {
        if (!revealRef.current) return;

        gsap.to(revealRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      };

      window.addEventListener('mousemove', moveReveal);
      return () => window.removeEventListener('mousemove', moveReveal);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const showReveal = (service: Service) => {
    setActiveService(service);
    gsap.to(revealRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const hideReveal = () => {
    gsap.to(revealRef.current, {
      scale: 0.92,
      opacity: 0,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding relative z-10 overflow-hidden bg-[#111] text-[#f4f0e5]"
    >
      <div
        ref={revealRef}
        className="service-reveal fixed left-0 top-0 z-50 hidden h-[360px] w-[280px] pointer-events-none border border-white/15 bg-[#050505] p-5 opacity-0 shadow-2xl md:block"
        style={{ '--service-accent': activeService.accent } as CSSProperties}
      >
        <div className="service-reveal-grid absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-6">
            <ActiveIcon className="h-10 w-10 text-[var(--service-accent)]" />
            <span className="font-mono text-xs uppercase text-white/45">{activeService.category}</span>
          </div>
          <div>
            <p className="mb-4 text-sm leading-relaxed text-white/58">{activeService.summary}</p>
            <div className="text-3xl font-heading font-black uppercase text-white">{activeService.metric}</div>
            <p className="mt-3 text-xs uppercase leading-relaxed text-white/42">
              {activeService.deliverable}
            </p>
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mb-16 grid gap-8 md:mb-20 md:grid-cols-[1fr_0.45fr] md:items-end">
          <h2 className="font-heading text-6xl font-black uppercase leading-none md:text-8xl">
            Servicios
            <span className="block stroke-text">Orykai</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/58">
            Soluciones para captar clientes, ordenar procesos y digitalizar negocios locales sin
            convertir el proyecto en un laberinto tecnico.
          </p>
        </div>

        <ul ref={listRef} className="border-t border-white/15">
          {siteContent.services.map((service, index) => {
            const Icon = serviceIcons[service.id];

            return (
              <li
                key={service.id}
                className="group border-b border-white/15"
                onMouseEnter={() => showReveal(service)}
                onMouseLeave={hideReveal}
              >
                <a
                  href="#diagnostico"
                  className="grid gap-6 px-2 py-8 transition-all duration-500 hover:bg-white/[0.03] md:grid-cols-[0.12fr_0.38fr_1fr_auto] md:items-center md:px-4 md:py-10"
                >
                  <span className="font-mono text-sm text-white/40">0{index + 1}</span>
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-12 w-12 items-center justify-center border border-white/15 text-[#d8b35f] transition-colors duration-300 group-hover:border-[var(--service-accent)] group-hover:text-[var(--service-accent)]"
                      style={{ '--service-accent': service.accent } as CSSProperties}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-3xl font-black uppercase md:text-5xl">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm uppercase text-[#d8b35f]">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-base leading-relaxed text-white/58 md:text-lg">
                    <p>{service.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[...service.capabilities, ...service.includes.slice(0, 2)].map((item) => (
                        <span key={item} className="border border-white/10 px-3 py-1 text-xs uppercase text-white/50">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm uppercase text-[#d8b35f]/80">{service.deliverable}</p>
                  </div>
                  <ArrowUpRight className="h-8 w-8 text-white/35 transition-all duration-500 group-hover:rotate-45 group-hover:text-[#d8b35f]" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
