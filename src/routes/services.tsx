import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { supabase } from "@/lib/supabase";
import styles from "./Services.module.css";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      {
        title:
          "Services & Pricing — Kavaro Agency | Digital Product Design, Web Development & AI Solutions",
      },
      {
        name: "description",
        content:
          "Kavaro Agency is a Kenya-based digital product studio offering Digital Product Design, Web Development, AI-Powered Solutions, and Digital Transformation for growing businesses.",
      },
      {
        property: "og:title",
        content:
          "Services & Pricing — Kavaro Agency | Digital Product Design, Web Development & AI Solutions",
      },
      {
        property: "og:description",
        content:
          "Digital Product Design, Web Development, and AI-Powered Solutions from a Kenya-based digital product studio.",
      },
    ],
  }),
});

type Tier = {
  name: string;
  price: string;
  usd: string;
  timeline: string;
  features: string[];
  popular?: boolean;
};

type Service = {
  num: string;
  id: string;
  title: string;
  tag: string;
  desc: string;
  tiers: Tier[];
};

type Capability = {
  num: string;
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  anchor?: string;
};

// The four strategic capabilities Kavaro is built around. These map loosely
// to the priced services below — "anchor" links a capability to its
// corresponding pricing section where one exists.
const capabilities: Capability[] = [
  {
    num: "01",
    title: "Digital Product Design",
    problem: "Many businesses have interfaces customers find confusing, slow, or forgettable.",
    approach:
      "We research how people actually use your product, then design user flows, wireframes, and design systems around that reality — not assumptions.",
    outcome: "Experiences users understand instantly, and businesses can scale with confidence.",
    anchor: "design",
  },
  {
    num: "02",
    title: "Web Development",
    problem: "Outdated or slow websites quietly cost businesses customers every day.",
    approach:
      "We build modern websites and web applications with React, TypeScript, and Node.js — responsive, performance-tuned, and built to grow.",
    outcome: "A fast, reliable digital presence that works as hard as the rest of your team.",
    anchor: "development",
  },
  {
    num: "03",
    title: "AI Solutions",
    problem: "Repetitive questions and manual workflows quietly drain time from growing teams.",
    approach:
      "We integrate AI where it earns its place — chat assistants, automation, and intelligent workflows built on real usage, not hype.",
    outcome: "Less repetitive work, faster responses, and better-informed decisions.",
    anchor: "ai",
  },
  {
    num: "04",
    title: "Digital Transformation",
    problem:
      "Many growing businesses don't yet have a consistent brand or digital presence — making it harder for customers to find, trust, and remember them.",
    approach:
      "We build the brand foundation and visual identity a growing business needs — logo, guidelines, and digital-ready assets — as the deliberate first step toward a stronger digital presence.",
    outcome:
      "A consistent, credible brand across every touchpoint, and a foundation ready to build a full website or product on.",
    anchor: "transformation",
  },
];

const services: Service[] = [
  {
    num: "01",
    id: "design",
    title: "Digital Product Design",
    tag: "Design",
    desc: "User-centered interfaces designed in Figma, built around how real people use your product — mobile-first, accessibility-conscious, and handed off ready for development.",
    tiers: [
      {
        name: "Landing Page",
        price: "KES 15,000 – 25,000",
        usd: "$110 – $185",
        timeline: "3 – 5 working days",
        features: ["1 – 3 screens", "Figma mockup", "Mobile-first layout", "1 round of revisions"],
      },
      {
        name: "Business Website",
        price: "KES 35,000 – 60,000",
        usd: "$260 – $445",
        timeline: "7 – 12 working days",
        popular: true,
        features: [
          "4 – 8 screens",
          "Full user flow",
          "Design system basics",
          "Interactive prototype",
          "2 rounds of revisions",
        ],
      },
      {
        name: "App / Dashboard",
        price: "KES 70,000 – 120,000",
        usd: "$520 – $890",
        timeline: "14 – 21 working days",
        features: [
          "8 – 15 screens",
          "Full user flows & wireframes",
          "Interactive Figma prototype",
          "Design system",
          "Developer handoff notes",
        ],
      },
    ],
  },
  {
    num: "02",
    id: "development",
    title: "Web Development",
    tag: "Development",
    desc: "Production-ready websites and web applications built with React and Node.js. Every project is responsive, tested across devices, and handed off with documentation and 30 days of post-launch support.",
    tiers: [
      {
        name: "Landing Page",
        price: "KES 20,000 – 35,000",
        usd: "$150 – $260",
        timeline: "4 – 7 working days",
        features: [
          "Single-page site",
          "Responsive design",
          "Contact form",
          "Deployed & live",
          "30-day support",
        ],
      },
      {
        name: "Business Website",
        price: "KES 45,000 – 80,000",
        usd: "$335 – $595",
        timeline: "10 – 18 working days",
        popular: true,
        features: [
          "4 – 6 pages",
          "Contact & booking integrations",
          "SEO basics",
          "CMS / blog (optional)",
          "30-day support",
        ],
      },
      {
        name: "Booking / E-commerce",
        price: "KES 80,000 – 220,000",
        usd: "$595 – $1,630",
        timeline: "3 – 8 weeks",
        features: [
          "Appointment booking or product catalogue",
          "M-Pesa / payment integration",
          "Admin dashboard",
          "User accounts (optional)",
          "30-day support",
        ],
      },
    ],
  },
  {
    num: "03",
    id: "ai",
    title: "AI Solutions",
    tag: "AI",
    desc: "Practical AI added to your website or product — chat assistants, smart forms, automation and OpenAI integrations that help your customers, not buzzword AI for its own sake.",
    tiers: [
      {
        name: "AI Chat Widget",
        price: "KES 25,000 – 45,000",
        usd: "$185 – $335",
        timeline: "5 – 8 working days",
        features: [
          "FAQ-trained chatbot",
          "Embedded on your site",
          "Email & Calendly handoff",
          "Custom branding",
        ],
      },
      {
        name: "AI Content Assistant",
        price: "KES 35,000 – 60,000",
        usd: "$260 – $445",
        timeline: "7 – 12 working days",
        popular: true,
        features: [
          "Auto-generated copy",
          "Smart contact forms",
          "Basic workflow automation",
          "OpenAI API integration",
        ],
      },
      {
        name: "Custom AI Integration",
        price: "KES 80,000 – 150,000+",
        usd: "$595 – $1,110+",
        timeline: "3 – 6 weeks",
        features: [
          "Custom OpenAI logic",
          "Backend & database",
          "Admin dashboard",
          "Full documentation",
        ],
      },
    ],
  },
  {
    num: "04",
    id: "transformation",
    title: "Digital Transformation",
    tag: "Transformation",
    desc: "Brand, identity, and visual assets for businesses taking their first deliberate step online — the foundation that makes everything else (a website, social presence, marketing) look credible and consistent from day one.",
    tiers: [
      {
        name: "Social Media Pack",
        price: "KES 8,000 – 15,000",
        usd: "$60 – $110",
        timeline: "2 – 4 working days",
        features: [
          "5 post templates",
          "Profile & cover headers",
          "Story templates",
          "Editable source files",
        ],
      },
      {
        name: "Brand Foundation",
        price: "KES 25,000 – 40,000",
        usd: "$185 – $300",
        timeline: "7 – 10 working days",
        popular: true,
        features: [
          "Logo design (3 concepts)",
          "Color palette & fonts",
          "One-page brand guide",
          "Business card design",
          "Social profile setup",
        ],
      },
      {
        name: "Full Brand & Stationery",
        price: "KES 25,000 – 45,000",
        usd: "$185 – $335",
        timeline: "7 – 12 working days",
        features: [
          "Everything in Brand Foundation",
          "Pitch deck (10 – 15 slides)",
          "Business cards & letterhead",
          "Email signature",
        ],
      },
    ],
  },
];

const process = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn your business, your users, and what the project actually needs to achieve.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We map user flows and design interfaces around real customer needs, not assumptions.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop and test your product with modern engineering practices and regular updates.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy, run final checks, and hand over — with 30 days of support after.",
  },
];

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Figma",
  "OpenAI API",
  "Supabase",
  "Vercel",
];

const industries = [
  "Healthcare & Clinics",
  "Businesses & Startups",
  "E-commerce & Retail",
  "Education",
  "Professional Services",
];

const reasons = [
  {
    title: "Strategy Before Screens",
    desc: "We start with your business problem, not a template — so what we build actually fits.",
  },
  {
    title: "Design & Engineering, One Team",
    desc: "No handoff gaps between designers and developers. The people who design it also help build it.",
  },
  {
    title: "Fixed, Transparent Pricing",
    desc: "Every tier above is a fixed quote — no surprise invoices, no vague hourly billing.",
  },
  {
    title: "Built to Last",
    desc: "Documented, tested, and supported for 30 days after launch — not abandoned at delivery.",
  },
];

function registerBookedCall(
  name: string | null,
  email: string | null,
  service: string | null,
  calendlyUrl: string,
) {
  supabase
    .from("booked_calls")
    .insert({
      name,
      email,
      service,
      calendly_url: calendlyUrl,
    })
    .then(() => {});
}

function Services() {
  const calendlyUrl =
    import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro/30min";
  // PopupModal requires a direct event URL, not the profile landing page.
  // Append /30min if the URL doesn't already point to a specific event.
  const calendlyEventUrl = calendlyUrl.endsWith("/")
    ? `${calendlyUrl}30min`
    : calendlyUrl.includes("/30min") || calendlyUrl.includes("/discovery")
      ? calendlyUrl
      : `${calendlyUrl}/30min`;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Fires when the visitor completes booking on the Calendly popup.
  // The event payload contains their name and email.
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      // The react-calendly types only expose `uri` on invitee, but the
      // full payload includes name and email at runtime.
      const invitee = e.data.payload?.invitee as unknown as
        | {
            name?: string;
            email?: string;
          }
        | undefined;
      registerBookedCall(
        invitee?.name ?? null,
        invitee?.email ?? null,
        selectedService,
        calendlyEventUrl,
      );
      setModalOpen(false);
    },
  });

  function openCalendly(serviceName: string) {
    setSelectedService(serviceName);
    setModalOpen(true);
  }

  return (
    <main>
      {typeof window !== "undefined" && (
        <PopupModal
          url={calendlyEventUrl}
          onModalClose={() => setModalOpen(false)}
          open={modalOpen}
          rootElement={document.body}
        />
      )}

      {/* 1. HERO */}
      <header className="page-hero">
        <div className="section-label">Digital Product Studio · Kenya</div>
        <h1>
          Digital Experiences Designed to Help <em>Ambitious Businesses Grow.</em>
        </h1>
        <p>
          Kavaro is a Kenya-founded digital product studio. We combine strategy, design, and
          engineering to build websites, web applications, and AI-powered products for businesses
          that are ready to take their next step online.
        </p>
        <div className={styles.heroBtns}>
          <button className="btn-primary" onClick={() => openCalendly("General Enquiry")}>
            Start a Project
          </button>
          <Link to="/contact" className="btn-secondary">
            Discuss Your Idea
          </Link>
        </div>
      </header>

      {/* 2. CAPABILITIES OVERVIEW */}
      <section className={styles.capSection}>
        <div className="section-label">What We Do</div>
        <h2 className={styles.secH}>Four Capabilities, One Studio</h2>
        <p className={styles.secSub}>
          Every project draws on the same core disciplines — design thinking, engineering quality,
          and a clear focus on business outcomes.
        </p>
        <div className={styles.capGrid}>
          {capabilities.map((c) => (
            <article className={styles.capCard} key={c.num}>
              <span className={styles.capNum}>{c.num}</span>
              <h3>{c.title}</h3>
              <div className={styles.capRow}>
                <span className={styles.capLabel}>Problem</span>
                <p>{c.problem}</p>
              </div>
              <div className={styles.capRow}>
                <span className={styles.capLabel}>Our Approach</span>
                <p>{c.approach}</p>
              </div>
              <div className={styles.capRow}>
                <span className={styles.capLabel}>Outcome</span>
                <p>{c.outcome}</p>
              </div>
              {c.anchor && (
                <a href={`#${c.anchor}`} className={styles.capLink}>
                  View pricing →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 3. DETAILED SERVICES + PRICING */}
      <section className={styles.section}>
        <div className="section-label">Pricing</div>
        <h2 className={styles.secH}>Transparent Pricing, Real Deliverables</h2>
        <p className={styles.secSub}>
          Every price below is fixed — no surprise invoices, no vague hourly billing. Choose the
          tier that fits your project and budget, or book a free discovery call and we'll recommend
          the right scope for you.
        </p>

        {services.map((s) => (
          <div className={styles.serviceBlock} key={s.num} id={s.id}>
            <div className={styles.serviceHead}>
              <div className={styles.serviceHeadLeft}>
                <span className={styles.num}>{s.num}</span>
                <div>
                  <div className={styles.serviceHeadTop}>
                    <h3 className={styles.title}>{s.title}</h3>
                    <span className={styles.tag}>{s.tag}</span>
                  </div>
                  <p className={styles.desc}>{s.desc}</p>
                </div>
              </div>
            </div>

            <div className={styles.tiersGrid}>
              {s.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`${styles.tierCard} ${tier.popular ? styles.tierPopular : ""}`}
                >
                  {tier.popular && <div className={styles.popularBadge}>Most Popular</div>}
                  <div className={styles.tierName}>{tier.name}</div>
                  <div className={styles.tierPrice}>{tier.price}</div>
                  <div className={styles.tierUsd}>{tier.usd}</div>
                  <div className={styles.tierTimeline}>Delivered in {tier.timeline}</div>
                  <ul className={styles.tierFeatures}>
                    {tier.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className={styles.tierActions}>
                    <button className="btn-primary" onClick={() => openCalendly(s.title)}>
                      Book a Call
                    </button>
                    <Link to="/contact" className="btn-navy">
                      Start Your Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. PROCESS */}
      <section className={styles.trustSection}>
        <div className="section-label">How We Work</div>
        <h2 className={styles.secH}>Our Process</h2>
        <div className={styles.processGrid}>
          {process.map((p) => (
            <div className={styles.processStep} key={p.num}>
              <span className={styles.processNum}>{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECH + INDUSTRIES + WHY KAVARO */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div>
            <div className="section-label">Technology We Use</div>
            <div className={styles.techList}>
              {techStack.map((t) => (
                <span key={t} className={styles.techItem}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="section-label">Industries We Understand</div>
            <div className={styles.techList}>
              {industries.map((i) => (
                <span key={i} className={styles.techItem}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="section-label">Why Kavaro</div>
        <h2 className={styles.secH}>Why Businesses Choose Kavaro</h2>
        <div className={styles.reasonsGrid}>
          {reasons.map((r) => (
            <div className={styles.reasonCard} key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOM / FINAL CTA */}
      <section className={styles.customSection}>
        <h2>
          Need Something <em>Custom?</em>
        </h2>
        <p>
          Every business is different. If your project doesn't fit neatly into the tiers above,
          let's discuss your idea and scope it properly before quoting.
        </p>
        <div className={styles.ctaBtns}>
          <button className="btn-primary" onClick={() => openCalendly("Custom Project")}>
            Book a Consultation
          </button>
          <Link to="/contact" className="btn-secondary">
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
