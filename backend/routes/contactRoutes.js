const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// POST contact form submission
router.post("/", contactController.submitContact);

// GET all contacts (admin)
router.get("/", contactController.getAllContacts);

// DELETE contact
router.delete("/:id", contactController.deleteContact);

module.exports = router;
