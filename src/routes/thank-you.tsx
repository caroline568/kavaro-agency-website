import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
  head: () => ({
    meta: [
      {
        title: "Thank You | Kavaro Agency",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
});

function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-10 w-10"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Your Digital Journey Starts Here 💫
        </h1>

        {/* Message */}
        <p className="mt-6 text-lg leading-relaxed opacity-80">
          Thank you for reaching out to Kavaro Agency. We have received your project inquiry and our
          team will carefully review your goals, challenges, and ideas.
        </p>

        <p className="mt-4 text-lg leading-relaxed opacity-80">
          We’ll get back to you soon with the next steps on how we can help bring your digital
          vision to life.
        </p>

        {/* Next Steps */}
        <div className="mt-10 rounded-2xl border p-6 text-left">
          <h2 className="text-xl font-semibold text-center">What happens next?</h2>

          <div className="mt-6 space-y-4">
            <div>
              <span className="font-semibold">01.</span> We review your project requirements
            </div>

            <div>
              <span className="font-semibold">02.</span> We understand your goals and challenges
            </div>

            <div>
              <span className="font-semibold">03.</span> We discuss the best digital solution for
              your needs
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link to="/" className="mt-10 inline-flex rounded-full px-8 py-3 font-medium border">
          Explore Kavaro
        </Link>
      </div>
    </main>
  );
}
