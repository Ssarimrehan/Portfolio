const express = require("express");
const router = express.Router();

// Mock email service - Replace with actual email service (e.g., nodemailer)
router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // TODO: Send email using nodemailer or similar service
  console.log("Contact form submission:", { name, email, subject, message });

  res.json({
    success: true,
    message: "Message received! We will get back to you soon.",
  });
});

module.exports = router;
