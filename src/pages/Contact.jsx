import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="subpage">
      {" "}
      <section className="subpage-intro">
        <h1>Contact</h1>
        <h4>
          Working with a real estate agent can simplify the real estate process.
        </h4>

        <h4>
          My services include everything from finding properties for my clients,
          helping understand processes and paperwork, and handling negotiations.
          Just show up for your viewings and I will handle the rest.
        </h4>

        <h4>
          Fill out the form below or feel free to send me a quick e-mail at <a href="mailto:spacesbydanny@gmail.com"><i>spacesbydanny@gmail.com</i></a>.
        </h4>
      </section>
      <form
        className="contact-form"
        method="POST"
        data-netlify="true"
        name="contact-form"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (optional):</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>Preferred Method of Contact:</p>
          <label>
            <input
              type="radio"
              name="preferredContact"
              value="mail"
              defaultChecked
              onChange={handleChange}
              required
            />{" "}
            Email
          </label>
          <label>
            <input
              type="radio"
              name="preferredContact"
              value="call"
              onChange={handleChange}
              required
            />{" "}
            Phone
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            maxLength="420"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
