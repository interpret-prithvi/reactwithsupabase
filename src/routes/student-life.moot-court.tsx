import { ContentPage, Prose } from "@/components/site/ContentPage";

import { usePageMeta } from "@/lib/use-page-meta";
function Page() {
  usePageMeta("Moot Court Room — Bright Vision Law College", "The BVC Moot Court Room and competitive advocacy programme.");
  return (
    <ContentPage eyebrow="Student Life" title="Moot Court Room" subtitle="Advocacy in practice — where students argue before practicing jurists.">
      <Prose>
        <p>The Moot Court Room at BVC is modeled on Nepal's High Court courtrooms, equipped with a judge's bench, advocates' tables, witness stand, and audio recording. Every student participates in at least four internal moots before graduation.</p>
        <h2>Annual Calendar</h2>
        <ul>
          <li>Inter-Year Internal Moot — March</li>
          <li>BVC National Invitational Moot — October</li>
          <li>K.K. Memorial Constitutional Law Moot — December</li>
        </ul>
        <h2>Recent Achievements</h2>
        <p>BVC teams have placed in the top 8 at the National Moot Court Competition for five consecutive years.</p>
      </Prose>
    </ContentPage>
  );
}

export default Page;
