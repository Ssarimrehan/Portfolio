const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Portfolio Data (In-memory - no DB required)
const portfolioData = {
  about: {
    name: "Muhammad Sarim Rehan Shami",
    title: "Full Stack Developer (MERN Stack)",
    subtitle: "Electrical Engineer",
    email: "m.sarimrehanshami@gmail.com",
    phone: "+923084218922",
    linkedin: "https://www.linkedin.com/in/sarim-rehan",
    summary:
      "Full Stack Developer with a strong analytical background in Electrical Engineering.",
    longSummary:
      "My expertise spans the MERN stack (MongoDB, Express, React, Node.js), complemented by experience in hardware design, robotics, and embedded systems.",
    languages: [
      { name: "Urdu", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Chinese", level: "Intermediate" },
    ],
    highlights: [
      "Full Stack Development (MERN Stack)",
      "Strong project execution from planning to deployment",
      "Hardware & Embedded Systems background",
      "Leadership and team management experience",
      "Problem-solving with engineering discipline",
    ],
  },

  skills: {
    programming: ["JavaScript", "Python", "HTML/CSS", "SQL", "C"],
    webFrameworks: ["React.js", "Node.js", "Express.js"],
    tools: [
      "Git",
      "Microsoft Office",
      "MATLAB",
      "Altium PCB Design",
      "Vivado",
      "ModelSim",
      "Bootstrap",
      "Printrun",
      "Cura",
    ],
    hardwareEmbedded: ["Arduino", "PCB Design", "Robotics", "3D Printing"],
    interests: [
      "Community involvement & volunteering",
      "IC designing",
      "Workplace management & team training",
      "Strategic planning",
      "Robotics & automation",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Automated Solar Panel Cleaning Robot",
      description:
        "Final Year Project - An autonomous robot system for cleaning solar panels to improve efficiency.",
      type: "Hardware/Embedded",
      skills: ["Arduino", "Robotics", "Automation"],
    },
    {
      id: 2,
      title: "Line Following Robot Car",
      description:
        "Autonomous vehicle with WiFi and Bluetooth control capabilities for real-time remote operation.",
      type: "Hardware/Embedded",
      skills: ["Arduino", "Robotics", "Bluetooth", "WiFi"],
    },
    {
      id: 3,
      title: "Inverted Pendulum Control",
      description:
        "Control system implementation using Arduino UNO to maintain balance of an inverted pendulum.",
      type: "Hardware/Embedded",
      skills: ["Arduino", "Control Systems", "Physics"],
    },
    {
      id: 4,
      title: "Gas/Smoke Detection Device",
      description:
        "IoT device with mobile app-based control for real-time environmental monitoring.",
      type: "Hardware/IoT",
      skills: ["Arduino", "IoT", "Mobile Integration"],
    },
    {
      id: 5,
      title: "PCB Circuit Switch Board",
      description:
        "Automatic control system for PCB-based circuit switches with design and implementation.",
      type: "Hardware",
      skills: ["PCB Design", "Altium", "Circuit Design"],
    },
    {
      id: 6,
      title: "Vets Taxi",
      description:
        "Customer service support system for a taxi service in Canada.",
      type: "Software",
      skills: ["Customer Service", "System Design"],
    },
  ],

  experience: [
    {
      id: 1,
      company: "Descon Engineering",
      location: "Lahore, Pakistan",
      position: "Intern",
      duration: "Jan 2025 – May 2025",
      description:
        "Worked in ISD division Planning department on mega project planning and maintenance scheduling.",
      highlights: [
        "Project planning and scheduling",
        "Turnaround and shutdown maintenance planning",
      ],
    },
    {
      id: 2,
      company: "Emerald Solutions Hub",
      location: "Lahore, Pakistan",
      position: "Operations Manager",
      duration: "Jan 2025 – May 2025",
      description:
        "Organized sales team and managed company accounts and operations.",
      highlights: [
        "Team organization",
        "Account management",
        "Operational oversight",
      ],
    },
    {
      id: 3,
      company: "Twin Brothers",
      location: "Lahore, Pakistan",
      position: "Supervisor Sales Department",
      duration: "Feb 2024 – Dec 2024",
      description: "Managed sales team and achieved significant sales growth.",
      highlights: [
        "Team management and leadership",
        "Sales increase and target achievement",
        "Staff training and mentoring",
      ],
    },
    {
      id: 4,
      company: "D-Hoppers Pvt Ltd",
      location: "Lahore, Pakistan",
      position: "Project Head",
      duration: "Jan 2023 – Feb 2024",
      description:
        'Led development and maintenance of customer service support system for "Vets Taxi" project.',
      highlights: [
        "Project leadership",
        "System development",
        "Customer satisfaction optimization",
      ],
    },
    {
      id: 5,
      company: "Digitech Outstanding Solution",
      location: "Lahore, Pakistan",
      position: "Customer Service Representative",
      duration: "May 2022 – Jan 2023",
      description:
        "Resolved customer complaints and inquiries, increasing customer loyalty.",
      highlights: ["Customer issue resolution", "Loyalty improvement"],
    },
    {
      id: 6,
      company: "Trans Global Service",
      location: "Lahore, Pakistan",
      position: "Customer Sales Representative",
      duration: "Jun 2021 – Mar 2022",
      description:
        "Developed strong customer relationships and achieved monthly sales targets.",
      highlights: [
        "Customer relationship development",
        "Sales target achievement",
        "Professional communication",
      ],
    },
  ],

  education: [
    {
      school: "University of Engineering and Technology",
      degree: "Bachelor of Science in Electrical Engineering",
      duration: "2021–2025",
    },
  ],

  leadership: [
    {
      organization: "Uraan Society",
      role: "Volunteer",
      duration: "Feb 2025 – Apr 2025",
      description:
        "Taught 6th-grade students robotics, 3D printing, and STEM concepts",
    },
    {
      organization: "Amal Fellowship",
      role: "Volunteer",
      duration: "Feb 2024 – Sep 2024",
      description: "Participated in various community events",
    },
    {
      organization: "IEEE UET",
      role: "Member",
      duration: "Jan 2022 – Dec 2024",
      description: "Active participant in society events",
    },
  ],
};

// Routes
app.get("/api/about", (req, res) => {
  res.json(portfolioData.about);
});

app.get("/api/skills", (req, res) => {
  res.json(portfolioData.skills);
});

app.get("/api/projects", (req, res) => {
  res.json(portfolioData.projects);
});

app.get("/api/projects/:id", (req, res) => {
  const project = portfolioData.projects.find(
    (p) => p.id === parseInt(req.params.id)
  );
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.get("/api/experience", (req, res) => {
  res.json({
    jobs: portfolioData.experience,
    education: portfolioData.education,
    leadership: portfolioData.leadership,
  });
});

app.get("/api/contact", (req, res) => {
  res.json({
    email: portfolioData.about.email,
    phone: portfolioData.about.phone,
    linkedin: portfolioData.about.linkedin,
  });
});

app.get("/api/portfolio", (req, res) => {
  res.json(portfolioData);
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running!", timestamp: new Date() });
});

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend API", version: "1.0.0" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📍 API endpoints available at http://localhost:${PORT}/api/*`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});
