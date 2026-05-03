import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const title = siteContent.brand.shortName.toUpperCase();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-char', { yPercent: 120, rotateZ: 8 });
      gsap.set('.hero-horizon-line', { scaleX: 0, transformOrigin: 'left center' });

      const tl = gsap.timeline({ delay: 0.35 });
      tl.to('.hero-char', {
        yPercent: 0,
        rotateZ: 0,
        stagger: 0.055,
        duration: 1.15,
        ease: 'power4.out',
      })
        .to(
          '.hero-horizon-line',
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power4.out',
          },
          '-=0.9'
        )
        .from(
          '.hero-fade',
          {
            opacity: 0,
            y: 24,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.65'
        );

      gsap.to('.hero-ocean-image', {
        yPercent: 10,
        scale: 1.13,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-[#f4f0e5]"
    >
      <picture className="absolute inset-0 block">
        <img
          src={siteContent.brand.heroImage}
          alt=""
          className="hero-ocean-image h-full w-full object-cover object-[58%_48%]"
        />
      </picture>
      <div className="orykai-hero-vignette absolute inset-0" />
      <div className="orykai-hero-goldwash absolute inset-0" />
      <div className="orykai-hero-clinical-grid absolute inset-0" />

      <div className="relative z-10 flex min-h-screen w-full flex-col justify-end px-4 pb-7 pt-24 sm:px-6 md:px-12 md:pb-10">
        <div className="relative mt-24 max-w-7xl md:mt-32">
          <div className="hero-fade mb-5 flex flex-wrap gap-3 text-sm uppercase text-[#d8b35f]">
            <span className="border border-[#d8b35f]/45 bg-[#050505]/20 px-3 py-2 backdrop-blur-[2px]">
              Negocios locales
            </span>
            <span className="border border-white/18 bg-[#050505]/16 px-3 py-2 text-white/68 backdrop-blur-[2px]">
              Digitalización a medida
            </span>
          </div>

          <h1 className="hero-title-shadow font-heading text-7xl font-black uppercase leading-none text-white sm:text-8xl md:text-9xl lg:text-[10rem]">
            <span className="flex flex-wrap overflow-hidden">
              {title.split('').map((char, index) => (
                <span key={`${char}-${index}`} className="hero-char inline-block origin-bottom">
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <div className="hero-horizon-line mt-6 h-px w-full bg-gradient-to-r from-[#d8b35f] via-white/35 to-transparent md:mt-8" />

          <div className="hero-fade mt-6 grid gap-8 md:mt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="font-serif-italic text-2xl leading-snug text-[#f4f0e5] md:text-4xl">
                "{siteContent.brand.heroQuote}"
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 text-sm uppercase text-white/72 sm:grid-cols-2 md:grid-cols-4">
                {siteContent.heroStats.map((stat) => (
                  <div key={stat.label} className="border-t border-white/18 pt-3">
                    <div className="mb-2 font-mono text-[0.68rem] text-[#d8b35f]">{stat.label}</div>
                    <div className="max-w-[14rem] leading-snug">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-2 bg-[#d8b35f] px-6 py-4 text-sm font-bold uppercase text-[#050505] transition-transform duration-300 hover:-translate-y-1"
              >
                {siteContent.brand.primaryCta} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-[#050505]/18 px-6 py-4 text-sm font-bold uppercase text-white backdrop-blur-[2px] transition-colors duration-300 hover:border-[#2fb7b2] hover:text-[#2fb7b2]"
              >
                Ver servicios <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
