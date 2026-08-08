import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import styles from "./Work.module.css";

export const Route = createFileRoute("/work")({
  component: Work,
  head: () => ({
    meta: [
      { title: "Our Work — Kavaro Agency | Case Studies" },
      {
        name: "description",
        content:
          "Case studies from Kavaro Agency — real problems, the solutions we built, the technology behind them, and the outcomes.",
      },
      {
        property: "og:title",
        content: "Our Work — Kavaro Agency | Case Studies",
      },
      {
        property: "og:description",
        content:
          "A look at how Kavaro approaches real problems — from first concept to a working, deployable product.",
      },
    ],
  }),
});

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro";

function Work() {
  return (
    <main>
      {/* 1. HERO */}
      <header className="page-hero">
        <div className="section-label">Our Work</div>
        <h1>
          Proof, Not Just <em>Promises</em>.
        </h1>
        <p>
          A look at how we approach real problems — from first concept to a working, deployable
          product.
        </p>
      </header>

      {/* 2. CASE STUDIES */}
      <section className={styles.section}>
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
                {p.link && (
                  <div className={styles.projLink}>
                    <a href={p.link} target="_blank" rel="noreferrer">
                      View Live Project ↗
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className={styles.ctaSec}>
        <h2>
          Have a Project in <em>Mind?</em>
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

export default Work;
