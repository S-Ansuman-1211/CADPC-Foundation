import { HandHeart, Crosshair, Lightbulb, Users, Accessibility, Crown, Zap, UserCheck } from "lucide-react"


export default function About() {

  const images = [
    "/IMG-20250810-WA0021.jpg",
    "/IMG-20250810-WA0017.jpg",
    "/IMG-20250810-WA0018.jpg",
    "/IMG-20250810-WA0019.jpg",
    "/IMG-20250810-WA0020.jpg",
    "/img4.jpeg",
    "/IMG-20250810-WA0023.jpg",
    "/IMG-20250810-WA0024.jpg",
    "/IMG-20250810-WA0025.jpg",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <img
          src="/img1.jpeg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 26, 26, 0.6)" }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="block bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
              CADPC Foundation
            </span>
          </h1>
          <h3 className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            CADPC Foundation was born out of a simple act of support—helping a young physically challenged chess player named Vaibhav pursue his passion. That small gesture sparked a larger movement.
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Founded on a simple act of kindness for a young player named Vaibhav, CADPC has grown into a powerful movement—supporting players across India with training, sponsorship, advocacy, and inclusive tournaments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  What began as a mission to support one child's love for chess has become a vibrant community. CADPC
                  Foundation now unites volunteers, players, and supporters committed to ensuring that no one is left
                  behind due to physical challenges.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/IMG-20250810-WA0021.jpg"
                alt="Community gathering"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our approach to creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-6 shadow-lg">
                <Crosshair className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To promote inclusivity and equal opportunity in the world of chess by enabling physically challenged
                individuals to participate fully—on and off the board. Every move matters.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-6 shadow-lg">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A future where chess is a powerful bridge—connecting abilities, breaking barriers, and building confidence in every player, regardless of their physical limitations.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mb-6 shadow-lg">
                <Accessibility className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Compassion, integrity, respect, and transparency guide our work. We believe in community-led solutions,
                cultural sensitivity, and sustainable development practices. Every game is a lesson in these values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real numbers that represent real lives changed and communities empowered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mx-auto mb-4 shadow-lg">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-700 mb-2">50K+</h3>
              <p className="text-gray-700 font-medium">Tournaments Supported</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mx-auto mb-4 shadow-lg">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-700 mb-2">25</h3>
              <p className="text-gray-700 font-medium">Players Benefitted</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mx-auto mb-4 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-700 mb-2">200+</h3>
              <p className="text-gray-700 font-medium">Volunteer Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full w-fit mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-700 mb-2">1000+</h3>
              <p className="text-gray-700 font-medium">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey in Frames Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey in Frames</h2>
            <p className="text-lg text-gray-700 mt-4">Witness the moments that define our mission and the faces we've helped empower.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div key={i} className="relative rounded-xl shadow-lg overflow-hidden group aspect-w-16 aspect-h-9">
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #4b5563 0%, #6b7280 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you choose to volunteer, donate, or simply spread awareness, you become part of a global community
            working toward positive change.
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
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}