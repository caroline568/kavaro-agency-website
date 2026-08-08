import carolineImg from "@/assets/founder.png";
import hezronImg from "@/assets/hezron.jpeg";
import brendaImg from "@/assets/brenda.jpeg";

export type TeamMember = {
  name: string;
  role: string;
  speciality: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Caroline Nyawira",
    role: "Founder & Software Engineer",
    speciality: "Product Strategy · Software Engineering · Creative Direction",
    bio: "Caroline founded and leads Kavaro, setting the studio's vision and overseeing every product from first concept to launch. She works directly with clients to turn ideas into real digital products, bridging business, design, and engineering — a path that began with a diploma in early childhood education, moved through cybersecurity and UI/UX design, and led to software engineering, which she's currently deepening through Moringa School's Software Engineering program. Alongside Kavaro, she's building Finora, her own AI-powered fintech platform.",
    image: carolineImg,
  },
  {
    name: "Hezron Sande",
    role: "Full-Stack Software Engineer",
    speciality: "Full-Stack Development · React & Node.js",
    bio: "Builds the reliable systems behind every product Kavaro ships — equally at home on the frontend or backend, wherever a project needs the most attention.",
    image: hezronImg,
  },
  {
    name: "Brenda Chebet",
    role: "Product Designer",
    speciality: "UI/UX Design · Frontend Development",
    bio: "Turns research and design into interfaces that are responsive, accessible, and genuinely easy to use — the kind of small details that make a product feel considered, not just finished.",
    image: brendaImg,
  },
];
