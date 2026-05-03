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
      className="case-card relative flex min-h-[520px] w-[82vw] max-w-[560px] flex-shrink-0 flex-col justify-between overflow-hidden border border-white/15 bg-[#0b0b0b] p-6 sm:w-[68vw] md:w-[44vw] lg:w-[36vw]"
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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);

        gsap.fromTo(
          '.case-card',
          { y: 36, opacity: 0.72, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.06,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            scrub: 1.35,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add('(max-width: 767px)', () => {
        gsap.utils.toArray<HTMLElement>('.case-card').forEach((card) => {
          gsap.fromTo(
            card,
            { y: 52, opacity: 0.55, scale: 0.97 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
              },
            }
          );
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cases"
      className="relative overflow-hidden bg-[#050505] py-20 text-white md:min-h-screen md:py-0"
    >
      <div className="container mb-12 md:absolute md:left-1/2 md:top-32 md:z-20 md:-translate-x-1/2">
        <div className="grid gap-6 md:grid-cols-[1fr_0.42fr] md:items-end">
          <h2 className="font-heading text-6xl font-black uppercase leading-none md:text-8xl">
            Soluciones
            <span className="block stroke-text">en demo</span>
          </h2>
          <div className="hidden min-h-36 md:block" aria-hidden="true" />
        </div>
      </div>

      <div className="md:flex md:h-screen md:items-end md:pb-16">
        <div
          ref={trackRef}
          className="case-track flex w-max gap-6 overflow-x-auto px-4 pb-4 sm:px-6 md:overflow-visible md:pl-[42vw] md:pr-[18vw]"
        >
          {siteContent.cases.map((item, index) => (
            <CaseCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
