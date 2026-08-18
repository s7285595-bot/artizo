"use client";

import { useState } from "react";

/*
  ============================================================
  WHATSAPP NUMBER
  ============================================================

  IMPORTANT:
  Replace this with your actual WhatsApp number.

  India example:
  919876543210

  Do NOT use:
  +91 98765 43210
  09876543210

  Use country code + number only.
*/
const WHATSAPP_NUMBER = "+917842926297";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello ARTIZO,

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date || "Not specified"}

Message:
${formData.message || "No additional message."}

Thank you.
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <>
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="nav">
        <a
          className="brand"
          href="#home"
          aria-label="ARTIZO Home"
          onClick={closeMenu}
        >
          <div className="brand-mark">
            <span>A</span>
          </div>

          <div className="brand-text">
            <strong>ARTIZO</strong>
            <small>FRAME YOUR VISION</small>
          </div>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a
            className="active"
            href="#home"
            onClick={closeMenu}
          >
            HOME
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            ABOUT
          </a>

          {/* SERVICES */}
          <div className="nav-dropdown">
            <button type="button">
              SERVICES <span>⌄</span>
            </button>

            <div className="dropdown-glass">
              <a href="#wedding" onClick={closeMenu}>
                Wedding
              </a>

              <a href="#films" onClick={closeMenu}>
                Cinematic Films
              </a>

              <a href="#drone" onClick={closeMenu}>
                Drone
              </a>

              <a href="#marketing" onClick={closeMenu}>
                Digital Marketing
              </a>

              <a href="#admissions" onClick={closeMenu}>
                Admissions
              </a>

              <a href="#events" onClick={closeMenu}>
                Events
              </a>
            </div>
          </div>

          <a
            href="#portfolio"
            onClick={closeMenu}
          >
            PORTFOLIO
          </a>

          {/* BLOG */}
          <div className="nav-dropdown">
            <button type="button">
              BLOG <span>⌄</span>
            </button>

            <div className="dropdown-glass">
              <a href="#stories" onClick={closeMenu}>
                Stories
              </a>

              <a href="#journal" onClick={closeMenu}>
                Journal
              </a>
            </div>
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            CONTACT
          </a>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            LET&apos;S TALK
          </a>
        </nav>
      </header>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="site">

        {/* =======================================================
            HERO
        ======================================================= */}

        <section
          className="hero"
          id="home"
        >
          {/* CINEMATIC BACKGROUND */}

          <div className="hero-background">
            <div className="gold-orb orb-one" />
            <div className="gold-orb orb-two" />
            <div className="gold-orb orb-three" />

            <div className="dust dust-one" />
            <div className="dust dust-two" />
            <div className="dust dust-three" />
            <div className="dust dust-four" />
            <div className="dust dust-five" />
          </div>

          <div className="hero-vignette" />

          {/* =====================================================
              HERO BRAND
          ===================================================== */}

          <div className="hero-brand">
            <div className="logo-row">
              <span className="logo-letter">
                A
              </span>

              <span className="logo-letter">
                R
              </span>

              <span className="logo-letter">
                T
              </span>

              <span className="logo-letter">
                I
              </span>

              <span className="logo-letter">
                Z
              </span>

              {/* CAMERA LENS O */}

              <span className="camera-lens-wrap">
                <span className="camera-lens">
                  <span className="lens-ring ring-one" />
                  <span className="lens-ring ring-two" />
                  <span className="lens-ring ring-three" />

                  <span className="lens-glass">
                    <span className="lens-aperture" />
                    <span className="lens-reflection" />
                  </span>

                  <span className="lens-highlight" />
                </span>
              </span>
            </div>

            {/* SPARKS ONLY — NO LIGHTNING */}

            <span className="spark spark-one" />
            <span className="spark spark-two" />
            <span className="spark spark-three" />
            <span className="spark spark-four" />
            <span className="spark spark-five" />
            <span className="spark spark-six" />

            {/* TAGLINE */}

            <div className="tagline">
              <span />
              FRAME YOUR VISION
              <span />
            </div>

            <div className="logo-ornament">
              ◆
            </div>
          </div>

          {/* =====================================================
              HERO BUTTONS
          ===================================================== */}

          <div className="hero-actions">
            <a
              href="#contact"
              className="hero-button primary"
            >
              START YOUR PROJECT <span>→</span>
            </a>

            <a
              href="#portfolio"
              className="hero-button secondary"
            >
              VIEW PORTFOLIO
            </a>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div className="service-buttons">
            <a href="#wedding">
              <span className="service-icon">▣</span>
              <span>WEDDING</span>
            </a>

            <a href="#films">
              <span className="service-icon">▣</span>
              <span>FILMS</span>
            </a>

            <a href="#drone">
              <span className="service-icon">♜</span>
              <span>DRONE</span>
            </a>

            <a href="#marketing">
              <span className="service-icon">◆</span>
              <span>MARKETING</span>
            </a>

            <a href="#admissions">
              <span className="service-icon">◆</span>
              <span>ADMISSIONS</span>
            </a>

            <a href="#events">
              <span className="service-icon">✦</span>
              <span>EVENTS</span>
            </a>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div className="stats">
            <div>
              <strong>250+</strong>
              <span>PROJECTS</span>
            </div>

            <div>
              <strong>80+</strong>
              <span>BRANDS</span>
            </div>

            <div>
              <strong>35+</strong>
              <span>CAMPAIGNS</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>SATISFACTION</span>
            </div>
          </div>

          {/* SCROLL */}

          <div className="scroll">
            <div className="mouse">
              <span />
            </div>

            <small>SCROLL</small>

            <b>•</b>
          </div>
        </section>

        {/* =======================================================
            ABOUT
        ======================================================= */}

        <section
          id="about"
          className="content-section"
        >
          <div className="section-inner">
            <span className="section-kicker">
              ABOUT ARTIZO
            </span>

            <h2>
              WE FRAME
              <br />
              <span>YOUR VISION.</span>
            </h2>

            <p>
              ARTIZO is a creative studio built around
              cinematic storytelling, visual production,
              branding and digital experiences.
            </p>
          </div>
        </section>

        {/* =======================================================
            SERVICES
        ======================================================= */}

        <section
          id="services"
          className="services-section"
        >
          <div className="section-inner">
            <span className="section-kicker">
              OUR SERVICES
            </span>

            <h2>
              CREATIVE
              <br />
              <span>SERVICES.</span>
            </h2>

            <div className="service-grid">

              <article id="wedding">
                <span>01</span>
                <h3>WEDDING</h3>
                <p>
                  Cinematic wedding photography
                  and storytelling.
                </p>
              </article>

              <article id="films">
                <span>02</span>
                <h3>CINEMATIC FILMS</h3>
                <p>
                  Powerful films designed to
                  tell unforgettable stories.
                </p>
              </article>

              <article id="drone">
                <span>03</span>
                <h3>DRONE</h3>
                <p>
                  Aerial visuals that add another
                  dimension to your story.
                </p>
              </article>

              <article id="marketing">
                <span>04</span>
                <h3>DIGITAL MARKETING</h3>
                <p>
                  Creative campaigns and digital
                  strategies for modern brands.
                </p>
              </article>

              <article id="admissions">
                <span>05</span>
                <h3>ADMISSIONS</h3>
                <p>
                  Creative admission campaigns
                  and educational marketing.
                </p>
              </article>

              <article id="events">
                <span>06</span>
                <h3>EVENTS</h3>
                <p>
                  Complete visual coverage for
                  events and special occasions.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* =======================================================
            PORTFOLIO
        ======================================================= */}

        <section
          id="portfolio"
          className="content-section portfolio-section"
        >
          <div className="section-inner">
            <span className="section-kicker">
              SELECTED WORK
            </span>

            <h2>
              OUR
              <br />
              <span>PORTFOLIO.</span>
            </h2>

            <p>
              A selection of visual stories,
              campaigns and cinematic productions.
            </p>
          </div>
        </section>

        {/* =======================================================
            BLOG
        ======================================================= */}

        <section
          id="blog"
          className="blog-section"
        >
          <div className="section-inner">
            <span className="section-kicker">
              JOURNAL
            </span>

            <h2>
              STORIES &
              <br />
              <span>INSIGHTS.</span>
            </h2>

            <div className="blog-grid">
              <article id="stories">
                <span>STORY</span>
                <h3>Behind The Frame</h3>
                <p>
                  Discover the ideas and stories
                  behind our creative work.
                </p>
              </article>

              <article id="journal">
                <span>JOURNAL</span>
                <h3>Creative Journal</h3>
                <p>
                  Thoughts, techniques and inspiration
                  from the ARTIZO studio.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =======================================================
            ENQUIRY / CONTACT
        ======================================================= */}

        <section
          id="contact"
          className="enquiry-section"
        >
          <div className="enquiry-glow" />

          <div className="enquiry-container">

            {/* LEFT SIDE */}

            <div className="enquiry-intro">
              <span className="section-kicker">
                START A PROJECT
              </span>

              <h2>
                LET&apos;S CREATE
                <br />
                <span>SOMETHING GREAT.</span>
              </h2>

              <p>
                Tell us about your project and
                our team will get back to you.
              </p>

              <div className="whatsapp-note">
                <div className="whatsapp-icon">
                  ☎
                </div>

                <div>
                  <strong>
                    QUICK ENQUIRY
                  </strong>

                  <span>
                    Your enquiry will open directly
                    in WhatsApp.
                  </span>
                </div>
              </div>
            </div>

            {/* FORM */}

            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    YOUR NAME *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    PHONE *
                  </label>
<input
  id="phone"
  name="phone"
  type="tel"
  placeholder="Enter your phone number"
  value={formData.phone}
  onChange={handleChange}
  pattern="[0-9+\-\s()]{10,}"
  required
/>
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">
                    SERVICE *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Wedding">
                      Wedding
                    </option>

                    <option value="Cinematic Films">
                      Cinematic Films
                    </option>

                    <option value="Drone">
                      Drone
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="Admissions">
                      Admissions
                    </option>

                    <option value="Events">
                      Events
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="date">
                  PREFERRED DATE
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  TELL US ABOUT YOUR PROJECT
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                className="submit-button"
                type="submit"
              >
                SEND ENQUIRY ON WHATSAPP
                <span>→</span>
              </button>

              <small className="form-note">
                By submitting this form, WhatsApp
                will open with your enquiry details.
              </small>
            </form>

          </div>
        </section>

        {/* =======================================================
            FOOTER
        ======================================================= */}

        <footer className="footer">
          <div className="footer-brand">
            <strong>ARTIZO</strong>
            <span>FRAME YOUR VISION</span>
          </div>

          <p>
            © {new Date().getFullYear()} ARTIZO.
            All rights reserved.
          </p>

          <a href="#home">
            BACK TO TOP ↑
          </a>
        </footer>

      </main>
    </>
  );
}