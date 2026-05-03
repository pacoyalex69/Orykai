import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest('a, button, .cursor-pointer'));

    const onMouseOver = (event: MouseEvent) => {
      if (isInteractive(event.target)) cursor.classList.add('hovered');
    };

    const onMouseOut = (event: MouseEvent) => {
      if (isInteractive(event.target)) cursor.classList.remove('hovered');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
