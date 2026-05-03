import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

export default function ImageBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 16,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[60vh] w-full overflow-hidden bg-[#050505] md:h-[76vh]">
      <div className="orykai-hero-field absolute inset-0" />
      <img
        ref={imgRef}
        src={siteContent.brand.logo}
        alt=""
        className="absolute left-1/2 top-1/2 h-[52vh] w-auto -translate-x-1/2 -translate-y-1/2 object-contain opacity-45 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[#050505]/35" />
    </div>
  );
}
