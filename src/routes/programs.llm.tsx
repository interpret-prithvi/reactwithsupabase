import { ContentPage, Prose } from "@/components/site/ContentPage";
import { Scale, Gavel, Briefcase } from "lucide-react";

import { usePageMeta } from "@/lib/use-page-meta";
const TRACKS = [
  { Icon: Scale, name: "Human Rights & Gender Justice", body: "Constitutional rights, gender, transitional justice, and international human rights mechanisms." },
  { Icon: Gavel, name: "Criminal Law & Justice", body: "Substantive criminal law, evidence, sentencing theory, and criminal procedure reform." },
  { Icon: Briefcase, name: "Business & International Trade Law", body: "Corporate governance, WTO law, FDI, arbitration, and cross-border commercial practice." },
];

function Page() {
  usePageMeta("LL.M (2-Year) — Bright Vision Law College", "Two-year LL.M programme with three specialization tracks at Bright Vision Law College.");
  return (
    <ContentPage eyebrow="Programmes" title="LL.M — 2-Year Postgraduate" subtitle="Three specialization tracks led by practicing jurists and scholars.">
      <div className="grid gap-5 md:grid-cols-3">
        {TRACKS.map((t) => (
          <div key={t.name} className="group rounded-md border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <t.Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold text-navy">{t.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Prose>
          <h2>Programme Highlights</h2>
          <ul>
            <li>Four semesters of advanced coursework, seminars, and supervised research.</li>
            <li>Compulsory dissertation in the chosen specialization track.</li>
            <li>Faculty from the Supreme Court, High Court Biratnagar, and visiting international scholars.</li>
          </ul>
          <h2>Eligibility</h2>
          <p>LL.B or B.A.LL.B with a minimum CGPA of 2.5 (or 50% aggregate) and entrance qualification.</p>
        </Prose>
      </div>
    </ContentPage>
  );
}

export default Page;
