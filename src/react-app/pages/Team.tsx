import { Mail, Linkedin, Users, Star, Award, Lightbulb, HandHeart } from "lucide-react"

// Static team data - no database needed
const teamMembers = [
  {
    id: 1,
    name: "Yamini Arora",
    role: "President",
    bio: "Founder and President of CADPC Foundation, Yamini leads with heart and purpose. As a mother to a young chess enthusiast, she started CADPC to eliminate barriers faced by specially-abled players, creating a space of equal opportunity.",
    image_url: "/main.jpg",
  },
  {
     id: 2,
    name: "Manoj Gautam",
    role: "Secretary",
    bio: "Inspired by his son Vaibhav—whose love for chess sparked the beginning of CADPC—Mr. Gautam dedicates his time to enabling similar players with physical disabilities to access the same opportunities.",
    image_url: "/team2.jpg",
  },
  {
   
     id: 3,
    name: "Surendra Singh Bisht",
    role: "Treasurer",
    bio: "Father of Sonu Bisht, a physically challenged chess player, Mr. Bisht brings firsthand understanding to his role. He ensures the foundation's resources are efficiently used to support talented individuals who need financial and emotional backing.",
    image_url: "/team3.jpg",
  },
  {
    id: 4,
    name: "Sushant Tiwari",
    role: "Joint Secretary",
    bio: "With a hands-on approach, Sushant plays a key role in managing logistics, event execution, and community coordination—ensuring smooth experiences for players, families, and volunteers.",
    image_url: "/team1.jpg",
  },
]
const youngLeaders = [
  {
    id: 1,
    name: "Ayan",
    role: "Young Leader – Volunteer Wing",
    bio: "A passionate young chess enthusiast who inspires peers with strategic thinking and dedication. As part of our Volunteer Wing, Eya brings his friends and community together to build an inclusive future through chess.",
    image_url: "/ayaan.jpg",
  },
];

export default function Team() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/IMG-20250810-WA0029.jpg')",
          }}
        ></div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30, 30, 30, 0.6)" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our
            <span className="block bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              Dedicated Team
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our committed team brings together lived experiences, professional passion, and a shared mission to empower
            differently-abled individuals through the game of chess. Each member plays a vital role in creating a more
            inclusive, opportunity-driven ecosystem.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-300 hover:scale-105"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image_url || "/Yamini.jpg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent group-hover:from-gray-800/90 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gray-200 font-medium text-lg">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">{member.bio}</p>
                  <div className="flex space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Young Generation Section */}
        <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Young Generation
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Where passion meets inclusion. Where every player finds a place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {youngLeaders.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-300 hover:scale-105"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={member.image_url || "/Yamini.jpg"}
                  alt={member.name}
                  className="w-full h-full object-cover object-center bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent group-hover:from-gray-800/90 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-200 font-medium text-lg">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">{member.bio}</p>
                <div className="flex space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                    <Mail className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our values shape every decision, every action, and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                We strive for excellence in everything we do, from tournament organization to player support.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Achievement</h3>
              <p className="text-gray-700 leading-relaxed">
                Celebrating every victory, big or small, as we build confidence and skills together.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                Finding creative solutions to make chess accessible to everyone, regardless of ability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #4b5563 0%, #6b7280 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We build strong partnerships—with families, volunteers, schools, and chess bodies—to create collective
            impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-800 transition-all duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </a>
            <a
              href="/donate"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-800 bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Donate Now
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
