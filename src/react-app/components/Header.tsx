"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, HandHeart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Team", href: "/team" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black shadow-2xl sticky top-0 z-50 border-b-2 border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-1 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border-2 border-gray-300">
              <img
                src="/cadpc-logo.jpg"
                alt="CADPC Foundation Logo"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              CADPC Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-all duration-300 hover:text-gray-200 relative ${
                  isActive(item.href)
                    ? "text-gray-200 border-b-2 border-gray-400 pb-1"
                    : "text-gray-300 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button */}
          <a
            href="/donate"
            className="hidden md:inline-flex items-center px-6 py-3 border-2 border-gray-300 text-sm font-semibold rounded-full text-gray-900 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <HandHeart className="mr-2 h-4 w-4" />
            Donate Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-gray-200 hover:bg-gray-800/50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4 bg-gray-800/20 rounded-lg mt-2">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-gray-200 bg-gray-800/30 border-l-4 border-gray-400"
                      : "text-gray-300 hover:text-gray-200 hover:bg-gray-800/30"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 text-sm font-semibold rounded-full text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-lg"
              >
                <HandHeart className="mr-2 h-4 w-4 inline" />
                Donate Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
