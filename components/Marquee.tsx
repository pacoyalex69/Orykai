import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '../content/siteContent';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-inner', {
        xPercent: -50,
        repeat: -1,
        duration: 24,
        ease: 'linear',
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const items = [...siteContent.marquee, ...siteContent.marquee];

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden border-y border-[#d8b35f]/25 bg-[#e8e2d3] py-8 text-[#050505] md:py-12"
      aria-hidden="true"
    >
      <div className="marquee-inner flex w-fit whitespace-nowrap">
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center">
            {items.map((item, index) => (
              <div key={`${groupIndex}-${item}-${index}`} className="flex items-center gap-8 px-5">
                <span
                  className={`font-heading text-5xl font-black uppercase leading-none md:text-8xl ${
                    index % 2 === 0 ? 'text-transparent stroke-text-dark' : ''
                  }`}
                >
                  {item}
                </span>
                <span className="h-3 w-3 bg-[#2fb7b2]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
