import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import founderImg from "@/assets/founder.png";
import styles from "./Home.module.css";
import { PopupModal } from "react-calendly";
import { team } from "@/data/team";
import { storyParagraphs, visionMission, values } from "@/data/story";
import { projects } from "@/data/projects";

const services = [
  {
    num: "01",
    title: "Digital Product Design",
    desc: "Products people actually enjoy using — designed around real research, then prototyped and refined before a single line of code gets written.",
    tag: "Figma · Prototyping · Research",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "A website or web app that keeps working as you grow — built with modern engineering, from simple landing pages to full dashboards.",
    tag: "React · Node.js · TypeScript",
  },
  {
    num: "03",
    title: "AI Solutions",
    desc: "Less manual work, faster answers — practical AI that automates workflows, handles common questions, and supports better business decisions.",
    tag: "LLMs · Automation · Integration",
  },
  {
    num: "04",
    title: "Digital Transformation",
    desc: "A credible, consistent presence from day one — brand and visual identity built as the foundation for everything that comes after.",
    tag: "Branding · Identity · Digital Presence",
  },
];
const techStack = ["React", "Next.js", "Node.js", "TypeScript", "Vercel"];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Kavaro Agency | Digital Product Design, Web Development & AI Solutions",
      },
      {
        name: "description",
        content:
          "Kavaro is a Kenya-founded digital product studio helping businesses create impactful digital solutions through Digital Product Design, Web Development, AI-Powered Solutions, and Digital Transformation.",
      },
      {
        property: "og:title",
        content: "Kavaro Agency | Digital Product Design, Web Development & AI Solutions",
      },
      {
        property: "og:description",
        content:
          "We design and build digital products, modern web solutions, and AI-powered experiences that help businesses solve real challenges and grow in a digital world.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Kavaro Agency",
          url: "https://www.kavaroagency.com",
          description:
            "Kavaro Agency is a digital product studio in Nairobi, Kenya, building websites, web applications, and AI-powered tools with thoughtful design and dependable engineering.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          areaServed: "Worldwide",
          founder: {
            "@type": "Person",
            name: "Caroline Njogu",
          },
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Digital Product Design" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Web Development" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "AI Solutions" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Digital Transformation" },
            },
          ],
        }),
      },
    ],
  }),
});
const stats = [
  { num: "Full-Stack", label: "Web Development" },
  { num: "100%", label: "Remote Collaboration" },
  { num: "24h", label: "Average Response" },
];

const industries = [
  {
    icon: "🏥",
    name: "Healthcare",
    desc: "Clinic websites, patient portals, appointment booking, and digital healthcare experiences.",
  },
  {
    icon: "🏢",
    name: "Businesses & Startups",
    desc: "Professional websites, web applications, and digital platforms.",
  },
  {
    icon: "🛒",
    name: "E-commerce",
    desc: "Online stores, payment integrations, and customer experiences.",
  },
  {
    icon: "🎓",
    name: "Education",
    desc: "School websites, student portals, and learning platforms.",
  },
  {
    icon: "💼",
    name: "Professional Services",
    desc: "Booking systems, client portals, and business automation.",
  },
  {
    icon: "🤖",
    name: "Custom Digital Solutions",
    desc: "AI integrations, automation, and scalable web applications.",
  },
];
const skills = [
  "Full-Stack Web Development",
  "React & Next.js",
  "TypeScript",
  "Node.js & Express",
  "Python",
  "UI / UX Design",
  "Figma & Prototyping",
  "Responsive Web Design",
  "AI Integration",
  "API Development",
  "Accessibility",
];

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We learn about your business, your goals, and what the project actually needs to achieve.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We map user flows and design interfaces around real customer needs, not assumptions.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop and test your website or web application with regular progress updates.",
  },
  {
    num: "04",
    title: "Test",
    desc: "We review the work together and refine it until it meets your expectations.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "We deploy your project, run final checks, and hand it over — with 30 days of support after.",
  },
];
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro";

function Home() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [hoveredSvc, setHoveredSvc] = useState<number | null>(null);

  return (
    <main>
      {/* 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            <p>
              Digital Product & Technology Agency
              <span> · Kenya</span>
            </p>
          </div>
          <h1>
            Building reliable <em>digital experiences</em> for growing businesses.
          </h1>
          <p>
            We design and build websites, web applications, and AI-powered tools for growing
            businesses — combining thoughtful product design with dependable engineering, so what we
            ship actually works.
          </p>
          <div className={styles.heroBtns}>
            <button className="btn-primary" onClick={() => setCalendlyOpen(true)}>
              Start a Project
            </button>
            <a href="#work" className="btn-secondary">
              Explore Work
            </a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div className={styles.statCard} key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {typeof window !== "undefined" && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={() => setCalendlyOpen(false)}
          open={calendlyOpen}
          rootElement={document.body}
        />
      )}

      <div className={styles.techStrip}>
        <span className={styles.techLabel}>Built with</span>
        <div className={styles.techList}>
          {techStack.map((t) => (
            <span key={t} className={styles.techItem}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 2. CAPABILITIES */}
      <section className={styles.section}>
        <div className="section-label">Studio Capabilities</div>
        <h2 className={styles.secH}>What We Build, and Why</h2>
        <p className={styles.secSub}>
          Every product we build has one job: help your business serve customers better and grow
          with less friction.
        </p>
        <div className={styles.svcGrid}>
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`${styles.svcCard} ${hoveredSvc === i ? styles.svcHovered : ""}`}
              onMouseEnter={() => setHoveredSvc(i)}
              onMouseLeave={() => setHoveredSvc(null)}
            >
              <div className={styles.svcNum}>{s.num}</div>
              <h3 className={styles.svcTitle}>{s.title}</h3>
              <p className={styles.svcDesc}>{s.desc}</p>
              <span className={styles.svcTag}>{s.tag}</span>
              <div className={styles.svcActions}>
                <Link to="/services" className="btn-secondary">
                  Get Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/services" className="btn-navy">
            View Pricing
          </Link>
        </div>
      </section>

      <section className={styles.industriesSec}>
        <div className="section-label">Industries We Understand</div>
        <h2 className={styles.secH}>
          Built for Businesses That <em>Serve People</em>
        </h2>
        <p className={styles.secSub}>
          From local clinics to global startups, we build digital experiences that help you reach
          and support the people you serve.
        </p>
        <div className={styles.indGrid}>
          {industries.map((i) => (
            <div className={styles.indCard} key={i.name}>
              <div className={styles.indIcon}>{i.icon}</div>
              <h3>{i.name}</h3>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED WORK */}
      <section className={styles.projSec} id="work">
        <div className="section-label">Selected Work</div>
        <h2 className={styles.secH}>Proof, Not Just Promises</h2>
        <p className={styles.secSub}>
          A look at how we approach real problems — from first concept to a working, deployable
          product.
        </p>

        <div className={styles.projGrid}>
          {projects.slice(0, 2).map((p) => (
            <article className={styles.projCard} key={p.title}>
              <div className={styles.projHero} style={{ background: p.accent }}>
                <span className={styles.projType}>{p.type}</span>
              </div>
              <div className={styles.projBody}>
                {p.image && (
                  <div className={styles.projImageWrap}>
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1360}
                      height={768}
                      className={styles.projImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <h3 className={styles.projTitle}>{p.title}</h3>
                <div className={styles.projBlock}>
                  <span className={styles.projLabel}>Problem</span>
                  <p>{p.problem}</p>
                </div>
                <div className={styles.projBlock}>
                  <span className={styles.projLabel}>Solution</span>
                  <p>{p.solution}</p>
                </div>
                <div className={styles.projBlock}>
                  <span className={styles.projLabel}>Technology</span>
                  <div className={styles.projTools}>
                    {p.tools.map((t) => (
                      <span key={t} className={styles.projTool}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.projBlock}>
                  <span className={styles.projLabel}>Impact</span>
                  <p>{p.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.projNote}>
          Each of these started as a real problem worth solving — the same process we bring to every
          client engagement.
        </p>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link to="/work" className="btn-secondary">
            View All Work
          </Link>
        </div>
      </section>

      {/* 4. WHY KAVARO */}
      <section className={styles.whySec}>
        <div className="section-label">Why Kavaro</div>
        <h2 className={styles.secH}>Why Businesses Trust Kavaro</h2>
        <p className={styles.secSub}>
          We combine thoughtful design, disciplined engineering, and close collaboration — because
          products built intentionally are the ones that last.
        </p>
        <div className={styles.whyGrid}>
          {values.map((w) => (
            <div className={styles.whyCard} key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM INTRODUCTION */}
      <section className={styles.section}>
        <div className="section-label">Our Team</div>
        <h2 className={styles.secH}>The People Building Kavaro</h2>
        <p className={styles.secSub}>
          A small, remote team based in Kenya — designers and engineers working together on every
          project, start to finish.
        </p>
        <div className={styles.teamGrid}>
          {team.map((m) => (
            <div key={m.name} className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <img
                  src={m.image}
                  alt={m.name}
                  width={800}
                  height={1280}
                  className={styles.teamImg}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{m.name}</h3>
              <span className={styles.teamRole}>
                {m.role} · {m.speciality}
              </span>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
        <div className={styles.teamDescription}>
          <p>
            We're all full-stack capable, and we lean on that — able to move across a project
            wherever it needs the most attention, rather than working in silos and waiting on
            handoffs. It's the range of the team, not any one person's title, that gets a project
            from idea to launch.
          </p>
        </div>
      </section>

      {/* 6. OUR STORY */}
      <section className={styles.vmSec}>
        <div className={styles.vmImageWrap}>
          <img
            src={founderImg}
            alt="Founder of Kavaro Agency"
            width={800}
            height={1280}
            className={styles.vmImage}
            loading="lazy"
            decoding="async"
          />
          <div className={styles.vmFounder}>
            <strong>Kavaro</strong>
            <span>Founder & Software Engineer · Creative Director</span>
          </div>
        </div>
        <div className={styles.vmCards}>
          <div className="section-label">Our Story</div>
          <h2 className={styles.storyH}>
            This Started With <em>Our Founder's Dad</em>.
          </h2>

          <p className={styles.storyP}>
            <strong>{storyParagraphs[0].label}</strong> {storyParagraphs[0].text}
          </p>

          <p className={styles.storyP}>
            <strong>{storyParagraphs[1].label}</strong> {storyParagraphs[1].text}
          </p>

          <Link to="/about" className="btn-secondary">
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* 7. VISION + MISSION */}
      <section className={styles.section}>
        <div className="section-label">What Drives Us Forward</div>
        <h2 className={styles.secH}>Where We're Going, What We Do</h2>
        <div className={styles.whyGrid}>
          <div className={styles.vmCard}>
            <h3>Our Vision</h3>
            <p>{visionMission.vision}</p>
          </div>
          <div className={styles.vmCard}>
            <h3>Our Mission</h3>
            <p>{visionMission.mission}</p>
          </div>
        </div>
      </section>

      {/* 8. PROCESS */}
      <section className={styles.section}>
        <div className="section-label">How We Work</div>
        <h2 className={styles.secH}>From First Call to Launch Day</h2>
        <p className={styles.secSub}>
          No guesswork, no surprises — just a clear path from your first conversation with us to a
          product that's live and working.
        </p>
        <div className={styles.procSteps7}>
          {steps.map((s) => (
            <div className={styles.step} key={s.num}>
              <div className={styles.stepN}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.skillsSec}>
        <div className={styles.skillsInner}>
          <div>
            <div className="section-label" style={{ color: "var(--gold)" }}>
              Under the Hood
            </div>
            <h2 className={styles.comingH}>
              Where Engineering Meets Design,
              <br />
              <em>Built</em> as One Studio
            </h2>
            <p className={styles.comingDesc}>
              Kavaro brings engineering and design together under one roof — building products that
              are visually thoughtful, technically reliable, and built to solve real business
              problems.
            </p>
            <div className={styles.ctags}>
              {skills.map((s) => (
                <div className={styles.ctag} key={s}>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.notify}>
            <h3>Book a Free Discovery Call</h3>
            <p>
              Pick a 30-minute slot that works for you. We will talk through your project, your
              goals and how Kavaro can help - no pressure, no hard sell.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className={styles.calBtn}>
              Schedule a Call
            </a>
            <p style={{ marginTop: 16, fontSize: 12 }}>
              Or use the{" "}
              <Link to="/contact" style={{ color: "var(--gold)", textDecoration: "underline" }}>
                contact form
              </Link>{" "}
              if you would rather write first.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className={styles.ctaSec}>
        <h2>
          Have a Project in <em>Mind?</em>
        </h2>
        <p>
          Let's build something meaningful — whether you're a clinic in Nairobi or a growing
          business anywhere else in the world. We work remotely, and we show up fully.
        </p>
        <div className={styles.ctaBtns}>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
            Book a Consultation
          </a>
          <Link to="/contact" className="btn-secondary">
            Send a Message
          </Link>
        </div>
      </section>
    </main>
  );
}
