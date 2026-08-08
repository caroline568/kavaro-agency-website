import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/data/blog";
import styles from "../Blog.module.css";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Kavaro Agency Blog` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
  }),
});

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/hello-kavaro";

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.postWrap}>
          <Link to="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>

          <div className={styles.postMeta}>
            <span>{post.pillar}</span>
            <span>·</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className={styles.postH1}>{post.title}</h1>

          {post.sections.map((s, i) => (
            <div key={i}>
              {s.heading && <h2>{s.heading}</h2>}
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSec}>
        <h2>
          Have a Project in <em>Mind?</em>
        </h2>
        <p>Let's talk through what you're trying to build — no pressure, no hard sell.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
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

export default BlogPost;
