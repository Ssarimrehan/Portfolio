const mongoose = require("mongoose");
require("dotenv").config();

const About = require("./models/About");
const Project = require("./models/Project");
const Skill = require("./models/Skill");
const Experience = require("./models/Experience");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

const aboutData = {
  name: "Muhammad Sarim Rehan Shami",
  title: "Full Stack Developer (MERN Stack) | Electrical Engineer",
  bio: "I'm a Full Stack Developer with a strong analytical background in Electrical Engineering. I bring a unique problem-solving approach to software development – integrating engineering precision with modern web technologies.",
  email: "m.sarimrehanshami@gmail.com",
  phone: "+923084218922",
  location: "Lahore, Pakistan",
  profileImage: "/images/profile.jpg",
};

const projectsData = [
  {
    title: "Automated Solar Panel Cleaning Robot",
    description:
      "Final Year Project - An autonomous robot system for cleaning solar panels to improve efficiency.",
    technologies: ["Arduino", "Robotics", "Automation", "IoT"],
    imageUrl: "/images/project1.jpg",
    link: "https://github.com/yourusername/solar-robot",
    demoLink: "https://example.com",
  },
  {
    title: "Line Following Robot Car",
    description:
      "Autonomous vehicle with WiFi and Bluetooth control capabilities for real-time remote operation.",
    technologies: ["Arduino", "Robotics", "Bluetooth", "WiFi"],
    imageUrl: "/images/project2.jpg",
    link: "https://github.com/yourusername/line-following-robot",
    demoLink: "https://example.com",
  },
  {
    title: "Inverted Pendulum Control",
    description:
      "Control system implementation using Arduino UNO to maintain balance of an inverted pendulum.",
    technologies: ["Arduino", "Control Systems", "Physics"],
    imageUrl: "/images/project3.jpg",
    link: "https://github.com/yourusername/inverted-pendulum",
    demoLink: "https://example.com",
  },
  {
    title: "Gas/Smoke Detection Device",
    description:
      "IoT device with mobile app-based control for real-time environmental monitoring.",
    technologies: ["Arduino", "IoT", "Mobile Integration", "Sensors"],
    imageUrl: "/images/project4.jpg",
    link: "https://github.com/yourusername/gas-detector",
    demoLink: "https://example.com",
  },
  {
    title: "PCB Circuit Switch Board",
    description:
      "Automatic control system for PCB-based circuit switches with design and implementation.",
    technologies: ["PCB Design", "Altium", "Circuit Design", "Electronics"],
    imageUrl: "/images/project5.jpg",
    link: "https://github.com/yourusername/pcb-switchboard",
    demoLink: "https://example.com",
  },
  {
    title: "Vets Taxi",
    description:
      "Customer service support system for a taxi service in Canada. Developed and maintained as Project Head.",
    technologies: ["MERN Stack", "Node.js", "React", "MongoDB"],
    imageUrl: "/images/project6.jpg",
    link: "https://github.com/yourusername/vets-taxi",
    demoLink: "https://vetstaxicanada.com",
  },
];

const skillsData = [
  {
    category: "Programming",
    items: ["JavaScript", "Python", "HTML/CSS", "SQL", "C"],
  },
  {
    category: "Web Frameworks",
    items: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Tools & Software",
    items: [
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
  },
  {
    category: "Hardware & Embedded",
    items: ["Arduino", "PCB Design", "Robotics", "3D Printing", "IoT"],
  },
];

const experienceData = [
  {
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
    company: "Twin Brothers",
    location: "Lahore, Pakistan",
    position: "Supervisor Sales Department",
    duration: "Feb 2024 – Dec 2024",
    description:
      "Managed sales team and achieved significant sales growth through effective team leadership and training.",
    highlights: [
      "Team management and leadership",
      "Sales increase and target achievement",
      "Staff training and mentoring",
    ],
  },
  {
    company: "D-Hoppers Pvt Ltd",
    location: "Lahore, Pakistan",
    position: "Project Head",
    duration: "Jan 2023 – Feb 2024",
    description:
      'Led development and maintenance of customer service support system for "Vets Taxi" project in Canada.',
    highlights: [
      "Project leadership",
      "System development",
      "Customer satisfaction optimization",
    ],
  },
  {
    company: "Digitech Outstanding Solution",
    location: "Lahore, Pakistan",
    position: "Customer Service Representative",
    duration: "May 2022 – Jan 2023",
    description:
      "Resolved customer complaints and inquiries, increasing customer loyalty and satisfaction.",
    highlights: ["Customer issue resolution", "Loyalty improvement"],
  },
  {
    company: "Trans Global Service",
    location: "Lahore, Pakistan",
    position: "Customer Sales Representative",
    duration: "Jun 2021 – Mar 2022",
    description:
      "Developed strong customer relationships and consistently achieved monthly sales targets.",
    highlights: [
      "Customer relationship development",
      "Sales target achievement",
      "Professional communication",
    ],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await About.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    console.log("Cleared existing data");

    // Seed About
    const about = new About(aboutData);
    await about.save();
    console.log("About data seeded");

    // Seed Projects
    await Project.insertMany(projectsData);
    console.log("Projects data seeded");

    // Seed Skills
    await Skill.insertMany(skillsData);
    console.log("Skills data seeded");

    // Seed Experience
    await Experience.insertMany(experienceData);
    console.log("Experience data seeded");

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
