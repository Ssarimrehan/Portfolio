const About = require("../models/About");

// Get about information
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      return res.status(404).json({ message: "About information not found" });
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create or update about information
exports.createOrUpdateAbout = async (req, res) => {
  try {
    const { name, title, bio, email, phone, location, profileImage } = req.body;

    let about = await About.findOne();

    if (about) {
      // Update existing
      about.name = name || about.name;
      about.title = title || about.title;
      about.bio = bio || about.bio;
      about.email = email || about.email;
      about.phone = phone || about.phone;
      about.location = location || about.location;
      about.profileImage = profileImage || about.profileImage;
    } else {
      // Create new
      about = new About({
        name,
        title,
        bio,
        email,
        phone,
        location,
        profileImage,
      });
    }

    await about.save();
    res.json(about);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
