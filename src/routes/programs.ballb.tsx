import { ContentPage, Prose } from "@/components/site/ContentPage";

import { usePageMeta } from "@/lib/use-page-meta";
function Page() {
  usePageMeta("B.A.LL.B (5-Year Integrated) — Bright Vision Law College", "Five-year integrated B.A.LL.B programme at Bright Vision Law College, affiliated with Purbanchal University.");
  return (
    <ContentPage eyebrow="Programmes" title="B.A.LL.B — 5-Year Integrated" subtitle="A rigorous undergraduate journey across humanities, doctrine, and clinical practice.">
      <Prose>
        <h2>Programme Structure</h2>
        <p>The five-year B.A.LL.B integrates social sciences (political theory, economics, history) with the full body of substantive and procedural law. Years I–II focus on humanities and foundational law; Years III–V move into constitutional law, criminal and civil procedure, evidence, international law, and clinical advocacy.</p>
        <h2>Core Subjects</h2>
        <ul>
          <li>Constitutional Law of Nepal</li>
          <li>Law of Contracts, Torts, and Property</li>
          <li>Criminal Law (Muluki Ain) and Procedure</li>
          <li>Civil Procedure and Evidence</li>
          <li>Public International Law & Human Rights</li>
          <li>Jurisprudence and Legal Theory</li>
          <li>Clinical Legal Education and Moot Court</li>
        </ul>
        <h2>Eligibility</h2>
        <p>+2 / Intermediate (any stream) with a minimum aggregate of 45%. Admission via the BVC / Purbanchal University Entrance Examination.</p>
      </Prose>
    </ContentPage>
  );
}

export default Page;
