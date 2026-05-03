import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { ConceptCase, siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

type CaseCardProps = {
  item: ConceptCase;
  index: number;
};

function CaseCard({ item, index }: CaseCardProps) {
  return (
    <article
      className="case-card relative flex min-h-[520px] flex-col justify-between overflow-hidden border border-white/15 bg-[#0b0b0b] p-6"
      style={{ '--case-accent': item.accent } as CSSProperties}
    >
      <div className="case-card-bg absolute inset-0" />
      <div className="relative z-10">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase text-[var(--case-accent)]">{item.label}</p>
            <p className="mt-1 text-sm uppercase text-white/42">{item.year}</p>
          </div>
          <span className="font-mono text-sm text-white/35">0{index + 1}</span>
        </div>

        <div className="case-visual mb-10 h-52 overflow-hidden border border-white/10 bg-black/25">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h3 className="font-heading text-4xl font-black uppercase leading-none text-white md:text-5xl">
          {item.title}
        </h3>
        <p className="mt-5 text-lg leading-relaxed text-white/62">{item.summary}</p>
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {item.stack.map((tag) => (
            <span key={tag} className="border border-white/10 px-3 py-1 text-xs uppercase text-white/52">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between gap-6 border-t border-white/15 pt-5">
          <p className="max-w-sm text-sm uppercase text-white/54">{item.result}</p>
          <ArrowUpRight className="h-7 w-7 flex-shrink-0 text-[var(--case-accent)]" />
        </div>
      </div>
    </article>
  );
}

export default function WorkGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.case-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 48, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            delay: index * 0.04,
            duration: 0.78,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cases"
      className="section-padding relative overflow-hidden bg-[#050505] text-white"
    >
      <div className="container">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_0.42fr] md:items-end">
          <h2 className="font-heading text-6xl font-black uppercase leading-none md:text-7xl 2xl:text-8xl">
            Soluciones
            <span className="block stroke-text">base</span>
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-white/56">
            Puntos de partida visuales y funcionales para adaptar a tu sector, tus clientes y tu
            forma real de trabajar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.cases.map((item, index) => (
            <CaseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
