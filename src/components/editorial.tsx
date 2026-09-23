import { Link } from "@tanstack/react-router";
import { ArrowDown, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gulf-hero.jpg";
import womenImage from "@/assets/women-editorial.jpg";
import executiveImage from "@/assets/executive-editorial.jpg";
import interiorImage from "@/assets/concierge-interior.jpg";

export const imagery = { heroImage, womenImage, executiveImage, interiorImage };

export type EditorialSection = { id: string; title: string; eyebrow?: string; copy: string; note?: string };

export function PageHero({ eyebrow, title, intro, image = interiorImage, dark = false }: { eyebrow: string; title: string; intro: string; image?: string; dark?: boolean }) {
  return <section className={`grain relative min-h-[75svh] overflow-hidden ${dark ? "bg-primary" : "bg-forest"}`}>
    <img src={image} width={1280} height={960} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
    <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/72 to-primary/10" />
    <div className="relative mx-auto flex min-h-[75svh] max-w-[1500px] items-end px-5 pb-16 pt-36 text-primary-foreground lg:px-10 lg:pb-24">
      <div className="max-w-4xl"><p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-gold">{eyebrow}</p><h1 className="max-w-4xl text-[clamp(3.4rem,8vw,8rem)] leading-[0.84]">{title}</h1><p className="mt-8 max-w-xl text-sm leading-7 text-primary-foreground/72 sm:text-base">{intro}</p></div>
      <ArrowDown className="absolute bottom-8 end-6 size-5 text-gold lg:end-10" aria-hidden="true" />
    </div>
  </section>;
}

export function EditorialSections({ sections, image = interiorImage, closing = "A private conversation can be the beginning of meaningful change." }: { sections: EditorialSection[]; image?: string; closing?: string }) {
  return <>
    <div className="editorial-grid mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <aside className="lg:sticky lg:top-28 lg:self-start"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">A considered approach</p><p className="mt-5 max-w-xs font-display text-3xl leading-tight">Support shaped around the person, not a programme.</p><img src={image} width={1280} height={960} loading="lazy" alt="Quiet, private setting for personal reflection" className="mt-10 aspect-[4/5] w-full max-w-sm object-cover" /></aside>
        <div className="divide-y divide-border">{sections.map((section, index) => <section id={section.id} key={section.id} className="grid gap-5 py-12 first:pt-0 sm:grid-cols-[3rem_1fr] sm:py-16">
          <span className="text-xs text-gold">0{index + 1}</span><div><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{section.eyebrow ?? "Private wellbeing"}</p><h2 className="mt-3 text-4xl leading-none sm:text-6xl">{section.title}</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{section.copy}</p>{section.note && <p className="mt-5 border-s-2 border-gold ps-4 text-sm italic text-foreground/72">{section.note}</p>}<Link to="/book" className="mt-7 inline-block text-[10px] font-semibold uppercase tracking-[0.16em] underline decoration-gold underline-offset-8">Book a Private Session</Link></div>
        </section>)}</div>
      </div>
    </div>
    <FinalCta title={closing} />
  </>;
}

export function FinalCta({ title = "Wellbeing, considered privately.", vip = false }: { title?: string; vip?: boolean }) {
  return <section className="bg-forest px-5 py-20 text-accent-foreground lg:px-10 lg:py-28"><div className="mx-auto flex max-w-5xl flex-col items-center text-center"><LockKeyhole className="mb-7 size-5 text-gold"/><p className="text-[10px] uppercase tracking-[0.22em] text-gold">Private · Discreet · Personal</p><h2 className="mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-7xl">{title}</h2><p className="mt-6 max-w-lg text-sm leading-7 text-accent-foreground/65">Every enquiry is received with care. The first conversation is an opportunity to understand what support may be appropriate.</p><Button asChild variant="ivory" size="lg" className="mt-9"><Link to="/book">{vip ? "Request a Private Consultation" : "Book a Private Session"}</Link></Button></div></section>;
}

export function RouteMeta({ title, description, path }: { title: string; description: string; path: string }) {
  return null;
}