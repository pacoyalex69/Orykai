import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Minus, Plus } from 'lucide-react';
import { siteContent } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-title', {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-padding bg-[#e8e2d3] text-[#050505]"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <h2
            id="process-title"
            className="process-title font-heading text-6xl font-black uppercase leading-none md:text-8xl"
          >
            Nuestro
            <br />
            Proceso
          </h2>
          <p className="max-w-lg text-xl font-medium leading-relaxed">
            Un método corto, claro y muy práctico: entender, diseñar, construir y lanzar con la
            menor fricción posible.
          </p>
        </div>

        <div className="border-t border-black">
          {siteContent.process.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={step.num} className="border-b border-black">
                <button
                  type="button"
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left md:py-11"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`process-panel-${step.num}`}
                >
                  <span className="flex items-baseline gap-6 md:gap-14">
                    <span className="font-mono text-sm opacity-50">({step.num})</span>
                    <span className="font-serif-italic text-4xl font-normal transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                      {step.title}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-black/25">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>

                <div
                  id={`process-panel-${step.num}`}
                  className={`overflow-hidden transition-all duration-700 ease-out-expo ${
                    isOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-10 md:pl-[112px]">
                    <p className="max-w-3xl text-xl font-light leading-relaxed md:text-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
