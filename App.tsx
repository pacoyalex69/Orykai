import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import WorkGallery from './components/WorkGallery';
import Process from './components/Process';
import Team from './components/Team';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Footer from './components/Footer';
// import CustomCursor from './components/CustomCursor';
import Manifesto from './components/Manifesto';
import Preloader from './components/Preloader';
import Trust from './components/Trust';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute('href');

      if (!hash || hash === '#') return;

      const targetElement = document.querySelector<HTMLElement>(hash);
      if (!targetElement) return;

      event.preventDefault();
      window.history.pushState(null, '', hash);
      lenis.scrollTo(targetElement, {
        offset: -24,
        duration: 1.85,
        easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      });
    };

    const refreshScrollTriggers = () => ScrollTrigger.refresh();
    const refreshTimer = window.setTimeout(refreshScrollTriggers, 800);
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('load', refreshScrollTriggers);
    document.fonts?.ready.then(refreshScrollTriggers).catch(() => undefined);

    return () => {
      window.clearTimeout(refreshTimer);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('load', refreshScrollTriggers);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#f4f0e5]">
      <Preloader />
      {/* <CustomCursor /> */}
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <WorkGallery />
        <Process />
        <Manifesto />
        <Team />
        <Trust />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}
