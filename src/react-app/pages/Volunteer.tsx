"use client"

import { useState } from "react"
import {
  Users,
  HandHeart,
  Globe,
  Clock,
  MapPin,
  Mail,
  Check,
  Award,
  Heart,
  BookOpen,
  MessageSquare,
  Calendar,
  Megaphone,
  FileText,
  Target,
} from "lucide-react"

const volunteerOpportunities = [
  {
    title: "Chess Mentors & Trainers",
    description:
      "Support players with physical disabilities by coaching, sparring, or providing motivation and guidance.",
    icon: Award,
    commitment: "4-6 hours per week",
    location: "Local communities",
    skills: "Chess knowledge, patience, encouragement",
  },
  {
    title: "Social Media & Content Creators",
    description: "Help us tell stories, grow our presence, and raise awareness through social media and design.",
    icon: MessageSquare,
    commitment: "6-8 hours per week",
    location: "Field locations",
    skills: "Writing, design, content strategy",
  },
  {
    title: "Event & Tournament Volunteers",
    description: "Assist in organizing inclusive tournaments—set-up, registration, and player support.",
    icon: Calendar,
    commitment: "3-5 hours per week",
    location: "Office or remote",
    skills: "Coordination, crowd management, hospitality",
  },
  {
    title: "Admin & Logistics Support",
    description: "Help manage data, registrations, or communication between volunteers, coaches, and players.",
    icon: FileText,
    commitment: "5-7 hours per week",
    location: "Various communities",
    skills: "Organizing skills, documentation",
  },
  {
    title: "Outreach & Awareness",
    description: "Engage schools, NGOs, and communities to promote inclusive chess opportunities.",
    icon: Megaphone,
    commitment: "Event-based",
    location: "Various venues",
    skills: "Public speaking, networking",
  },
  {
    title: "Social Media & Communications",
    description: "Create content and manage our social media presence and communications.",
    icon: Globe,
    commitment: "3-4 hours per week",
    location: "Remote",
    skills: "Social media, writing, design",
  },
]

export default function Volunteer() {
  const [submitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-300">
          <div className="bg-gray-100 p-4 rounded-full w-fit mx-auto mb-6">
            <Check className="h-8 w-8 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6">
            You've been redirected to our volunteer application form. We'll review your information and get back to you
            within 5 business days.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full hover:from-gray-700 hover:to-gray-900 transition-all duration-200"
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
      <section
        className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20 bg-cover bg-center"
                  style={{ backgroundImage: "url(/IMG-20250810-WA0016.jpg)" }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30, 30, 30, 0.6)" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="block bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              Volunteer Family
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Make a real difference by supporting specially-abled chess players. Our volunteers are the heart of CADPC
            Foundation—bringing passion, empathy, and dedication to every move we make.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Help differently-abled chess players access tournaments, training, and opportunities they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Make Real Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Every hour you contribute directly supports a player's journey toward confidence and achievement.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Become part of a diverse, inclusive group committed to empowerment through chess.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn & Grow</h3>
              <p className="text-gray-700 leading-relaxed">
                Develop new skills, gain experience, and expand your network while making a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300"
                >
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{opportunity.description}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{opportunity.skills}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to make a difference? Here's how to begin your volunteer journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Reach out to discuss your interests and how you'd like to contribute.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Orientation</h3>
              <p className="text-gray-700 leading-relaxed">
                We'll provide training and introduce you to our community and processes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Start Contributing</h3>
              <p className="text-gray-700 leading-relaxed">
                Begin making a difference in the lives of chess players with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #4b5563 0%, #6b7280 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join our volunteer family and help us create a more inclusive world through chess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-800 transition-all duration-200"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-800 bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
