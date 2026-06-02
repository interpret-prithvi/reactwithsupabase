import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../../assets/logo.jpg";

const COLS = [
  {
    title: "About BVC",
    links: [
      { label: "Our Profile", to: "/about/profile" },
      { label: "Message from Chief", to: "/about/message" },
      { label: "Faculty Members", to: "/about/faculty" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "B.A.LL.B (5-Year)", to: "/programs/ballb" },
      { label: "LL.M (2-Year)", to: "/programs/llm" },
      { label: "Notice Board", to: "/notices" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Moot Court Room", to: "/student-life/moot-court" },
      { label: "Legal Advice Clinic", to: "/student-life/legal-clinic" },
      { label: "Bar Exam Prep", to: "/student-life/bar-prep" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Bright Vision Law College"
                className="h-14 w-14 rounded-sm object-cover"
              />
              <div>
                <div className="font-serif text-xl font-bold">Bright Vision Law College</div>
                <div className="text-[10px] tracking-[0.18em] text-white/60 uppercase">Affiliated with Purbanchal University</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              A premier institution dedicated to legal education in Eastern Nepal, recognized
              by the Nepal Bar Council, shaping advocates, judges, and policy leaders since 2010.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-white/80">Samjhana Chowk, Biratnagar-06,<br />Morang, Koshi, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-white/80">+977-21-503051 · +977-21-503407</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-white/80">info@brightvisionlaw.edu.np</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-serif text-base font-semibold text-white">{col.title}</h4>
                <div className="mt-4 h-px w-10 bg-primary" />
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-white/70 transition hover:text-gold">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Bright Vision Law College. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/15 text-white/70 transition hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}