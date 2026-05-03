import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Bot,
  ChartNoAxesCombined,
  Check,
  Code2,
  Layers3,
  Smartphone,
} from 'lucide-react';
import { Service, siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = {
  web: Code2,
  multiplataforma: Smartphone,
  ia: Bot,
  'marketing-seo': ChartNoAxesCombined,
  sistemas: Layers3,
};

const CARD_WIDTH = 360;
const CARD_HEIGHT = 340;
const VIEWPORT_MARGIN = 28;

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<Service>(siteContent.services[0]);

  const ActiveIcon = serviceIcons[activeService.id];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(revealRef.current, {
        autoAlpha: 0,
        scale: 0.96,
        x: window.innerWidth - CARD_WIDTH - VIEWPORT_MARGIN,
        y: 160,
      });

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const moveReveal = (event: ReactMouseEvent<HTMLElement>) => {
    if (!revealRef.current || window.innerWidth < 1100) return;

    const prefersLeft = event.clientX > window.innerWidth * 0.58;
    const nextX = prefersLeft
      ? event.clientX - CARD_WIDTH - 34
      : event.clientX + 30;
    const nextY = event.clientY - CARD_HEIGHT * 0.28;

    const clampedX = Math.min(
      window.innerWidth - CARD_WIDTH - VIEWPORT_MARGIN,
      Math.max(VIEWPORT_MARGIN, nextX)
    );
    const clampedY = Math.min(
      window.innerHeight - CARD_HEIGHT - VIEWPORT_MARGIN,
      Math.max(VIEWPORT_MARGIN, nextY)
    );

    gsap.to(revealRef.current, {
      x: clampedX,
      y: clampedY,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const showReveal = (service: Service) => {
    setActiveService(service);

    if (!revealRef.current || window.innerWidth < 1100) return;

    gsap.to(revealRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.22,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const hideReveal = () => {
    if (!revealRef.current) return;

    gsap.to(revealRef.current, {
      autoAlpha: 0,
      scale: 0.96,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
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
        className="service-reveal fixed left-0 top-0 z-50 hidden w-[360px] overflow-hidden border border-white/15 bg-[#050505]/96 shadow-2xl backdrop-blur-sm lg:block"
        style={{ '--service-accent': activeService.accent } as CSSProperties}
      >
        <div className="service-reveal-grid absolute inset-0" />
        <div className="relative z-10 p-6">
          <div className="mb-8 flex items-start justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center border border-[var(--service-accent)]/35 bg-black/30 text-[var(--service-accent)]">
                <ActiveIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--service-accent)]">
                  Vista rápida
                </p>
                <p className="mt-2 text-sm uppercase text-white/42">{activeService.category}</p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase text-white/28">
              0{siteContent.services.findIndex((service) => service.id === activeService.id) + 1}
            </span>
          </div>

          <h3 className="font-heading text-4xl font-black uppercase leading-[0.94] text-white">
            {activeService.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/62">{activeService.summary}</p>

          <div className="mt-7 border-y border-white/12 py-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/34">Resultado</p>
            <p className="mt-3 font-heading text-3xl font-black uppercase text-[var(--service-accent)]">
              {activeService.metric}
            </p>
            <p className="mt-3 text-sm uppercase leading-relaxed text-white/46">
              {activeService.deliverable}
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            {activeService.includes.slice(0, 4).map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/64">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--service-accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {activeService.capabilities.map((capability) => (
              <span
                key={capability}
                className="border border-white/10 px-3 py-1 text-[0.68rem] uppercase text-white/56"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mb-16 grid gap-8 xl:mb-20 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end">
          <h2 className="font-heading text-6xl font-black uppercase leading-none md:text-8xl">
            Servicios
            <span className="block stroke-text">Orykai</span>
          </h2>
          <p className="max-w-[28rem] text-lg leading-relaxed text-white/58 xl:justify-self-end">
            Soluciones para captar clientes, ordenar procesos y digitalizar negocios locales sin
            convertir el proyecto en un laberinto técnico.
          </p>
        </div>

        <ul ref={listRef} className="border-t border-white/15">
          {siteContent.services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            const isActive = activeService.id === service.id;

            return (
              <li
                key={service.id}
                className="group border-b border-white/15"
                onMouseEnter={() => showReveal(service)}
                onMouseMove={moveReveal}
                onMouseLeave={hideReveal}
                onFocusCapture={() => setActiveService(service)}
              >
                <a
                  href="#diagnostico"
                  className={`service-row grid gap-6 px-2 py-8 transition-all duration-500 md:px-4 md:py-10 2xl:grid-cols-[72px_minmax(0,1.1fr)_minmax(280px,0.8fr)_40px] 2xl:items-start ${
                    isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.03]'
                  }`}
                  style={{ '--service-accent': service.accent } as CSSProperties}
                >
                  <span className="pt-1 font-mono text-sm text-white/40">0{index + 1}</span>

                  <div className="min-w-0">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span
                        className={`flex h-12 w-12 items-center justify-center border transition-colors duration-300 ${
                          isActive
                            ? 'border-[var(--service-accent)] text-[var(--service-accent)]'
                            : 'border-white/15 text-[#d8b35f] group-hover:border-[var(--service-accent)] group-hover:text-[var(--service-accent)]'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="text-sm uppercase tracking-[0.18em] text-[var(--service-accent)]">
                        {service.category}
                      </p>
                    </div>

                    <h3 className="max-w-[14ch] font-heading text-3xl font-black uppercase leading-[0.92] text-white xl:text-4xl 2xl:text-5xl">
                      {service.title}
                    </h3>
                  </div>

                  <div className="min-w-0 2xl:pt-1">
                    <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                      {service.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="border border-white/10 px-3 py-1 text-xs uppercase text-white/52"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm uppercase tracking-[0.12em] text-white/42">
                      {service.deliverable}
                    </p>
                  </div>

                  <div className="flex items-start justify-end 2xl:pt-1">
                    <ArrowUpRight
                      className={`h-8 w-8 transition-all duration-500 ${
                        isActive
                          ? 'translate-x-1 -translate-y-1 rotate-45 text-[var(--service-accent)]'
                          : 'text-white/35 group-hover:rotate-45 group-hover:text-[var(--service-accent)]'
                      }`}
                    />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
