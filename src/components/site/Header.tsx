import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string; description?: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About BVC",
    children: [
      { label: "Our Profile", to: "/about/profile", description: "Heritage, vision & accreditation" },
      { label: "Message from Chief", to: "/about/message", description: "A note from our Principal" },
      { label: "Faculty Members", to: "/about/faculty", description: "Distinguished legal scholars" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "5-Year B.A.LL.B (Integrated)", to: "/programs/ballb", description: "Undergraduate flagship programme" },
      { label: "2-Year LL.M", to: "/programs/llm", description: "Human Rights · Criminal · Business Law" },
    ],
  },
  {
    label: "Student Life",
    children: [
      { label: "Moot Court Room", to: "/student-life/moot-court", description: "Advocacy in practice" },
      { label: "Legal Advice Clinic", to: "/student-life/legal-clinic", description: "Pro-bono community service" },
      { label: "Bar Exam Prep", to: "/student-life/bar-prep", description: "Path to the Bar Council" },
    ],
  },
  { label: "Notice Board", to: "/notices" },
  { label: "Contact Us", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top sub-header */}
      <div className="bg-navy text-navy-foreground text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="hidden shrink-0 font-medium tracking-[0.2em] uppercase sm:block">
            Affiliated with Purbanchal University
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max animate-ticker gap-12 whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12">
                  <span><span className="text-gold font-semibold">● LIVE:</span> B.A.LL.B Entrance — Registration closes Aug 15, 2026</span>
                  <span><span className="text-gold font-semibold">● NOTICE:</span> LL.M Entrance Exam scheduled for Sep 02, 2026</span>
                  <span><span className="text-gold font-semibold">● EVENT:</span> National Moot Court Competition — Oct 12, 2026</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden shrink-0 sm:block">+977-21-503051</div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 lg:py-4">
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={logo}
              alt="Bright Vision Law College"
              className="h-14 w-14 rounded-sm object-cover shadow-sm transition group-hover:opacity-90"
            />
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold text-navy lg:text-xl">Bright Vision Law College</div>
              <div className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">Biratnagar · Estd. 2010</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center lg:flex" onMouseLeave={() => setOpenMenu(null)}>
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
              >
                {item.to ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex items-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-navy"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy transition-colors hover:text-primary">
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                )}
                {item.children && openMenu === item.label && (
                  <div className="absolute top-full left-0 w-80 pt-2">
                    <div className="overflow-hidden rounded-md border border-border bg-card shadow-xl">
                      <div className="h-1 bg-primary" />
                      <div className="p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block rounded-sm px-3 py-2.5 transition-colors hover:bg-secondary"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div className="text-sm font-semibold text-navy">{c.label}</div>
                            {c.description && (
                              <div className="text-xs text-muted-foreground">{c.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-navy"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="rounded-sm p-2 text-navy lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto max-w-7xl divide-y divide-border px-4">
              {NAV.map((item) => (
                <div key={item.label} className="py-2">
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="block py-2 text-sm font-semibold text-navy"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <div className="py-2 text-xs font-bold tracking-widest text-primary uppercase">{item.label}</div>
                      <div className="space-y-1 pl-2">
                        {item.children?.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block py-1.5 text-sm text-navy/80 hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="my-3 block rounded-sm bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}