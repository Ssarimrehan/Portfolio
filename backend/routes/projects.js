const express = require('express');
const router = express.Router();

// Mock data - Replace with database queries
const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Brief project description',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/project1.jpg',
    link: 'https://github.com/yourusername/project1',
    demoLink: 'https://project1.com'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Another project description',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    imageUrl: '/images/project2.jpg',
    link: 'https://github.com/yourusername/project2',
    demoLink: 'https://project2.com'
  }
];

// GET all projects
router.get('/', (req, res) => {
  res.json(projectsData);
});

// GET single project
router.get('/:id', (req, res) => {
  const project = projectsData.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;
