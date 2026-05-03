import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent, TeamMember } from '../content/siteContent';

gsap.registerPlugin(ScrollTrigger);

type TeamCardProps = {
  member: TeamMember;
};

function TeamCard({ member }: TeamCardProps) {
  return (
    <article
      className="team-card group border border-white/15 bg-white/[0.03] p-5 transition-colors duration-500 hover:border-[var(--member-accent)]"
      style={{ '--member-accent': member.accent } as CSSProperties}
    >
      <div className="team-portrait relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden border border-white/10 bg-[#080808]">
        <div className="team-portrait-grid absolute inset-0" />
        {member.photo ? (
          <img src={member.photo} alt={member.fullName} className="relative z-10 h-full w-full object-cover" />
        ) : (
          <span className="relative z-10 font-heading text-7xl font-black text-[var(--member-accent)] md:text-8xl">
            {member.initials}
          </span>
        )}
      </div>

      <div className="border-t border-white/15 pt-5">
        <div className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div>
            <h3 className="font-serif-italic text-4xl text-white">{member.name}</h3>
            <p className="mt-1 text-sm uppercase text-[var(--member-accent)]">{member.role}</p>
          </div>
          <p className="max-w-xs text-sm uppercase text-white/45 md:text-right">{member.focus}</p>
        </div>
        <p className="mb-6 text-lg leading-relaxed text-white/62">{member.bio}</p>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span key={skill} className="border border-white/10 px-3 py-1 text-xs uppercase text-white/52">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        y: 80,
        opacity: 0,
        stagger: 0.16,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="section-padding bg-[#050505] text-[#f4f0e5]"
      aria-labelledby="team-title"
    >
      <div className="container">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[0.65fr_1fr] md:items-end">
          <div>
            <span className="border border-white/15 px-4 py-2 text-xs uppercase text-[#d8b35f]">
              Equipo núcleo
            </span>
            <h2 id="team-title" className="mt-8 font-heading text-5xl font-black uppercase leading-none md:text-7xl">
              Dos perfiles.
              <span className="block stroke-text">Una dirección.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-relaxed text-white/62">
            Francisco y Alejandro combinan desarrollo multiplataforma, web, automatizacion y
            criterio comercial para digitalizar negocios sin inflar el proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {siteContent.team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
