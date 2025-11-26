const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

// GET about information
router.get("/", aboutController.getAbout);

// POST/PUT about information
router.post("/", aboutController.createOrUpdateAbout);
router.put("/", aboutController.createOrUpdateAbout);

module.exports = router;
