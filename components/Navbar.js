"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Added "resume" section
const sections = ["skills", "projects", "resume","blog", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="navbar fixed top-3 left-0 w-full z-50 shadow-md transition bg-white" 
    style={{ backgroundImage: 'url("/skills/book.jpg")', 
    backgroundSize: 'cover',
     backgroundPosition: 'center' }}>

     <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 py-8">

        {/* Logo */}
        <h1 className="text-2xl font-semibold text-white">
          Ananya’s Portfolio
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 font-medium">
            {sections.map((id) => (
              <li key={id}>
                <a
  href={`#${id}`}
  className={`text-white !text-white transition ${
    activeSection === id ? "underline underline-offset-4" : ""
  } hover:text-gray-300`}
>
  {id.charAt(0).toUpperCase() + id.slice(1)}
</a>

              </li>
            ))}
           
          </ul>
        </nav>
      </div>
    </header>
  );
}


