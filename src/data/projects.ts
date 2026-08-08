import smartImg from "@/assets/S Mart.png";
import smargoImg from "@/assets/smargo-homepage.webp";
import virtualConsultationImg from "@/assets/Virtual Consultation.png";
import aireactImg from "@/assets/ai-react.webp";

export type Project = {
  title: string;
  type: string;
  problem: string;
  solution: string;
  tools: string[];
  outcome: string;
  accent: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Healthcare Booking - Concept",
    type: "Concept Website",
    problem:
      "Local clinics in Nairobi rely on phone calls for appointments - patients wait, lines drop, no-shows are high.",
    solution:
      "A clean booking site with doctor profiles, time-slot picker, SMS reminders and a simple admin view.",
    tools: ["Figma", "React", "Tailwind", "Supabase"],
    outcome:
      "Concept prototype reduces booking friction to 3 taps. Designed mobile-first for low-bandwidth use.",
    accent: "linear-gradient(135deg, #1e3a5f, #0a1929)",
    image: virtualConsultationImg,
  },
  {
    title: "Smargo - Farm-to-Institution Marketplace",
    type: "Web Development Project",
    problem:
      "Farmers often rely on middlemen who reduce their earnings, while institutions like schools and hospitals struggle to access fresh produce directly from reliable suppliers.",
    solution:
      "Built a responsive marketplace interface that connects farmers directly with institutions, focusing on clarity, usability, and smooth product browsing and ordering flow.",
    tools: ["React", "TypeScript", "Vercel"],
    outcome:
      "Live deployed platform demonstrating real-world frontend development, UI structuring, and deployment of a functional marketplace interface.",
    accent: "linear-gradient(135deg, #0f172a, #1e293b)",
    image: smargoImg,
    link: "https://smargo.vercel.app",
  },
  {
    title: "S Mart",
    type: "UI/UX Design Project",
    problem:
      "Designed a mobile grocery shopping experience that makes it easy for customers to browse products, discover special offers, and order everyday essentials.",
    solution:
      "Designed a complete mobile shopping experience in Figma, including user flows, wireframes, high-fidelity screens, and an interactive prototype focused on simplicity and usability.",
    tools: ["Figma", "UI Design", "UX Design", "Prototyping"],
    outcome:
      "Created a modern grocery shopping app prototype with intuitive navigation, product browsing, promotions, and a streamlined shopping experience.",
    accent: "linear-gradient(135deg, #4CAF50, #2E7D32)",
    image: smartImg,
    link: "https://www.figma.com/proto/2DaNeg6c0ujjkAvPKUCtOt/Smart-App?node-id=61-61&t=OrQQHqf2bCYb9PeB-1",
  },
  {
    title: "AI Customer Assistant - Demo",
    type: "React + AI Project",
    problem:
      "Service businesses repeat the same 20 questions all day - pricing, hours, location, booking.",
    solution:
      "Embeddable chat widget powered by an LLM, trained on a business FAQ, with email and Calendly handoff.",
    tools: ["React", "OpenAI API", "Node.js", "TypeScript"],
    outcome:
      "Working demo answers 80% of common questions instantly. Deployable to any site in minutes.",
    accent: "linear-gradient(135deg, #4a2d5f, #1a0f2a)",
    image: aireactImg,
  },
];
