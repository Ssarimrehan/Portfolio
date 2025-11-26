const express = require("express");
const router = express.Router();
const experienceController = require("../controllers/experienceController");

// GET all experience
router.get("/", experienceController.getAllExperience);

// POST new experience
router.post("/", experienceController.createExperience);

// PUT update experience
router.put("/:id", experienceController.updateExperience);

// DELETE experience
router.delete("/:id", experienceController.deleteExperience);

module.exports = router;
