import { Link } from "@tanstack/react-router";
import kavaroLogo from "@/assets/kavaro-logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img
            src={kavaroLogo}
            alt="Kavaro Agency logo"
            width={1264}
            height={843}
            className={styles.logoImage}
          />
          <p className={styles.desc}>
            A remote web development team designing and building modern websites and digital tools
            that help growing businesses attract customers, improve operations, and grow online.
          </p>
          <a href="mailto:hello@kavaroagency.com" className={styles.emailLink}>
            hello@kavaroagency.com
          </a>
        </div>
        <div className={styles.col}>
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/services">Digital Product Design</Link>
            </li>
            <li>
              <Link to="/services">Web Development</Link>
            </li>
            <li>
              <Link to="/services">AI-Powered Solutions</Link>
            </li>
            <li>
              <Link to="/services">Digital Transformation</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Work</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:hello@kavaroagency.com">hello@kavaroagency.com</a>
            </li>
            <li>
              <a href="whatsapp:+254737821126">+254737821126</a>
            </li>
            <li>
              <a
                href={import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro"}
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
              </a>
            </li>
            <li>
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Kavaro Agency. All rights reserved.</p>
        <p>Remote · Nairobi, Kenya</p>
      </div>
    </footer>
  );
}
