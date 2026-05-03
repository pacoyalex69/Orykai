import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '../content/siteContent';

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => setVisible(false), 450);
      return () => window.clearTimeout(timeout);
    }

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.set('.preloader-expander', { xPercent: -50, yPercent: -50, scale: 0, rotate: 45 });

      gsap.to(counter, {
        value: 100,
        duration: 2.35,
        ease: 'power3.inOut',
        onUpdate: () => setProgress(Math.round(counter.value)),
      });

      const tl = gsap.timeline({
        delay: 2.2,
        onComplete: () => setVisible(false),
      });

      tl.to('.preloader-digit', {
        yPercent: -120,
        stagger: 0.04,
        duration: 0.55,
        ease: 'power4.inOut',
      })
        .to(
          '.preloader-bar-left',
          {
            rotate: 90,
            y: -46,
            duration: 0.45,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to(
          '.preloader-bar-right',
          {
            x: -76,
            y: 68,
            duration: 0.45,
            ease: 'power3.inOut',
          },
          '<'
        )
        .to('.preloader-loader', {
          scale: 1.08,
          rotate: 45,
          duration: 0.45,
          ease: 'power3.inOut',
        })
        .to(
          '.preloader-center',
          {
            opacity: 0,
            scale: 0.96,
            duration: 0.35,
            ease: 'power2.out',
          },
          '<'
        )
        .to(
          '.preloader-expander',
          {
            scale: 1,
            rotate: 0,
            duration: 0.9,
            ease: 'power4.inOut',
          },
          '-=0.1'
        )
        .to(
          root,
          {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.75,
            ease: 'power4.inOut',
          },
          '-=0.2'
        );
    }, root);

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  const paddedProgress = progress.toString().padStart(3, '0');

  return (
    <div
      ref={rootRef}
      className="orykai-preloader fixed inset-0 z-[9998] bg-[#050505] text-[#f4f0e5]"
      role="status"
      aria-label="Cargando Orykai Software"
    >
      <div className="absolute inset-0 preloader-surface" />
      <div className="preloader-expander fixed left-1/2 top-1/2 z-[5] h-[160vmax] w-[160vmax] bg-[#d8b35f]" />

      <div className="relative z-10 flex h-full min-h-[100dvh] flex-col p-5 sm:p-8 md:p-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={siteContent.brand.logo}
              alt=""
              className="h-10 w-10 border border-[#d8b35f]/50 object-cover"
            />
            <span className="font-heading text-lg font-bold uppercase">Orykai Software</span>
          </div>
          <span className="hidden text-sm font-mono uppercase text-[#d8b35f] sm:inline">
            Web · Apps · IA · SEO local
          </span>
        </div>

        <div className="preloader-center absolute inset-0 z-10 flex items-center justify-center px-5 text-center">
          <div className="flex w-full max-w-4xl flex-col items-center gap-7">
            <div>
              <p className="mb-5 text-sm font-mono uppercase text-[#d8b35f]">Preparando diagnóstico</p>
              <h2 className="font-heading text-5xl font-black uppercase leading-none sm:text-6xl md:text-8xl">
                Código con
                <span className="block text-[#d8b35f]">criterio.</span>
              </h2>
            </div>

            <div className="preloader-loader flex h-12 w-72 max-w-[70vw] bg-[#1f2625]">
              <div className="preloader-bar-left h-full w-2/3 bg-[#d8b35f]" />
              <div className="preloader-bar-right h-full w-1/3 bg-[#2fb7b2]" />
            </div>

            <div className="flex h-24 justify-center overflow-hidden font-mono text-7xl leading-none text-[#f4f0e5] sm:text-8xl">
              {paddedProgress.split('').map((digit, index) => (
                <span key={`${digit}-${index}`} className="preloader-digit inline-block">
                  {digit}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="relative z-20 mt-auto max-w-md text-sm uppercase leading-relaxed text-white/45">
          Webs, apps y automatizaciones para negocios que quieren captar y trabajar mejor.
        </p>
      </div>
    </div>
  );
}
