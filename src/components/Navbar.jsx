import { useState, useEffect } from "react";
import { LINKS } from "../constants";
import { RiCloseFill } from "@remixicon/react";
import { RiMenu3Fill } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(LINKS[0].href); // Set the default active link

  const handleLinkClick = (href) => {
    setMenuOpen(false);

    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to check which section is in view
  const handleScroll = () => {
    const sections = LINKS.map(link => document.querySelector(link.href));
    const scrollPos = window.scrollY;

    sections.forEach(section => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveLink(`#${section.id}`);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-black/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/" className="flex justify-center">
            <h6 className="hover:text-[#8e50ff] transition duration-300">W3B</h6>
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className={`text-white text-lg font-serif transition duration-300 ${
                activeLink === link.href ? "underline" : "hover:text-[#8e50ff]"
              }`}
              onClick={() => handleLinkClick(link.href)} // Call handleLinkClick
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className={`text-white transition duration-300 ${
                activeLink === link.href ? "underline" : "hover:text-[#8e50ff]"
              }`}
              onClick={() => handleLinkClick(link.href)} // Call handleLinkClick
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
