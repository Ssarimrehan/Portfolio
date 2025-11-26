import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const baseUrl =
        process.env.REACT_APP_API_URL ||
        "https://portfolio-backend-five-tau.vercel.app";
      const apiUrl = `${baseUrl}/api/contact`;
      console.log("Sending to:", apiUrl);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      await response.json();
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
      console.error("Error submitting contact form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page contact-page">
      <h2>Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-label">?? Phone</span>
            <p>
              <a href="tel:+923084218922">+923084218922</a>
            </p>
          </div>
          <div className="contact-item">
            <span className="contact-label">?? Email</span>
            <p>
              <a href="mailto:m.sarimrehanshami@gmail.com">
                m.sarimrehanshami@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <span className="contact-label">?? LinkedIn</span>
            <p>
              <a
                href="https://www.linkedin.com/in/sarim-rehan"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sarim-rehan
              </a>
            </p>
          </div>
        </div>

        <div className="contact-message">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new projects and
            opportunities. Whether you want to collaborate, have a question, or
            just want to say hello, feel free to reach out!
          </p>
          <p>
            I'm particularly passionate about MERN stack development, robotics,
            IoT solutions, and innovative engineering applications.
          </p>
        </div>

        <div className="contact-form-section">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Message subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="6"
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <div className="success-message">
                ? Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {error && <div className="error-message">? Error: {error}</div>}
          </form>
        </div>

        <div className="contact-cta">
          <h3>Quick Actions</h3>
          <div className="cta-buttons">
            <a href="mailto:m.sarimrehanshami@gmail.com" className="cta-btn">
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/sarim-rehan"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              View LinkedIn
            </a>
            <a href="tel:+923084218922" className="cta-btn secondary">
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
