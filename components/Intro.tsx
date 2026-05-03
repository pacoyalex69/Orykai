import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      className="flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] px-4 pb-16 pt-28 text-[#f4f0e5]"
      aria-labelledby="intro-title"
    >
      <div className="container mx-auto flex justify-center">
        <div
          id="intro-title"
          className="flex flex-col items-center text-center font-heading text-[1.75rem] font-black uppercase leading-none sm:text-5xl md:text-6xl 2xl:text-7xl"
        >
          <div className="intro-line-wrap flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 overflow-hidden md:gap-x-4">
            <span className="intro-token">No hacemos</span>
            <span className="intro-token font-serif-italic text-2xl font-light lowercase text-[#d8b35f] sm:text-4xl md:text-5xl 2xl:text-6xl">
              solo
            </span>
          </div>

          <div className="intro-line-wrap flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 overflow-hidden md:gap-x-4">
            <span className="intro-token stroke-text">páginas</span>
            <span className="intro-token">bonitas.</span>
          </div>

          <div className="intro-line-wrap flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 overflow-hidden md:gap-x-4">
            <span className="intro-token">Construimos</span>
            <span className="intro-token font-serif-italic text-2xl font-light lowercase text-white sm:text-4xl md:text-5xl 2xl:text-6xl">
              sistemas
            </span>
          </div>

          <div className="intro-line-wrap flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 overflow-hidden md:gap-x-4">
            <span className="intro-token">que venden</span>
            <span className="intro-token text-[#2fb7b2]">y operan.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
