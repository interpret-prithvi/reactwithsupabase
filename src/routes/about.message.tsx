import { ContentPage, Prose } from "@/components/site/ContentPage";
import { Quote } from "lucide-react";

import { usePageMeta } from "@/lib/use-page-meta";
function Page() {
  usePageMeta("Message from Chief — Bright Vision Law College", "A welcoming note from the Principal of Bright Vision Law College.");
  return (
    <ContentPage eyebrow="About BVC" title="Message from the Chief" subtitle="A note from the Principal's desk.">
      <div className="rounded-md border-l-4 border-primary bg-surface p-8">
        <Quote className="h-8 w-8 text-primary" />
        <p className="mt-4 font-serif text-xl leading-relaxed text-navy italic">
          "Law is not merely a profession; it is a public trust. At BVC we teach our students to wield that trust with intellect, courage, and humility."
        </p>
        <div className="mt-6">
          <div className="font-serif text-base font-bold text-navy">Adv. Rajendra Sharma</div>
          <div className="text-sm text-muted-foreground">Principal · Bright Vision Law College</div>
        </div>
      </div>
      <div className="mt-10">
        <Prose>
          <p>Welcome to Bright Vision Law College. For over sixteen years, this institution has been a quiet but determined contributor to the rule of law in Nepal. Our faculty includes practicing advocates, sitting and retired judges, and academics whose collective experience spans every corner of Nepal's constitutional and statutory framework.</p>
          <p>We invite prospective students who are willing to be challenged — to read deeply, argue rigorously, and serve generously.</p>
        </Prose>
      </div>
    </ContentPage>
  );
}

export default Page;
