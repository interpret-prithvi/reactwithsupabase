import { ContentPage } from "@/components/site/ContentPage";

import { usePageMeta } from "@/lib/use-page-meta";
const FACULTY = [
  { name: "Prof. Dr. Saraswati Adhikari", title: "Constitutional Law", credentials: "PhD, T.U. · Advocate, Supreme Court" },
  { name: "Adv. Bikash Karki", title: "Criminal Law & Procedure", credentials: "LL.M, Delhi · Senior Advocate" },
  { name: "Dr. Manisha Limbu", title: "Human Rights & Gender Justice", credentials: "SJD, Melbourne" },
  { name: "Prof. Hari Prasad Bhattarai", title: "Jurisprudence", credentials: "PhD, BHU" },
  { name: "Adv. Sanjay Thapa", title: "Business & Trade Law", credentials: "LL.M, NUS · Corporate Counsel" },
  { name: "Adv. Pratima Rai", title: "Clinical Legal Education", credentials: "LL.M, T.U. · Director, Legal Aid Clinic" },
];

function Page() {
  usePageMeta("Faculty Members — Bright Vision Law College", "Meet the distinguished legal scholars and practitioners on the BVC faculty.");
  return (
    <ContentPage eyebrow="About BVC" title="Faculty Members" subtitle="A community of scholars, practitioners, and public servants.">
      <div className="grid gap-4 sm:grid-cols-2">
        {FACULTY.map((f) => (
          <div key={f.name} className="group rounded-md border border-border bg-card p-6 transition hover:border-primary hover:shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy font-serif text-xl font-bold text-gold">
              {f.name.split(" ").slice(-2).map((s) => s[0]).join("")}
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold text-navy">{f.name}</h3>
            <div className="mt-1 text-sm font-semibold text-primary">{f.title}</div>
            <div className="mt-1 text-xs text-muted-foreground">{f.credentials}</div>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}

export default Page;
