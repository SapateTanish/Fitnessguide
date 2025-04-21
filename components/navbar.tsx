"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Exercises", href: "/exercises" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Progress Tracker", href: "/progress" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 h-20 flex items-center justify-between px-4 md:px-10 lg:px-[360px] transition-colors duration-300">
        <Link href="/" className="font-heading text-2xl font-bold text-accent dark:text-blue-400">
          Fitness Guide
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-blue-400 hover:underline transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Area - Includes Button and potentially Toggle */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          className="text-gray-700 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 border-b shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 hover:text-accent dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
