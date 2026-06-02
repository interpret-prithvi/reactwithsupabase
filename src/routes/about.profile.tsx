import { ContentPage, Prose } from "@/components/site/ContentPage";

import { usePageMeta } from "@/lib/use-page-meta";
function Page() {
  usePageMeta("Our Profile — Bright Vision Law College", "The heritage, vision, and accreditation of Bright Vision Law College, Biratnagar.");
  return (
    <ContentPage eyebrow="About BVC" title="Our Profile" subtitle="A heritage of legal scholarship in Eastern Nepal, established 2010.">
      <Prose>
        <p>
          Bright Vision Law College (BVC) was founded in 2010 with a singular mission:
          to cultivate principled, technically proficient, and socially conscious legal
          professionals for Nepal and beyond. Located in Samjhana Chowk, Biratnagar, BVC
          is affiliated with <strong>Purbanchal University</strong> and formally
          recognized by the <strong>Nepal Bar Council</strong>.
        </p>
        <h2>Vision</h2>
        <p>To be the preeminent law school of Eastern Nepal — recognized for academic rigor, ethical advocacy, and constitutional fidelity.</p>
        <h2>Mission</h2>
        <ul>
          <li>Deliver an integrated curriculum combining doctrinal study with clinical practice.</li>
          <li>Build a research culture that contributes to Nepal's evolving jurisprudence.</li>
          <li>Provide pro-bono legal services to marginalized communities.</li>
          <li>Prepare graduates for the Bar, the Bench, the academy, and public service.</li>
        </ul>
        <h2>Accreditation</h2>
        <p>BVC's programmes are conferred by Purbanchal University and our graduates are eligible to appear for the Nepal Bar Council enrollment examinations.</p>
      </Prose>
    </ContentPage>
  );
}

export default Page;
