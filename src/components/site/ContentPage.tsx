import type { ReactNode } from "react";
import { SiteLayout, PageHero } from "./Layout";

export function ContentPage({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">{children}</div>
      </section>
    </SiteLayout>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-foreground/85 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-navy">
      {children}
    </div>
  );
}