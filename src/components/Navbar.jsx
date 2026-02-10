import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/p-icon.ico";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between py-6 relative z-20">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center transition-all duration-300 hover:[filter:drop-shadow(0_0_0.8em_#a7f3d0)]">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={32} alt="logo" />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex">
        <a href="#technologies" className="mx-4 hover:text-emerald-400 transition">Technologies</a>
        <a href="#projects" className="mx-4 hover:text-emerald-400 transition">Projects</a>
        <a href="#experience" className="mx-4 hover:text-emerald-400 transition">Experience</a>
        <a href="#contact" className="mx-4 hover:text-emerald-400 transition">Contact</a>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex m-8  items-center justify-center gap-4 text-2xl">
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <a href="https://www.linkedin.com/in/pedro-monteiro-3173b8241/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <a href="https://github.com/PedroMJK" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Menu" className="text-2xl text-stone-300">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 transform transition-transform duration-300 z-30
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-between h-full p-6">
          {/* Links */}
          <div className="flex flex-col space-y-2 mt-10 ">
            <a href="#technologies" onClick={() => setIsOpen(false)} className="text-xl text-stone-300  transition hover:bg-emerald-800 rounded p-2">
              Technologies
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl text-stone-300  transition hover:bg-emerald-800 rounded p-2">
              Projects
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-xl text-stone-300  transition hover:bg-emerald-800 rounded p-2">
              Experience
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl text-stone-300  transition hover:bg-emerald-800 rounded p-2">
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-between gap-6 text-3xl m-4 mt-10">
            <a href="https://www.linkedin.com/in/pedro-monteiro-3173b8241/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/PedroMJK" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-400 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
