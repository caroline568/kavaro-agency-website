import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./ThankYou.module.css";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () => ({
    meta: [
      { title: "Thank You | Kavaro Agency" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function ThankYou() {
  return (
    <main className={styles.wrap}>
      <div className={styles.confetti} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span className={styles.piece} key={i} />
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.checkWrap}>
          <span className={styles.ring} />
          <span className={`${styles.ring} ${styles.ring2}`} />
          <div className={styles.checkCircle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h1 className={styles.h1}>
          Your Digital Journey Starts Here <span className={styles.wobble}>💫</span>
        </h1>

        <p className={styles.p}>
          Thank you for reaching out to Kavaro Agency. We've received your project inquiry and our
          team will carefully review your goals, challenges, and ideas.
        </p>
        <p className={styles.p}>
          We'll get back to you soon with the next steps on how we can help bring your digital
          vision to life.
        </p>

        <div className={styles.card}>
          <h2>What happens next?</h2>
          <div className={styles.stepRow}>
            <span className={styles.stepNum}>1</span>
            <span>We review your project requirements.</span>
          </div>
          <div className={styles.stepRow}>
            <span className={styles.stepNum}>2</span>
            <span>We understand your goals and challenges.</span>
          </div>
          <div className={styles.stepRow}>
            <span className={styles.stepNum}>3</span>
            <span>We discuss the best digital solution for your needs.</span>
          </div>
        </div>

        <div className={styles.cta}>
          <Link to="/" className="btn-primary">
            Explore Kavaro
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ThankYou;
