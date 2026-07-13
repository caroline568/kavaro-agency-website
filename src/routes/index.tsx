import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import founderImg from "@/assets/founder.png";
import styles from "./Home.module.css";
import { PopupModal } from "react-calendly";

import carolineImg from "@/assets/founder.png";
import hezronImg from "@/assets/hezron.jpeg";
import brendaImg from "@/assets/brenda.jpeg";
import carolgroceryImg from "@/assets/Carol's grocery.webp";
import smargoImg from "@/assets/smargo-homepage.webp";
import splashscreeImg from "@/assets/Splash Screen.png";

import aireactImg from "@/assets/ai-react.webp";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Modern, AI-ready websites and digital platforms - landing pages, booking flows, dashboards and custom solutions built with care.",
    tag: "React · Node.js · TypeScript",
  },
  {
    num: "02",
    title: "UI / UX Design",
    desc: "User-centered interfaces designed with research, clear user flows and thoughtful experiences that make products easier to use.",
    tag: "Figma · Prototyping · Research",
  },
  {
    num: "03",
    title: "Brand Strategy & Basics",
    desc: "Helping growing businesses define their brand direction, messaging and visual foundation before building their digital presence.",
    tag: "Strategy · Identity · Positioning",
  },
  {
    num: "04",
    title: "AI Solutions",
    desc: "Practical AI features, automation and intelligent tools integrated into your business where they create real value.",
    tag: "LLMs · Automation · Integration",
  },
  {
    num: "05",
    title: "Graphic Design",
    desc: "Visual identities and marketing assets that help your business communicate clearly and maintain a consistent brand.",
    tag: "Branding · Print · Social",
  },
];
const techStack = ["React", "Node.js", "TypeScript", "Vercel"];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Kavaro Agency - Digital Product & Web Development Agency" },

      {
        name: "description",
        content:
          "Kavaro is a remote digital agency specializing in modern web development, UI/UX design, and AI-powered solutions that help businesses build, launch, and grow online.",
      },

      {
        property: "og:title",
        content: "Kavaro Agency | Web Development & Digital Solutions",
      },

      {
        property: "og:description",
        content:
          "A remote digital agency building modern websites, web apps, and AI-ready digital experiences.",
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
  "React & TypeScript",
  "Node.js & Express",
  "Python",
  "UI / UX Design",
  "Figma & Prototyping",
  "Responsive Web Design",
  "AI Integration",
  "API Development",
  "Accessibility",
];

const whyUs = [
  {
    title: "Full-Service Delivery",
    desc: "From strategy and UI/UX design to development, deployment, and ongoing support, we handle the entire product journey under one team.",
  },
  {
    title: "Modern Web Engineering",
    desc: "We build fast, secure, and scalable websites and web applications using modern technologies and best development practices.",
  },
  {
    title: "Collaborative Partnership",
    desc: "You work directly with our designers and engineers, ensuring clear communication, faster decisions, and solutions tailored to your business.",
  },
  {
    title: "Future-Ready Solutions",
    desc: "We build with growth in mind, integrating AI, automation, and scalable technologies where they create real business value.",
  },
];

const projects = [
  {
    title: "Healthcare Booking - Concept",
    type: "Concept Website",
    problem:
      "Local clinics in Nairobi rely on phone calls for appointments - patients wait, lines drop, no-shows are high.",
    solution:
      "A clean booking site with doctor profiles, time-slot picker, SMS reminders and a simple admin view.",
    tools: ["Figma", "React", "Tailwind", "Supabase"],
    outcome:
      "Concept prototype reduces booking friction to 3 taps. Designed mobile-first for low-bandwidth use.",
    accent: "linear-gradient(135deg, #1e3a5f, #0a1929)",
    image: splashscreeImg,
  },
  {
    title: "Smargo - Farm-to-Institution Marketplace",
    type: "Web Development Project",
    problem:
      "Farmers often rely on middlemen who reduce their earnings, while institutions like schools and hospitals struggle to access fresh produce directly from reliable suppliers.",
    solution:
      "Built a responsive marketplace interface that connects farmers directly with institutions, focusing on clarity, usability, and smooth product browsing and ordering flow.",
    tools: ["React", "TypeScript", "Vercel"],
    outcome:
      "Live deployed platform demonstrating real-world frontend development, UI structuring, and deployment of a functional marketplace interface.",
    accent: "linear-gradient(135deg, #0f172a, #1e293b)",
    image: smargoImg,
    link: "https://smargo.vercel.app",
  },
  {
    title: "Carol’s Smart Grocery App",
    type: "UI/UX Design Project",
    problem:
      "Designed a smart grocery shopping experience to improve user convenience and digital ordering flow.",
    solution:
      "Created a full UI/UX design system with user flows, wireframes and interactive prototype in Figma.",
    tools: ["Figma", "UX Design", "Prototyping"],
    outcome: "Complete mobile app design prototype showcasing modern grocery shopping experience.",
    accent: "linear-gradient(135deg, #4a2d5f, #1a0f2a)",
    image: carolgroceryImg,
    link: "https://www.figma.com/proto/2DaNeg6c0ujjkAvPKUCtOt/Carol-s-Smart-App-Project?node-id=8-107&t=5xigjoMiqZYb2100-1",
  },
  {
    title: "AI Customer Assistant - Demo",
    type: "React + AI Project",
    problem:
      "Service businesses repeat the same 20 questions all day - pricing, hours, location, booking.",
    solution:
      "Embeddable chat widget powered by an LLM, trained on a business FAQ, with email and Calendly handoff.",
    tools: ["React", "OpenAI API", "Node.js", "TypeScript"],
    outcome:
      "Working demo answers 80% of common questions instantly. Deployable to any site in minutes.",
    accent: "linear-gradient(135deg, #4a2d5f, #1a0f2a)",
    image: aireactImg,
  },
];
const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your business, goals, and project requirements.",
  },
  {
    num: "02",
    title: "Proposal",
    desc: "Receive a clear project scope, timeline, and transparent pricing.",
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "We design, build, and test your website or web application with regular progress updates.",
  },
  {
    num: "04",
    title: "Review & Refinement",
    desc: "Review the project and request revisions to ensure everything meets your expectations.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "We deploy your project, perform final testing, and provide a complete handover.",
  },
  {
    num: "06",
    title: "Ongoing Support",
    desc: "Enjoy 30 days of post-launch support to keep everything running smoothly.",
  },
];
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro";

function Home() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [hoveredSvc, setHoveredSvc] = useState<number | null>(null);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            <p>Remote Digital Agency · Built in Nairobi</p>
          </div>
          <h1>
            A Remote Digital Agency Building <em>Websites</em> &amp; Digital Tools
          </h1>
          <p>
            Kavaro is a remote digital agency building modern websites, web applications, and
            AI-powered solutions for growing businesses. We combine thoughtful design with reliable
            engineering to create digital products that perform.
          </p>
          <div className={styles.heroBtns}>
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>
            <button className="btn-secondary" onClick={() => setCalendlyOpen(true)}>
              Book a Call
            </button>
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
            <span>Founder · Software Engineer · Creative Director</span>
          </div>
        </div>
        <div className={styles.vmCards}>
          <div className="section-label">About Kavaro</div>
          <h2 className={styles.storyH}>
            This Started With <em>Our Founder's Dad</em>.
          </h2>
          <p className={styles.storyP}>
            Kavaro began with a personal experience. Our founder's father was a dialysis patient,
            and for years she watched him make unnecessary trips to the hospital just to book
            appointments, ask simple questions, refill prescriptions, or confirm test results. Many
            of these tasks could have been handled online in minutes, yet the clinic, pharmacy, and
            other essential services had little or no digital presence. That experience revealed a
            much bigger problem: too many businesses and organizations were still difficult to reach
            because they lacked modern digital solutions. It inspired the mission behind Kavaro—to
            help organizations build accessible, reliable, and user-friendly digital experiences
            that save time, improve access, and create better experiences for the people they serve.
          </p>
          <p className={styles.storyP}>
            He has since passed on, but the gap he experienced still affects many families today.
            Too many businesses and essential services remain invisible online. Kavaro exists in his
            memory—to help bridge that gap, one honest website at a time.
          </p>

          <p className={styles.storyP}>
            We are a remote team of designers and software engineers based in Kenya, building modern
            websites, web applications, and digital solutions for growing businesses. Our team
            combines expertise in UI/UX design, software engineering, cybersecurity, and generative
            AI to create reliable, user-focused products.
          </p>

          <p className={styles.storyP}>
            We combine modern engineering, thoughtful design, and practical AI capabilities to build
            websites and digital products that solve real business challenges and create better
            experiences for the people using them.
          </p>

          <div className={styles.vmCard}>
            <h3>Our Vision</h3>
            <p>
              A world where every growing business—from a Nairobi clinic to a global startup—has
              access to reliable, user-friendly digital experiences that help them serve their
              customers better.
            </p>
          </div>

          <div className={styles.vmCard}>
            <h3>Our Mission</h3>
            <p>
              To design and build modern websites, web applications, and digital tools that help
              growing businesses connect with customers, operate better, and grow online through
              thoughtful design and reliable engineering.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.teamGrid}>
        {[
          {
            name: "Caroline Nyawira",
            role: "Founder · Software Engineer · Creative Director",
            bio: "Leads Kavaro's product vision, engineering direction, and client strategy. Combining software engineering, product design, and digital strategy, she guides projects from idea to launch, ensuring every solution is practical, scalable, and built around real user needs.",
            image: carolineImg,
          },
          {
            name: "Hezron Sande",
            role: "Full-Stack Software Engineer",
            bio: "Builds the systems behind modern digital products, developing reliable frontend and backend solutions, secure APIs, and scalable architectures. He focuses on creating fast, maintainable, and production-ready applications.",
            image: hezronImg,
          },
          {
            name: "Brenda Chebet",
            role: "Product Designer · Frontend Developer",
            bio: "Creates intuitive user experiences and transforms designs into responsive, functional interfaces. She bridges product design and frontend development to deliver digital experiences that are accessible, polished, and easy to use.",
            image: brendaImg,
          },
        ].map((m) => (
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
            <span className={styles.teamRole}>{m.role}</span>
            <p>{m.bio}</p>
          </div>
        ))}
      </div>

      <div className={styles.teamDescription}>
        <p>
          Every project at Kavaro is a collaborative effort. Our designers and engineers work
          together to deliver complete digital solutions—from strategy and design to development,
          deployment, and ongoing support.
        </p>
      </div>

      <section className={styles.industriesSec}>
        <div className="section-label">Who We Serve</div>
        <h2 className={styles.secH}>
          Built for Businesses That <em>Serve People</em>
        </h2>
        <p className={styles.secSub}>
          We partner with growing businesses — from local clinics to global startups — to build
          websites, web applications, and digital experiences that help them connect with customers
          and grow online.
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

      <section className={styles.section}>
        <div className="section-label">What We Do</div>
        <h2 className={styles.secH}>What Kavaro Can Build for You Today</h2>
        <p className={styles.secSub}>
          We build modern websites, web applications, booking systems, dashboards, and AI-powered
          solutions that help businesses serve customers better and grow online.
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
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link to="/services" className="btn-navy">
            View All Services & Pricing
          </Link>
        </div>
      </section>

      <section className={styles.projSec}>
        <div className="section-label">Our Work</div>
        <h2 className={styles.secH}>Websites, Products &amp; Digital Experiences</h2>
        <p className={styles.secSub}>
          A collection of concept projects and case studies showcasing our ability to design and
          build modern websites, web applications, and digital experiences.
        </p>

        <div className={styles.projGrid}>
          {projects.map((p) => (
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
                  <span className={styles.projLabel}>Tools Used</span>
                  <div className={styles.projTools}>
                    {p.tools.map((t) => (
                      <span key={t} className={styles.projTool}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.projBlock}>
                  <span className={styles.projLabel}>Outcome</span>
                  <p>{p.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.projNote}>
          Our portfolio currently features concept projects and case studies that showcase our
          approach, process, and capabilities. We are continuously expanding our work with
          businesses and growing our collection of client projects.
        </p>
      </section>

      <section className={styles.skillsSec}>
        <div className={styles.skillsInner}>
          <div>
            <div className="section-label" style={{ color: "var(--gold)" }}>
              Skills &amp; Background
            </div>
            <h2 className={styles.comingH}>
              Where Engineering Meets Design,
              <br />
              <em>Built</em> as One Agency
            </h2>

            <p className={styles.comingDesc}>
              Kavaro is a digital agency where software engineering and UI/UX design come together.
              We build modern websites, web applications, and digital products that are visually
              thoughtful, technically reliable, and designed to solve real business needs.
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
              Schedule on Calendly
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

      <section className={styles.whySec}>
        <div className="section-label">Why Kavaro</div>
        <h2 className={styles.secH}>The Kavaro Difference</h2>
        <p className={styles.secSub}>
          We combine thoughtful design, strong engineering, and close collaboration to create
          digital products that are built intentionally and made to last.
        </p>
        <div className={styles.whyGrid}>
          {whyUs.map((w) => (
            <div className={styles.whyCard} key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className="section-label">How We Work</div>
        <h2 className={styles.secH}>Our Process — From Idea to Launch</h2>

        <p className={styles.secSub}>
          We follow a structured process to turn ideas into reliable digital products — from
          discovery and planning to design, development, deployment, and ongoing support.
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

      <section className={styles.ctaSec}>
        <h2>
          Ready to Build Something <em>Real?</em>
        </h2>

        <p>
          Whether you are a clinic in Nairobi or a growing business anywhere in the world, let's
          build a website, digital product, or solution that helps you serve your customers better.
          100% remote. 100% committed.
        </p>
        <div className={styles.ctaBtns}>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
            Book a Call
          </a>
          <Link to="/contact" className="btn-secondary">
            Send a Message
          </Link>
        </div>
      </section>
    </main>
  );
}
