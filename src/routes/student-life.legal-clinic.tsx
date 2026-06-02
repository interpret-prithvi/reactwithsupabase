import { ContentPage, Prose } from "@/components/site/ContentPage";

import { usePageMeta } from "@/lib/use-page-meta";
function Page() {
  usePageMeta("Legal Advice Clinic — Bright Vision Law College", "BVC's pro-bono legal aid clinic serving the Biratnagar community.");
  return (
    <ContentPage eyebrow="Student Life" title="Legal Advice Clinic" subtitle="Pro-bono service is part of the BVC curriculum.">
      <Prose>
        <p>The BVC Legal Advice Clinic, supervised by faculty advocates, provides free consultation on civil, family, and labor matters to underserved residents of Morang district. Students assist with intake, drafting, and procedural advice under the Advocates Act framework.</p>
        <h2>Operating Hours</h2>
        <ul>
          <li>Tuesday & Friday · 2:00 PM – 5:00 PM</li>
          <li>Walk-in and appointment based</li>
        </ul>
      </Prose>
    </ContentPage>
  );
}

export default Page;
