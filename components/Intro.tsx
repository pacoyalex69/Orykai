import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.intro-line-wrap').forEach((line) => {
        gsap.fromTo(
          line.querySelectorAll('.intro-token'),
          { y: 96, opacity: 0, rotateX: -70 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.045,
            duration: 0.95,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 82%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0a0a0a] px-4 py-28 text-[#f4f0e5] md:py-44"
      aria-labelledby="intro-title"
    >
      <div className="container mx-auto">
        <div
          id="intro-title"
          className="flex flex-col font-heading text-5xl font-black uppercase leading-none sm:text-6xl md:text-8xl"
        >
          <div className="intro-line-wrap flex flex-wrap items-baseline gap-x-4 gap-y-2 overflow-hidden">
            <span className="intro-token">No hacemos</span>
            <span className="intro-token font-serif-italic text-4xl font-light lowercase text-[#d8b35f] sm:text-5xl md:text-7xl">
              solo
            </span>
          </div>

          <div className="intro-line-wrap flex flex-wrap items-baseline gap-x-4 gap-y-2 overflow-hidden md:pl-12">
            <span className="intro-token stroke-text">páginas</span>
            <span className="intro-token">bonitas.</span>
          </div>

          <div className="intro-line-wrap flex flex-wrap items-baseline gap-x-4 gap-y-2 overflow-hidden">
            <span className="intro-token">Construimos</span>
            <span className="intro-token font-serif-italic text-4xl font-light lowercase text-white sm:text-5xl md:text-7xl">
              sistemas
            </span>
          </div>

          <div className="intro-line-wrap flex flex-wrap items-baseline gap-x-4 gap-y-2 overflow-hidden md:pl-20">
            <span className="intro-token">que venden</span>
            <span className="intro-token text-[#2fb7b2]">y operan.</span>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div className="max-w-2xl border-l border-[#d8b35f]/45 pl-6 text-xl leading-relaxed text-white/68 md:text-2xl">
            <p>{siteContent.brand.tagline}</p>
          </div>
          <div className="grid grid-cols-2 border border-white/10 bg-white/[0.03]">
            {['Captación', 'Gestión', 'Automatización', 'Crecimiento'].map((item) => (
              <div
                key={item}
                className="border-white/10 p-5 text-sm uppercase text-white/62 odd:border-r first:border-b last:border-l last:border-t"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
