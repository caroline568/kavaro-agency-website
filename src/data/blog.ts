export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  pillar: string;
  date: string; // ISO date
  sections: BlogSection[];
};

export const pillars = [
  "Client Questions & Buying Guides",
  "Case Study Deep-Dives",
  "Practical AI for Businesses",
  "Process & Trust-Building",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "what-to-expect-first-call-digital-agency",
    title: "What to Expect in Your First Call With a Digital Agency",
    excerpt:
      "If you've never worked with an agency before, here's exactly what a first discovery call looks like — so you can walk in prepared, not guessing.",
    pillar: "Process & Trust-Building",
    date: "2026-08-08",
    sections: [
      {
        paragraphs: [
          "Booking a first call with an agency can feel like a bit of a black box, especially if you've never done it before. Will they try to sell you something you don't need? Do you need a full brief ready? Is 30 minutes even enough time?",
          "Here's what an honest first call actually looks like — at least how we run ours at Kavaro.",
        ],
      },
      {
        heading: "It starts with your problem, not our services",
        paragraphs: [
          "We're not trying to fit your business into a pre-built package. The first 10–15 minutes are just us listening — what's actually not working right now, who your customers are, and what you've already tried.",
          "You don't need a polished brief or technical spec. \"Our booking process is all phone calls and it's chaotic\" is a completely valid starting point.",
        ],
      },
      {
        heading: "We'll tell you if you don't need what you think you need",
        paragraphs: [
          "Sometimes a business comes to us thinking they need a full custom web app, when a well-built landing page and a booking form would solve 90% of the problem for a fraction of the cost. We'd rather tell you that upfront than sell you more than you need.",
        ],
      },
      {
        heading: "You'll leave with a rough idea of scope and cost, not a hard sell",
        paragraphs: [
          "By the end of the call, you should have a general sense of what a solution could look like and roughly what it would cost — not a pressured close. If it's a fit, we follow up in writing with next steps. If it's not, we'll say so.",
        ],
      },
      {
        heading: "What to bring",
        paragraphs: [
          "Honestly, not much. It helps to know roughly what's frustrating about your current setup, and any examples of sites or tools you like the feel of. Everything else, we can figure out together on the call.",
        ],
      },
    ],
  },
];
