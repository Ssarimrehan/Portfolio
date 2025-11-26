const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

// GET all skills
router.get("/", skillController.getAllSkills);

// POST new skill
router.post("/", skillController.createSkill);

// PUT update skill
router.put("/:id", skillController.updateSkill);

// DELETE skill
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
