import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Resume", "About", "Services", "Contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          window.scrollY >= section.offsetTop - 50 &&
          window.scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="font-bold text-xl">Olamilekan</h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {["Resume", "About", "Services", "Contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-6 py-3 rounded-lg transition duration-300 ease-in-out ${
                  activeSection === section
                    ? "text-blue-700 font-bold"
                    : "text-blue-700"
                } hover:text-blue-700 bg-white hover:bg-blue-700 `}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-700"
            onClick={() => setIsOpen(true)}
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Transparent backdrop (fixed black background issue) */}
        <div className="fixed inset-0 bg-transparent" />

        {/* Sidebar Menu */}
        <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white shadow-lg p-6 transition-transform transform translate-x-0">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Mobile Menu Links */}
          <div className="mt-6 space-y-4">
            {["Resume", "About", "Services", "Contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left text-lg px-6 py-3 rounded-lg transition duration-300 ease-in-out bg-white-700 ${
                  activeSection === section ? "text-blue-700 font-bold" : "text-gray-700"
                } hover:text-white bg-blue-700`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </Dialog>
    </nav>
  );
}
