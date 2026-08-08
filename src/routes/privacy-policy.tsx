import { createFileRoute } from "@tanstack/react-router";
import styles from "./Legal.module.css";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kavaro Agency" },
      {
        name: "description",
        content:
          "How Kavaro Agency collects, uses, and protects information submitted through our website.",
      },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <main>
      <header className="page-hero">
        <div className="section-label">Legal</div>
        <h1>Privacy Policy</h1>
        <p>How we collect, use, and protect information submitted through this website.</p>
      </header>

      <section className={styles.section}>
        <p className={styles.updated}>Last updated: August 2026</p>

        <h2>Who We Are</h2>
        <p>
          Kavaro Agency ("Kavaro", "we", "us") is a Kenya-founded digital product studio. This
          policy explains what information we collect through kavaroagency.com, how we use it, and
          the choices you have. If you have questions, contact us at{" "}
          <a href="mailto:hello@kavaroagency.com">hello@kavaroagency.com</a>.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly when you:</p>
        <ul>
          <li>
            Fill out our contact form (name, email address, phone number, service of interest, and
            your message)
          </li>
          <li>Book a call through our Calendly scheduling link</li>
          <li>Message us directly via WhatsApp or email</li>
        </ul>
        <p>We do not collect payment or financial information through this website.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information you submit to:</p>
        <ul>
          <li>Respond to your inquiry and follow up about your project</li>
          <li>Schedule and manage discovery calls</li>
          <li>Keep an internal record of leads and client communication</li>
        </ul>
        <p>We do not sell your information, and we do not use it for advertising.</p>

        <h2>How Your Information Is Stored</h2>
        <p>
          Contact form submissions are sent to us by email via EmailJS and stored in our internal
          lead-management database (Supabase). Call bookings are handled directly by Calendly under
          its own privacy policy. Messages sent via WhatsApp are subject to WhatsApp's own privacy
          policy.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We rely on a small number of third-party services to run this website and respond to
          inquiries: EmailJS (contact form delivery), Supabase (lead storage), and Calendly
          (scheduling). Each of these providers has its own privacy policy governing how they handle
          data on our behalf.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain contact and lead information for as long as reasonably necessary to respond to
          your inquiry and maintain a record of client relationships. You can request that we delete
          your information at any time by emailing{" "}
          <a href="mailto:hello@kavaroagency.com">hello@kavaroagency.com</a>.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of the personal information you've
          submitted to us at any time. To make a request, email{" "}
          <a href="mailto:hello@kavaroagency.com">hello@kavaroagency.com</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Any changes will be posted on this page with
          an updated date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this policy or how your information is handled, reach us at{" "}
          <a href="mailto:hello@kavaroagency.com">hello@kavaroagency.com</a>.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
