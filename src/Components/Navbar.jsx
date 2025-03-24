import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" : false
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Resume", "About", "Projects", "Contact"];
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

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    if (id === "Resume") {
      const resumeLink = document.getElementById("resume-download-link");
      if (resumeLink) {
        resumeLink.click();
      }
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="font-bold text-xl">Olamilekan</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {["Resume", "About", "Projects", "Contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`px-6 py-3 rounded-lg transition duration-300 ease-in-out ${
                activeSection === section
                  ? "text-blue-700 font-bold"
                  : "text-gray-900 dark:text-white"
              } hover:text-blue-700 dark:hover:text-blue-400`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-blue-700 dark:text-white" onClick={() => setIsOpen(true)}>
          <Bars3Icon className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-transparent" />
        <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white dark:bg-gray-800 shadow-lg p-6 transition-transform transform translate-x-0">
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-700 dark:text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Mobile Menu Links */}
          <div className="mt-6 space-y-4">
            {["Resume", "About", "Projects", "Contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left text-lg px-6 py-3 rounded-lg transition duration-300 ease-in-out ${
                  activeSection === section ? "text-blue-700 font-bold" : "text-gray-900 dark:text-white"
                } hover:text-blue-700 dark:hover:text-blue-400`}
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
