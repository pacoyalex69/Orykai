import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Demos', href: '#cases' },
  { label: 'Proceso', href: '#process' },
  { label: 'Equipo', href: '#team' },
  { label: 'Contacto', href: '#contact' },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        y: -32,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.from(linksRef.current?.children || [], {
        y: -18,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.35,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-[#050505]/88 px-4 py-4 text-[#f4f0e5] sm:px-6 md:px-8"
      >
        <a
          ref={logoRef}
          href="#home"
          className="relative z-50 flex items-center gap-3 font-heading text-base font-bold uppercase md:text-lg"
          aria-label="Ir al inicio de Orykai Software"
        >
          <img
            src={siteContent.brand.logo}
            alt=""
            className="h-9 w-9 border border-white/30 object-cover"
          />
          <span className="hidden sm:inline">{siteContent.brand.name}</span>
          <span className="sm:hidden">{siteContent.brand.shortName}</span>
        </a>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul ref={linksRef} className="flex items-center gap-7 text-sm font-medium uppercase">
            {navItems.map((item) => (
              <li key={item.href} className="group overflow-hidden">
                <a href={item.href} className="block relative">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute left-0 top-full block text-[#d8b35f] transition-transform duration-500 group-hover:-translate-y-full">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#diagnostico"
                className="inline-flex items-center gap-2 border border-white/40 px-4 py-2 transition-colors duration-300 hover:border-[#d8b35f] hover:text-[#d8b35f]"
              >
                Diagnóstico <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir o cerrar menú"
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#050505] text-[#f4f0e5] transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex h-full items-center justify-center" aria-label="Navegación móvil">
          <ul className="flex flex-col items-center gap-8 text-3xl font-bold uppercase">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={`transition-all duration-500 ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 70}ms` : '0ms' }}
              >
                <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li
              className={`transition-all duration-500 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${navItems.length * 70}ms` : '0ms' }}
            >
              <a
                href="#diagnostico"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 border border-[#d8b35f] px-5 py-3 text-base text-[#d8b35f]"
              >
                Solicitar diagnóstico <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
