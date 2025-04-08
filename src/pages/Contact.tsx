import type React from "react";

import { useState } from "react";
import FadeInSection from "../components/FadeInSection";
import { Mail, MapPin } from "react-feather";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-description">
              Get in touch with our team to discuss how we can help your
              business expand across EMEA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-black">
        <div className="container">
          <div className="grid grid-2">
            <FadeInSection>
              <div className="space-y-8">
                <h2
                  className="text-white"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  Get In Touch
                </h2>
                <p className="text-gray">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                <div className="pt-32">
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <div>
                      <h3 className="text-white" style={{ fontWeight: "500" }}>
                        Location
                      </h3>
                      <p className="text-gray">EMEA Region</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail
                      size={24}
                      className="text-primary"
                      style={{ flexShrink: 0, marginTop: "0.25rem" }}
                    />
                    <div>
                      <h3 className="text-white" style={{ fontWeight: "500" }}>
                        Email
                      </h3>
                      <p className="text-gray">contact@tatooinenetworks.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="card">
                {isSubmitted ? (
                  <div className="text-center" style={{ padding: "3rem 0" }}>
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        backgroundColor: "var(--primary)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.5rem",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3
                      className="text-white"
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-gray">
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-control"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-full"
                      style={{
                        backgroundColor: isSubmitting
                          ? "var(--gray-700)"
                          : "var(--primary)",
                        color: "white",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
