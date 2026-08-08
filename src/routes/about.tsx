import { createFileRoute, Link } from "@tanstack/react-router";
import founderImg from "@/assets/founder.png";
import { team } from "@/data/team";
import { storyParagraphs, journeySteps, visionMission } from "@/data/story";
import styles from "./About.module.css";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Kavaro — Our Story, Mission & Team" },
      {
        name: "description",
        content:
          "Kavaro is a Kenya-founded digital product studio. Learn the story behind Kavaro, our mission, and the small remote team of designers and engineers building it.",
      },
      {
        property: "og:title",
        content: "About Kavaro — Our Story, Mission & Team",
      },
      {
        property: "og:description",
        content:
          "The story behind Kavaro Agency — why it exists, where it's headed, and the team building modern websites, web applications, and AI-powered products for growing businesses.",
      },
    ],
  }),
});

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro";

function About() {
  return (
    <main>
      {/* 1. HERO */}
      <header className="page-hero">
        <div className="section-label">About Kavaro</div>
        <h1>
          Built on a <em>Real Problem</em>, Not a Business Plan.
        </h1>
        <p>
          Kavaro started with one family's experience of how hard it can be to reach essential
          services online — and grew into a studio helping other businesses close that same gap.
        </p>
      </header>

      {/* 2. OUR STORY */}
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
          <h2 className={styles.secH}>
            This Started With <em>Our Founder's Dad</em>.
          </h2>

          {storyParagraphs.map((p) => (
            <p className={styles.storyP} key={p.label}>
              <strong>{p.label}</strong> {p.text}
            </p>
          ))}
        </div>
      </section>

      {/* 3. THE FOUNDER'S JOURNEY */}
      <section className={styles.section}>
        <div className="section-label">How Caroline Got Here</div>
        <h2 className={styles.secH}>
          A Path That Wasn't <em>Linear</em>, But Was Meaningful.
        </h2>
        <p className={styles.secSub}>
          From early childhood education to cybersecurity, design, and software engineering — each
          step shaped how Kavaro approaches building digital products today.
        </p>
        <div className={styles.journeyGrid}>
          {journeySteps.map((s) => (
            <div className={styles.journeyStep} key={s.num}>
              <span className={styles.journeyNum}>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISION + MISSION */}
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

      {/* 5. TEAM */}
      <section className={styles.section}>
        <div className="section-label">Our Team</div>
        <h2 className={styles.secH}>The People Building Kavaro</h2>
        <p className={styles.secSub}>
          A small, remote team based in Kenya — designers and engineers working together on every
          project, start to finish.
        </p>
        <div className={styles.teamGrid}>
          {team.map((m) => (
            <div className={styles.teamCard} key={m.name}>
              <div className={styles.teamAvatar}>
                <img src={m.image} alt={m.name} className={styles.teamImg} loading="lazy" />
              </div>
              <h3>{m.name}</h3>
              <span className={styles.teamRole}>
                {m.role} · {m.speciality}
              </span>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className={styles.ctaSec}>
        <h2>
          Want to Work With <em>Us?</em>
        </h2>
        <p>
          Let's build something meaningful — whether you're a clinic in Nairobi or a growing
          business anywhere else in the world.
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

export default About;
