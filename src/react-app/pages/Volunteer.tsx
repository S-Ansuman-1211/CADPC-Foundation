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

      {/* How You Can Help Us */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.8)), url('/IMG-20250810-WA0020.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How You Can Help Us</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              At CADPC Foundation, every move counts – both on the chessboard and in life. Your support can transform
              the journey of physically challenged chess players, helping them pursue their passion, gain recognition,
              and build a dignified livelihood through the game they love.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">💙 Ways You Can Support</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-4 shadow-lg">
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">1. Donate</h4>
                <p className="text-gray-200 leading-relaxed">
                  Your contributions directly go towards training, equipment, travel, and tournament sponsorships for
                  specially-abled players. All donations are eligible for tax exemption under Section 80G.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-4 shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">2. Sponsor a Player or Event</h4>
                <p className="text-gray-200 leading-relaxed">
                  You can choose to support an individual player or sponsor a tournament. This not only gives players
                  financial security but also motivates them to achieve new heights.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-4 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">3. Partner With Us</h4>
                <p className="text-gray-200 leading-relaxed">
                  Are you an organization or corporate house? Partner with us for CSR initiatives. Together, we can create
                  impactful programs that open doors for talent and inclusivity.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-4 shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">4. Volunteer Your Time</h4>
                <p className="text-gray-200 leading-relaxed">
                  From mentoring and training to event management and digital support, your skills can make a difference. 
                  Even a few hours a month can change lives.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-4 shadow-lg">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">5. Spread the Word</h4>
                <p className="text-gray-200 leading-relaxed">
                  Help us reach more hearts and minds. Share our story on social media, invite friends to our events, 
                  and be a voice for inclusion in chess.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">🌟 Why Your Support Matters</h3>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Behind every move is a story of resilience. By supporting CADPC Foundation, you are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-gray-200 leading-relaxed">
                  <span className="text-white font-semibold">•</span> Empowering players to compete at state, national, and international levels.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-gray-200 leading-relaxed">
                  <span className="text-white font-semibold">•</span> Giving them financial independence through prize earnings.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-gray-200 leading-relaxed">
                  <span className="text-white font-semibold">•</span> Helping create an inclusive community where talent shines above limitations.
                </p>
              </div>
            </div>
            <p className="text-xl text-white font-semibold mb-8">
              Together, let's make the chessboard a space where ability is the only thing that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/donate"
                className="group inline-flex items-center px-10 py-5 border-2 border-gold-400 text-xl font-bold rounded-full text-gold-400 bg-gray-800/50 backdrop-blur-sm hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-2xl hover:shadow-gold-400/25 transform hover:scale-105"
              >
                <HandHeart className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Donate Now
              </a>
              <a
                href="https://docs.google.com/forms/d/1p3IwQOwo411K-7FRARnpmQYVO8z2U8s3lhDMyv5EhH8/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 border-2 border-white text-xl font-bold rounded-full text-white bg-gray-800/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
              >
                <Users className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Volunteer With Us
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center px-10 py-5 border-2 border-white text-xl font-bold rounded-full text-white bg-gray-800/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
              >
                <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
