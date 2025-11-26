const express = require('express');
const router = express.Router();

// Mock data - Replace with database queries
const aboutData = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: 'Passionate about building web applications',
  email: 'your@email.com',
  phone: '+1 (555) 000-0000',
  location: 'Your City, Country',
  profileImage: '/images/profile.jpg'
};

// GET about information
router.get('/', (req, res) => {
  res.json(aboutData);
});

module.exports = router;
