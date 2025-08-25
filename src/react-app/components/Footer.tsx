import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300">
                <img
                  src="/cadpc-logo.jpg"
                  alt="CADPC Foundation Logo"
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-100">CADPC Foundation</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building a better future together through community empowerment, sustainable development, and
              compassionate action in the world of chess.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteer"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Make a Donation
                </a>
              </li>
              <li>
                <Link
                  to="/volunteer"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Partner with Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gray-100 transition-colors hover:translate-x-1 transform duration-300 block"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                {/* Added MapPin icon */}
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">CADPC Foundation Panchsheel Enclave, New Delhi - 110017</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* Added Phone icon */}
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* Added Mail icon */}
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">cadpcfoundation@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CADPC Foundation. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-100 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100 text-sm transition-colors flex items-center">
                {/* Added Crown icon */}
                <MapPin className="h-4 w-4 mr-1" />
                MADE by JYOTI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
