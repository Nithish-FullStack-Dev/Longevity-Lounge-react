import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const navMenuRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Smooth scroll
  const handleNavClick = (id: string, label: string) => {
    setActiveItem(label);

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    if (window.innerWidth <= 768) closeMenu();
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <a href="#">
              <img src="/assets/images/logo.png" alt="Longevity Lounge Logo" />
            </a>
          </div>

          <button
            className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul
            ref={navMenuRef}
            className={`nav-menu ${menuOpen ? "active" : ""}`}
          >
            {[
              { label: "Home", id: "" },
              { label: "Our Services", id: "services" },
              { label: "Gallery", id: "gallery" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <li
                key={item.label}
                className={`nav-item ${
                  activeItem === item.label ? "active" : ""
                }`}
                onClick={() =>
                  item.id
                    ? handleNavClick(item.id, item.label)
                    : setActiveItem("Home")
                }
              >
                <a href={item.id ? `#${item.id}` : "#"}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className={`nav-cta ${menuOpen ? "active" : ""}`}>
            <button
              className="btn-enquire"
              onClick={() => navigate("/callback")}
            >
              Request Callback
            </button>

            <div className="follow-us">
              <h5>Social Media :</h5>
              <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        ref={overlayRef}
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
};

export default Navbar;
