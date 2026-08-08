import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { posts, pillars } from "@/data/blog";
import styles from "../Blog.module.css";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog — Kavaro Agency" },
      {
        name: "description",
        content:
          "Practical guides on web development, AI, and hiring a digital agency — written for growing businesses, from Kavaro Agency.",
      },
    ],
  }),
});

function BlogIndex() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active ? posts.filter((p) => p.pillar === active) : posts;
  const sorted = [...filtered].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main>
      <header className="page-hero">
        <div className="section-label">Blog</div>
        <h1>
          Practical Advice, Not <em>Sales Pitches</em>.
        </h1>
        <p>
          Guides on hiring an agency, building digital products, and using AI — written for growing
          businesses, not developers.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.filterRow}>
          <button
            className={`${styles.filterBtn} ${active === null ? styles.filterActive : ""}`}
            onClick={() => setActive(null)}
          >
            All
          </button>
          {pillars.map((p) => (
            <button
              key={p}
              className={`${styles.filterBtn} ${active === p ? styles.filterActive : ""}`}
              onClick={() => setActive(p)}
            >
              {p}
            </button>
          ))}
        </div>

        {sorted.length === 0 ? (
          <p className={styles.empty}>No posts in this category yet — check back soon.</p>
        ) : (
          <div className={styles.postGrid}>
            {sorted.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className={styles.postCard}
              >
                <span className={styles.postTag}>{p.pillar}</span>
                <h2 className={styles.postTitle}>{p.title}</h2>
                <p className={styles.postExcerpt}>{p.excerpt}</p>
                <span className={styles.postDate}>
                  {new Date(p.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default BlogIndex;
