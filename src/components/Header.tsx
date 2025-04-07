import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : "transparent"}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img
            src="/logov2.png"
            alt="Tatooine Networks"
            style={{ height: "100px", width: "auto" }}
          />
          <div className="flex  justify-center items-center flex-col">
            <span>Tatooine Networks</span>
            <p className="text-xs">GoToMarket as a service</p>
            <p className="text-xs">for Cyber vendors </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>

          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
