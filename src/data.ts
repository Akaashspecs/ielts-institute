import { FaRegMoneyBillAlt, FaRegThumbsUp } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiGoogleclassroom, SiTestcafe } from "react-icons/si";

export const footerLinks = [
  {
    title: "About Us",
    links: ["Our Story", "Careers", "Team", "Blog"],
  },
  {
    title: "Products",
    links: ["Custom Orders", "Pastries", "Cakes", "Bread"],
  },
  {
    title: "Get in Touch",
    links: ["Contact Us", "Locations", "Support", "FAQs"],
  },
];

export const heroData = [
  {
    id: 1,
    icon: RiCustomerService2Line,
    title: "24/7 Support",
    total: 300,
  },
  {
    id: 2,
    icon: LiaChalkboardTeacherSolid,
    title: "Experience Teachers",
    total: 20,
  },
  {
    id: 3,
    icon: GrCheckboxSelected,
    title: "Certified Courses",
    total: 50,
  },
  {
    id: 4,
    icon: GrCheckboxSelected,
    title: "Successful Students",
    total: 1000,
  },
  {
    id: 5,
    icon: SiTestcafe,
    title: "Weekly Test",
    total: 20,
  },
];

export const ieltsFeatures = [
  {
    icon: FaRegMoneyBillAlt,
    text: "Affordable Prices",
  },
  {
    icon: FaRegThumbsUp,
    text: "Motivate every students",
  },
  {
    icon: SiGoogleclassroom,
    text: "Excelence Education",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Harshit Kothari",
    image: "harshit.jpeg",
    star: "⭐ ⭐ ⭐ ⭐ ⭐",
    date: "2 months ago",
    description:
      "Amazing Institute with professtional teachers. So much have to learn.Amazing Institute with professtional teachers. So much have to learn.",
  },
  {
    id: 2,
    name: "Vijay Bhawani",
    image: "vijay.jpg",
    star: "⭐ ⭐ ⭐ ⭐",
    date: "5 months ago",
    description:
      "Amazing Institute with professtional teachers. So much have to learn.Amazing Institute with professtional teachers. So much have to learn.",
  },
  {
    id: 3,
    name: "Nikita Raturi",
    image: "nikita.jpg",
    star: "⭐ ⭐ ⭐ ⭐ ⭐",
    date: "1 months ago",
    description:
      "Amazing Institute with professtional teachers. So much have to learn.Amazing Institute with professtional teachers. So much have to learn.",
  },
];

export const ielts = ["I", "E", "L", "T", "S"];

export const features = [
  {
    id: 1,
    title: "Speaking Practice",
    image: "speaking.webp",
    description:
      "With mock interviews, real-life speaking topics, and personalized feedback, students learn how to structure answers, improve pronunciation,",
    details: [
      "One-on-One Practice with expert trainers",
      "Mock Interviews that simulate the real IELTS test",
      "Fluency & Pronunciation Training",
      "Instant Feedback & Score Prediction",
    ],
  },
  {
    id: 2,
    title: "Mock Test",
    image: "test.jpg",
    description:
      "It helps candidates get familiar with the format, timing, and question types. By attempting mock tests, students can assess their current band level, identify weak areas, and build confidence before the actual exam.",
    details: [
      "Self-Assessment & Feedback",
      "Time Management Practice",
      "Identify Strengths & Weaknesses",
      "Boosts Confidence",
    ],
  },
  {
    id: 3,
    title: "AI Band Score",
    image: "score.jpg",
    description:
      "It evaluates your IELTS practice answers in Listening, Reading, Writing, and Speaking and gives you an estimated band score instantly.",
    details: [
      "Realistic Band Prediction",
      "Instant Evaluation",
      "Skill-Specific Insights",
      "Personalized Learning",
    ],
  },
];
