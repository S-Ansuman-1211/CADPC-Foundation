import { HandHeart, Trophy, Globe, Users, Leaf, GraduationCap, Megaphone } from "lucide-react"

const projects = [
  {
    title: "Inclusive Chess Tournaments",
    description:
      "We organize accessible, inclusive chess tournaments where physically challenged players can compete with dignity and confidence.",
    icon: Trophy,
    image: "/IMG-20250810-WA0022.jpg",
    stats: { beneficiaries: "15K+", locations: "12 Countries" },
    color: "from-gray-600/50 to-gray-800/50",
  },
  {
    title: "Coaching & Mentorship",
    description:
      "From one-on-one coaching to group mentorship by volunteers, we ensure every aspiring player gets the guidance they need.",
    icon: GraduationCap,
    image: "/IMG-20250810-WA0023.jpg",
    stats: { beneficiaries: "25K+", locations: "8 Countries" },
    color: "from-gray-600/50 to-gray-800/50",
  },
  {
    title: "Sponsorship & Travel Support",
    description:
      "We sponsor tournament fees, travel, and accommodation for players who otherwise can't afford to participate.",
    icon: Globe,
    image: "/img10.jpeg",
    stats: { beneficiaries: "30K+", locations: "15 Countries" },
    color: "from-gray-600/50 to-gray-800/50",
  },
  {
    title: " Awareness & Advocacy",
    description:
      "By engaging with schools, chess bodies, and media, we're spreading awareness and pushing for systemic inclusion.",
    icon: Megaphone,
    image: "/img4.jpeg",
    stats: { beneficiaries: "10K+", locations: "6 Countries" },
    color: "from-gray-600/50 to-gray-800/50",
  },
]

export default function Work() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20 relative"
        style={{
          backgroundImage: "url(/IMG-20250810-WA0028.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30, 30, 30, 0.4)" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              Work & Impact
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Through focused initiatives, strategic support, and inclusive programs, we're enabling differently-abled
            individuals to thrive through the game of chess. Every step we take is designed to create lasting change—on
            and off the board.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We work across multiple dimensions to remove barriers and open doors for specially-abled chess players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-110 contrast-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full border border-white/20">
                        <IconComponent className="h-6 w-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-semibold text-gray-600">{project.stats.beneficiaries}</span>
                        <span className="text-gray-600 ml-1">Beneficiaries</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">{project.stats.locations}</span>
                        <span className="text-gray-600 ml-1">Locations</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Spotlight */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Spotlight</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">All-Inclusive Chess Open</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Held in Delhi, the All-Inclusive Chess Open was a pioneering event with ramps, accessible seating, and
                  inclusive pairing systems—welcoming over 150 players of all abilities. The event received national
                  recognition and set a benchmark for accessible tournament design.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
                  <div className="text-2xl font-bold text-gray-600">150+</div>
                  <div className="text-sm text-gray-700">Participants</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
                  <div className="text-2xl font-bold text-gray-600">100%</div>
                  <div className="text-sm text-gray-700">Accessible Venues</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
                  <div className="text-2xl font-bold text-gray-600">12</div>
                  <div className="text-sm text-gray-700">NGOs & Chess Bodies Collaborated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img6.jpeg"
                alt="Children in classroom"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our approach is community-centered, sustainable, and designed for long-term impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Led</h3>
              <p className="text-gray-700 leading-relaxed">
                We work hand-in-hand with families, coaches, and local leaders to ensure solutions are relevant and
                respectful.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable & Scalable</h3>
              <p className="text-gray-700 leading-relaxed">
                From mentorship models to tournament formats, we build programs that can be replicated across
                geographies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Network</h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with schools, chess federations, and disability organizations to create greater impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #4b5563 0%, #6b7280 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Support Our Work</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Your contribution helps a differently-abled child play their next tournament, receive expert coaching, or
            find their place in a larger community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-800 bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              <HandHeart className="mr-2 h-5 w-5" />
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-800 transition-all duration-200"
            >
              <Users className="mr-2 h-5 w-5" />
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
