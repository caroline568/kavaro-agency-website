import { createFileRoute } from "@tanstack/react-router";
import styles from "./Legal.module.css";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsOfUse,
  head: () => ({
    meta: [
      { title: "Terms of Use — Kavaro Agency" },
      {
        name: "description",
        content: "The terms that govern your use of the Kavaro Agency website.",
      },
    ],
  }),
});

function TermsOfUse() {
  return (
    <main>
      <header className="page-hero">
        <div className="section-label">Legal</div>
        <h1>Terms of Use</h1>
        <p>The terms that govern your use of this website.</p>
      </header>

      <section className={styles.section}>
        <p className={styles.updated}>Last updated: August 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using kavaroagency.com, you agree to these Terms of Use. If you don't
          agree with any part of these terms, please don't use this website.
        </p>

        <h2>About This Website</h2>
        <p>
          This website is operated by Kavaro Agency, a Kenya-founded digital product studio. It's
          provided to share information about our services, pricing, and work, and to let visitors
          get in touch or book a call with us.
        </p>

        <h2>Use of the Website</h2>
        <p>You agree to use this website only for lawful purposes. You agree not to:</p>
        <ul>
          <li>
            Use the contact form or booking system to send spam, abusive, or fraudulent messages
          </li>
          <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
          <li>Copy, reproduce, or redistribute the website's content without our permission</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, design, graphics, logos, and case study
          material — belongs to Kavaro Agency or is used with permission, unless otherwise credited.
          You may not reuse this content commercially without our written consent.
        </p>

        <h2>Project Engagements</h2>
        <p>
          Pricing, timelines, and deliverables shown on this website are indicative starting points,
          not binding offers. Any actual client engagement — including scope, cost, and timeline —
          is confirmed separately in writing (for example, in a proposal or agreement) once we've
          discussed your specific project.
        </p>

        <h2>No Warranty</h2>
        <p>
          This website and its content are provided "as is." While we do our best to keep
          information accurate and up to date, we don't guarantee that everything on this site is
          complete, current, or error-free.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Kavaro Agency is not liable for any damages arising from your use of, or inability to use,
          this website, to the fullest extent permitted by law.
        </p>

        <h2>Third-Party Links and Tools</h2>
        <p>
          This website links to and uses third-party tools such as Calendly for scheduling and
          WhatsApp for messaging. Your use of those services is governed by their own terms, not
          ours.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the website after changes
          are posted means you accept the updated terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about these terms? Reach us at{" "}
          <a href="mailto:hello@kavaroagency.com">hello@kavaroagency.com</a>.
        </p>
      </section>
    </main>
  );
}

export default TermsOfUse;
