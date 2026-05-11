import achHack1 from "@/assets/portfolio/ach-hackathon-1.jpg";
import achHack2 from "@/assets/portfolio/ach-hackathon-2.jpg";
import achYouth from "@/assets/portfolio/ach-youth-roundtable.jpg";
import projFoot from "@/assets/portfolio/proj-footguard.jpg";
import projNeuro from "@/assets/portfolio/proj-neuroclass.jpg";
import projRobot from "@/assets/portfolio/proj-robot.jpg";
import ux1 from "@/assets/portfolio/uiux-ricemill-1.jpg";
import ux2 from "@/assets/portfolio/uiux-ricemill-2.jpg";
import ux3 from "@/assets/portfolio/uiux-ricemill-3.jpg";
import ux4 from "@/assets/portfolio/uiux-ricemill-4.jpg";
import ux5 from "@/assets/portfolio/uiux-ricemill-5.jpg";
import uxPoster from "@/assets/portfolio/uiux-poster.jpg";
import uxPhotopea from "@/assets/portfolio/uiux-photopea.jpg";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/rajalingam-narayanakumar-578a69348",
  resume: "https://bit.ly/4uaJShe",
  selfIntro: "https://bit.ly/4uFVgkU",
  github: "https://github.com/rajalingam",
  figma: "https://twine-pure-42838145.figma.site/",
  email: "mailto:rajalingamyadav@gmail.com",
};

export const SKILLS = [
  { name: "Python", level: 92 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "UI/UX Design", level: 90 },
  { name: "Figma", level: 95 },
  { name: "HTML / CSS", level: 88 },
  { name: "Canva", level: 90 },
  { name: "Data Science", level: 82 },
];

export const TIMELINE = [
  { year: "2022", title: "Started B.Tech AI & Data Science", desc: "Began the journey into Artificial Intelligence and Data Science." },
  { year: "2023", title: "Runner-up — Youth Indians Round Table", desc: "Accessibility & Health Talk competition." },
  { year: "2024", title: "Tamil Nadu Govt. Award", desc: "Centum in Computer Science recognition." },
  { year: "2025", title: "3rd Prize — National Hackathon", desc: "VCET Madurai national-level hackathon." },
  { year: "2026", title: "Final Year — Open for opportunities", desc: "Open to internships & full-time AI / UX roles." },
];

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  link?: string;
  linkLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "FootGuard",
    desc: "Diabetic foot health AI assistant with computer-vision based foot scan and a multilingual medical chatbot.",
    tags: ["Python", "Computer Vision", "AI"],
    image: projFoot,
  },
  {
    title: "NeuroClass AI",
    desc: "Smart education focus monitor — tracks gaze, blink rate and attention using deep learning.",
    tags: ["Deep Learning", "EdTech", "OpenCV"],
    image: projNeuro,
  },
  {
    title: "Autonomous Service Robot",
    desc: "Indoor service robot with autonomous navigation, obstacle avoidance and task execution.",
    tags: ["Robotics", "AI", "IoT"],
    image: projRobot,
  },
  {
    title: "Sri Rajalingam Rice Mill — Figma",
    desc: "Responsive e-commerce UI for a traditional local business, designed end-to-end in Figma with a working interactive prototype.",
    tags: ["Figma", "UI/UX", "Prototype"],
    image: ux1,
    link: "https://twine-pure-42838145.figma.site/",
    linkLabel: "View Figma Project",
  },
];

export const UIUX = [
  { title: "Sri Rajalingam Rice Mill — Hero", image: ux1 },
  { title: "Milagai & Malli Grinding", image: ux2 },
  { title: "Why Choose Us", image: ux3 },
  { title: "Contact Section", image: ux4 },
  { title: "Product Showcase", image: ux5 },
  { title: "Brand Poster — Canva", image: uxPoster },
  { title: "School Admission Poster — Photopea", image: uxPhotopea },
];

export const ACHIEVEMENTS = [
  { title: "3rd Prize — National Hackathon", org: "VCET, Madurai", image: achHack1 },
  { title: "Runner-up — Youth Indians Round Table", org: "Accessibility & Health Talk", image: achYouth },
  { title: "Tamil Nadu Government Award", org: "Centum in Computer Science", image: achHack2 },
];
