"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#bilan-form" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 md:px-40 pt-4 md:pt-8">
      <nav className="bg-white/80 backdrop-blur-md border border-gray-200 py-3 px-6 md:px-8 flex items-center rounded-full shadow-sm">
        <a href="#" className="text-blue text-xl md:text-2xl font-bold font-helvetica">
          MyBrand
        </a>

        {/* Desktop */}
        <ul className="ml-auto hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-700 font-medium font-poppins hover:text-blue transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#bilan-form"
              className="bg-blue text-white font-bold font-poppins text-sm py-2.5 px-6 rounded-full hover:bg-blue/90 transition-colors"
            >
              Commencer
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="ml-auto md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 animate-in fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 font-medium font-poppins text-lg hover:text-blue transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#bilan-form"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-blue text-white font-bold font-poppins py-3 rounded-full hover:bg-blue/90 transition-colors"
              >
                Commencer
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
