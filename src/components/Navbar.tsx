import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PRIZE POOL", href: "#prizes" },
    { label: "THEME", href: "#themes-section" },
    { label: "EVENT SPONSORS", href: "#sponsors" },
    { label: "EVENT COORDINATORS", href: "#coordinators" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // If near the top (Hero section), no nav link should be active
      if (window.scrollY < 300) {
        setActiveHash("");
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          if (scrollPosition >= top) {
            setActiveHash(navItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveHash(href);
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setActiveHash("");
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`navbar ${isOpen ? "nav-open" : ""}`} id="mainNavbar">
      <div className="logo" onClick={handleLogoClick}>
        <img src="images/logo.webp" alt="VYNORAE Logo" className="logo-img" />
        <span className="logo-text">VYNORAE</span>
      </div>

      <button
        className="nav-hamburger"
        id="navHamburger"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className="nav-links" id="navLinks">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`nav-link ${activeHash === item.href ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
