import { Router } from "express";

const router = Router();

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom apps & platforms built for scale",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Custom Software",
    description: "Bespoke solutions for your exact workflow",
    icon: "💻",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "AWS, Azure & DevOps infrastructure",
    icon: "☁️",
  },
  {
    id: 4,
    title: "AI Automation",
    description: "Intelligent workflows that save hours daily",
    icon: "🤖",
  },
  {
    id: 5,
    title: "IT Consulting",
    description: "Strategy, architecture & technical audits",
    icon: "📊",
  },
  {
    id: 6,
    title: "Digital Transformation",
    description: "Future-proof your business systems",
    icon: "⚙️",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: services.length,
    data: services,
  });
});

export default router;