import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  ["Home", "/"], ["Wellbeing", "/wellbeing"], ["Women", "/women"],
  ["Men", "/men"], ["Business & Executive", "/business"], ["About", "/about"],
  ["Book a Session", "/book"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return <>
    <a href="#main-content" className="fixed start-4 top-4 z-[100] -translate-y-24 bg-background px-4 py-3 text-xs uppercase focus:translate-y-0">Skip to content</a>
    <header className="absolute inset-x-0 top-0 z-50 border-b border-background/20 text-background">
      <div className="mx-auto grid h-22 max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-10">
        <Link to="/" className="min-w-0 leading-none" aria-label="GULFWELLBEING home">
          <span className="block truncate font-display text-xl uppercase tracking-[0.11em] sm:text-2xl">Gulfwellbeing</span>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-background/65">Tarkan Wellbeing Advisor</span>
        </Link>
        <nav className="hidden justify-self-center lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-5 xl:gap-7">
            {navigation.slice(0, 6).map(([label, to]) => <li key={to}>
              <Link to={to} activeOptions={{ exact: to === "/" }} className="text-[11px] uppercase tracking-[0.1em] text-background/78 transition-colors hover:text-background data-[status=active]:text-gold">{label}</Link>
            </li>)}
          </ul>
        </nav>
        <Button asChild variant="ivory" className="hidden lg:inline-flex"><Link to="/book">Book a Session</Link></Button>
        <Button variant="ghost" size="icon" onClick={() => setOpen(true)} className="text-background lg:hidden" aria-label="Open menu"><Menu /></Button>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[90] bg-primary text-primary-foreground lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="grid h-full grid-rows-[auto_1fr_auto] p-6">
        <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-5">
          <span className="font-display text-xl uppercase tracking-[0.11em]">Gulfwellbeing</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-primary-foreground" aria-label="Close menu"><X /></Button>
        </div>
        <nav className="flex items-center py-8" aria-label="Mobile navigation"><ul className="space-y-3">
          {navigation.map(([label, to], index) => <li key={to} className="flex items-baseline gap-4">
            <span className="text-[10px] text-gold">0{index + 1}</span>
            <Link to={to} className="font-display text-[clamp(2rem,9vw,4rem)] leading-[1.05]">{label}</Link>
          </li>)}
        </ul></nav>
        <p className="border-t border-primary-foreground/20 pt-5 text-xs leading-5 text-primary-foreground/60">Private wellbeing advisory across the Gulf and internationally.</p>
      </div>
    </div>}
  </>;
}

export function SiteFooter() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="mx-auto max-w-[1500px] px-5 py-16 lg:px-10 lg:py-24">
      <div className="grid gap-14 border-b border-primary-foreground/15 pb-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><p className="font-display text-4xl uppercase tracking-[0.1em] sm:text-5xl">Gulfwellbeing</p><p className="mt-4 max-w-sm text-sm leading-7 text-primary-foreground/60">Private wellbeing advisory for individuals, families, and leaders across the Gulf and internationally.</p></div>
        <div><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-gold">Navigation</p><ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-primary-foreground/72">{navigation.map(([label,to]) => <li key={to}><Link to={to} className="hover:text-primary-foreground">{label}</Link></li>)}</ul></div>
        <div><p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-gold">Private access</p><ul className="space-y-3 text-sm text-primary-foreground/72"><li><Link to="/business/vip-concierge-wellbeing">VIP Concierge Wellbeing</Link></li><li><Link to="/blog">Private Advisory Journal</Link></li><li className="pt-4 text-xs">[Add verified contact details]</li></ul></div>
      </div>
      <div className="flex flex-col gap-4 pt-7 text-[10px] uppercase tracking-[0.14em] text-primary-foreground/45 sm:flex-row sm:justify-between"><span>© 2026 GULFWELLBEING</span><span>Privacy Policy &nbsp; · &nbsp; Terms & Conditions</span></div>
    </div>
  </footer>;
}

export function ArrowLink({ to, children }: { to: "/book" | "/wellbeing" | "/about" | "/business/vip-concierge-wellbeing"; children: React.ReactNode }) {
  return <Link to={to} className="group inline-flex items-center gap-3 border-b border-current pb-2 text-xs font-semibold uppercase tracking-[0.14em]">{children}<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>;
}