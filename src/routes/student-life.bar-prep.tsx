import { ContentPage, Prose } from "@/components/site/ContentPage";

import { usePageMeta } from "@/lib/use-page-meta";
function Page() {
  usePageMeta("Bar Exam Prep — Bright Vision Law College", "Nepal Bar Council examination preparation for BVC graduates.");
  return (
    <ContentPage eyebrow="Student Life" title="Bar Exam Preparation" subtitle="A structured pathway to the Nepal Bar Council enrollment.">
      <Prose>
        <p>Final-year and post-graduation students enroll in BVC's dedicated Bar Examination cohort: 16 weeks of intensive revision, weekly mock papers, and oral advocacy drills with sitting members of the High Court Biratnagar Bar.</p>
        <h2>Modules</h2>
        <ul>
          <li>Substantive law revision (Muluki Civil & Criminal Codes)</li>
          <li>Procedural law drills (CPC, CrPC, Evidence)</li>
          <li>Drafting workshops (plaints, written statements, petitions)</li>
          <li>Viva-voce rehearsals with mock examiners</li>
        </ul>
        <p>BVC's first-attempt pass rate has averaged over 78% across the past five cohorts.</p>
      </Prose>
    </ContentPage>
  );
}

export default Page;
