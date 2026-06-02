import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(128,0,32,0.35),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        {eyebrow && (
          <div className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">{eyebrow}</div>
        )}
        <h1 className="font-serif text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}