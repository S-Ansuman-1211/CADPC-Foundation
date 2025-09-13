import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Check, Users, HandHeart, Info } from "lucide-react"

export default function Contact() {
  const [submitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-300">
          <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
            <Check className="h-8 w-8 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-700 mb-6">
            You've been redirected to our contact form. We'll get back to you within 2 business days.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-gradient-to-r from-gray-700 to-black text-white rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/IMG-20250810-WA0019.jpg')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30, 30, 30, 0.6)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions about our work? Want to volunteer, sponsor a player, or collaborate on inclusive initiatives?
            We'd love to connect and explore how we can create impact—together.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Send className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Form</h3>
              <p className="text-gray-700 mb-8">
                Click below to access our contact form and send us your message. We'll respond to all inquiries within
                24 hours.
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 transition-all duration-200 shadow-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      CADPC Foundation
                      <br />
                      Panchsheel Enclave, New Delhi - 110017
                      <br />
                      (Include full address if applicable)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">cadpcfoundation@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href="/volunteer"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 border border-gray-300"
                >
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Become a Volunteer</span>
                </a>
                <a
                  href="/donate"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 border border-gray-300"
                >
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-full">
                    <HandHeart className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Make a Donation</span>
                </a>
                <a
                  href="/about"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 border border-gray-300"
                >
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-full">
                    <Info className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Learn About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Come see where the magic happens and meet our team in person.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">
            <div className="relative h-96">
              <img
                src="/IMG-20250810-WA0041.jpg"
                alt="Chess training area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-sm text-gray-700 bg-white/80 px-3 py-1 rounded-full font-medium">
                  Where chess magic happens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
