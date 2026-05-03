import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = textRefs.current.filter(Boolean) as HTMLHeadingElement[];
      if (!texts.length) return;

      gsap.set(texts, {
        opacity: 0,
        scale: 0.94,
        filter: 'blur(10px)',
      });

      gsap.set(texts[0], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${siteContent.manifesto.length * 95}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1.15,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      texts.forEach((text, index) => {
        const nextText = texts[index + 1];
        if (!nextText) return;

        tl.to(text, {
          opacity: 0,
          scale: 0.94,
          filter: 'blur(10px)',
          duration: 0.65,
          ease: 'none',
        })
          .to(
            nextText,
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.65,
              ease: 'none',
            },
            '<'
          )
          .to({}, { duration: 0.35 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#050505] text-[#f4f0e5]"
    >
      <div className="manifesto-grid absolute inset-0" />
      <div className="manifesto-kanji absolute right-4 top-16 font-serif text-8xl text-[#d8b35f]/10 md:right-16 md:text-9xl">
        改
      </div>

      <div className="container relative z-10 text-center">
        {siteContent.manifesto.map((text, index) => (
          <h2
            key={text}
            ref={(element) => {
              textRefs.current[index] = element;
            }}
            className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 font-heading text-5xl font-black uppercase leading-none md:text-8xl ${
              index === 0 ? 'opacity-100' : 'scale-95 opacity-0 blur-sm'
            }`}
          >
            {text}
          </h2>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 text-xs font-mono uppercase text-white/45">
        <span className="h-px w-10 bg-[#d8b35f]" />
        Manifiesto Orykai
        <span className="h-px w-10 bg-[#2fb7b2]" />
      </div>
    </section>
  );
}
