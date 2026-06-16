import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight, Download, Calendar, FileText, Award, Users,
  GraduationCap, ShieldCheck, ChevronRight, Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import heroMoot from "@/assets/hero-moot-court.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroLibrary from "@/assets/hero-library.jpg";
import missionImg from "@/assets/mission-image.jpg";

import { usePageMeta } from "@/lib/use-page-meta";
const SLIDES = [
  {
    img: heroMoot,
    eyebrow: "Excellence in Legal Education",
    title: "Nurturing the Legal\nMinds of Tomorrow",
    body: "Sixteen years of academic rigor, advocacy, and constitutional scholarship at the heart of Eastern Nepal.",
  },
  {
    img: heroCampus,
    eyebrow: "Estd. 2010 · Biratnagar",
    title: "A Heritage of\nJustice & Scholarship",
    body: "Affiliated with Purbanchal University and recognized by the Nepal Bar Council.",
  },
  {
    img: heroLibrary,
    eyebrow: "Research & Practice",
    title: "Where Tradition\nMeets Tomorrow",
    body: "World-class library, moot court, and legal aid clinic — built for the practitioners of the future.",
  },
];

const STATS = [
  { value: "Estd. 2010", label: "Sixteen Years of Excellence", Icon: Award },
  { value: "1500+", label: "Distinguished Graduates", Icon: GraduationCap },
  { value: "P.U.", label: "Purbanchal University Affiliated", Icon: ShieldCheck },
  { value: "NBC", label: "Nepal Bar Council Recognized", Icon: Users },
];

const STORAGE = "https://hiejrdhxzwrmnalhbegt.supabase.co/storage/v1/object/public/college_assets";

const NOTICES = [
  { date: "Aug 15, 2026", tag: "Admission", title: "B.A.LL.B Integrated — Entrance Exam Registration Closing", url: `${STORAGE}/admission-ballb.pdf` },
  { date: "Sep 02, 2026", tag: "Exam", title: "LL.M Entrance Examination — Hall Ticket Available", url: `${STORAGE}/exam.pdf` },
  { date: "Sep 18, 2026", tag: "Calendar", title: "Academic Calendar 2026-27 Released", url: `${STORAGE}/calender.pdf` },
  { date: "Oct 12, 2026", tag: "Event", title: "12th National Inter-College Moot Court Competition", url: `${STORAGE}/event.pdf` },
  { date: "Jun 16, 2026", tag: "General", title: "General Notice from the Registrar's Office", url: `${STORAGE}/general-notice.pdf` },
];

function Index() {
  usePageMeta("Bright Vision Law College — Premier Law School in Biratnagar, Nepal", "Bright Vision Law College, affiliated with Purbanchal University, offers 5-year B.A.LL.B and LL.M programs nurturing the legal minds of tomorrow.");
  return (
    <SliteWrapper>
      <Hero />
      <Stats />
      <Mission />
      <Programs />
      <Notices />
      <CTA />
    </SliteWrapper>
  );
}

function SliteWrapper({ children }: { children: React.ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden bg-navy">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        </div>
      ))}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
        <div className="max-w-2xl text-navy-foreground">
          <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            {SLIDES[idx].eyebrow}
          </div>
          <h1 className="font-serif text-4xl leading-[1.1] font-bold whitespace-pre-line sm:text-5xl lg:text-6xl xl:text-7xl">
            {SLIDES[idx].title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">{SLIDES[idx].body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-white hover:text-primary"
            >
              Apply Online
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`${STORAGE}/download-broucher.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-gold hover:bg-white/5 hover:text-gold"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute right-0 bottom-8 left-0 z-10 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 transition-all ${i === idx ? "w-10 bg-gold" : "w-5 bg-white/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative -mt-16 px-4 pb-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-md bg-border shadow-2xl lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="group relative bg-card p-6 transition-colors hover:bg-navy">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition group-hover:bg-gold/20 group-hover:text-gold">
              <s.Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div className="font-serif text-2xl font-bold text-navy transition group-hover:text-white lg:text-3xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground transition group-hover:text-white/70">{s.label}</div>
            <div className="absolute right-4 bottom-4 h-px w-8 bg-primary transition-all group-hover:w-16 group-hover:bg-gold" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-4 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            History & Mission
          </div>
          <h2 className="font-serif text-4xl leading-tight font-bold text-navy lg:text-5xl">
            A Premium Curriculum Rooted in Constitutional Values.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Founded in 2010 in Biratnagar, Bright Vision Law College has matured into one of
            Eastern Nepal's most respected institutions for legal training. Our integrated
            five-year B.A.LL.B and specialized two-year LL.M programmes blend doctrinal
            scholarship with clinical practice, advocacy, and policy research.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Affiliated with Purbanchal University & recognized by the Nepal Bar Council",
              "Three LL.M specialization tracks led by practicing jurists",
              "Active moot court, legal aid clinic, and bar examination cohort",
              "Faculty drawn from the Supreme Court, High Courts, and academia",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-navy">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-3">
            <Link to="/about/profile" className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-primary">
              Read Our Profile <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about/message" className="inline-flex items-center px-2 py-3 text-sm font-semibold text-primary hover:underline">
              Message from the Chief →
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-32 w-32 border-l-2 border-t-2 border-primary" />
          <div className="absolute -right-6 -bottom-6 h-32 w-32 border-r-2 border-b-2 border-gold" />
          <img
            src={missionImg}
            alt="Bright Vision Law College campus building"
            width={1200}
            height={900}
            loading="lazy"
            className="relative w-full object-cover shadow-2xl"
          />
          <div className="absolute bottom-8 left-8 max-w-xs bg-navy p-6 text-navy-foreground shadow-xl">
            <Quote className="h-6 w-6 text-gold" />
            <p className="mt-3 font-serif text-sm leading-relaxed italic">
              "Where the rule of law is studied not as a subject, but as a vocation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROGRAMS = [
  {
    duration: "5-Year Integrated",
    title: "B.A.LL.B",
    body: "A rigorous undergraduate programme blending humanities with substantive law — torts, contracts, constitutional law, criminal procedure, and clinical practice.",
    to: "/programs/ballb",
  },
  {
    duration: "2-Year Postgraduate",
    title: "LL.M",
    body: "Specialize in Human Rights & Gender Justice, Criminal Law & Justice, or Business & International Trade Law under the guidance of practicing scholars.",
    to: "/programs/llm",
  },
];

function Programs() {
  return (
    <section className="bg-surface px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">Academic Programmes</div>
            <h2 className="font-serif text-4xl font-bold text-navy lg:text-5xl">Designed for the Modern Advocate</h2>
          </div>
          <Link to="/programs/ballb" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Explore all programmes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group relative overflow-hidden rounded-md border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{p.duration}</div>
              <h3 className="mt-3 font-serif text-3xl font-bold text-navy lg:text-4xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:text-primary">
                Programme details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/5 transition group-hover:scale-150" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Notices() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">Live Notice Board</div>
            <h2 className="font-serif text-4xl font-bold text-navy lg:text-5xl">Latest from the Registrar's Office</h2>
          </div>
          <Link to="/notices" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all notices <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-md border border-border bg-card">
          {NOTICES.map((n, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-4 px-6 py-5 transition hover:bg-surface md:flex-row md:items-center ${i !== NOTICES.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center gap-3 md:w-44 md:shrink-0">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-navy">{n.date}</span>
              </div>
              <div className="md:w-24">
                <span className="inline-flex rounded-sm bg-primary/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary uppercase">
                  {n.tag}
                </span>
              </div>
              <div className="flex-1 text-sm font-medium text-navy">{n.title}</div>
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-80 transition group-hover:opacity-100 hover:underline"
              >
                <FileText className="h-3.5 w-3.5" />
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-20 text-navy-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(128,0,32,0.45),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-3 text-xs font-semibold tracking-[0.25em] text-gold uppercase">Admissions Open · 2026 Intake</div>
          <h2 className="font-serif text-3xl font-bold lg:text-5xl">Begin your journey at Bright Vision Law College.</h2>
        </div>
        <div className="flex gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-white hover:text-primary">
            Apply Online <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/about/profile" className="inline-flex items-center rounded-sm border border-white/40 px-6 py-3.5 text-sm font-semibold transition hover:border-gold hover:text-gold">
            Discover BVC
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Index;
