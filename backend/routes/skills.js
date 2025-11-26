const express = require('express');
const router = express.Router();

// Mock data - Replace with database queries
const skillsData = [
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs']
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Postman', 'Webpack']
  }
];

// GET all skills
router.get('/', (req, res) => {
  res.json(skillsData);
});

module.exports = router;
