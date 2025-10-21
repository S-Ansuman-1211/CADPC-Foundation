// import { useState } from "react"
import { Link } from "react-router-dom"
import { Users, ArrowRight, /*IndianRupee*/ HandHeart, Lightbulb, Globe } from "lucide-react"
import ImageCarousel from "../components/ImageCarousel"

// interface Stats {
//   totalDonations: number
//   donorCount: number
//   volunteerCount: number
// }

export default function Home() {
  //  const [stats] = useState<Stats>({ totalDonations: 125000, donorCount: 1250, volunteerCount: 850 })

  // Chess-themed images for the carousel
  const chessImages = [
    "/IMG-20250810-WA0015.jpg",
    "/img7.jpeg",
    "/IMG-20250810-WA0020.jpg",
    "/IMG-20250810-WA0025.jpg",
    "/IMG-20250810-WA0027.jpg",
  ]

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section with Chess Background */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.7)), url('/chess theme.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-16">
            <img
              src="/img1.jpeg"
              alt="CADPC Foundation Team Achievement"
              className="mx-auto rounded-2xl shadow-2xl border-4 border-gold-400/50 max-w-6xl w-full h-[70vh] object-cover"
            />
          </div>

          {/* Chess Piece Icons Row */}
          <div className="flex justify-center space-x-8 mb-12 opacity-80">
            <div className="h-12 w-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">♔</span>
            </div>
            <div className="h-12 w-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">♕</span>
            </div>
            <div className="h-12 w-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">♖</span>
            </div>
            <div className="h-12 w-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">♗</span>
            </div>
            <div className="h-12 w-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">♘</span>
            </div>
            <div className="h-12 w-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">♙</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Welcome to</span>
            <span className="block bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-500 bg-clip-text text-transparent mt-4">
              CADPC Foundation
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gold-400 font-semibold">Where passion meets inclusion.</span>
            <br />
            <span className="text-white">Where every player finds a place.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-5 border-2 border-gold-400 text-xl font-bold rounded-full text-gold-400 bg-gray-800/50 backdrop-blur-sm hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-2xl hover:shadow-gold-400/25 transform hover:scale-105"
            >
              <HandHeart className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Donate Now
            </a>
            <Link
              to="/volunteer"
              className="group inline-flex items-center px-10 py-5 border-2 border-white text-xl font-bold rounded-full text-white bg-gray-800/50 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
            >
              <Users className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Volunteer With Us
            </Link>
          </div>

          {/* Certification Note */}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 italic">
            CADPC Foundation is a registered NGO with 12A & 80G certifications. All donations are tax-exempt under
            Section 80G of the Income Tax Act.
          </p>

          <div className="mt-16">
            <ImageCarousel
              images={chessImages}
              autoSlideInterval={4000}
              showIndicators={true}
              showTextOverlay={true}
            />
          </div>
        </div>
      </section>
        {/* Stats Section with Chess Board Pattern Background */}
      {/* <section
        className="py-20 relative"
                 style={{
           backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.85)), url('/chesstheme2.jpg')`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gold-400 mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real numbers that represent real lives changed and communities empowered through chess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gold-400/30 shadow-2xl hover:shadow-gold-400/20 transition-all duration-500 backdrop-blur-sm group hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gold-400 to-yellow-500 text-black rounded-full mb-6 shadow-2xl group-hover:shadow-gold-400/50 transition-all duration-500">
                <IndianRupee className="h-10 w-10" />
              </div>
              <h3 className="text-5xl font-bold text-gold-400 mb-2">
                ₹{Math.round(stats.totalDonations * 83).toLocaleString()}
              </h3>
              <p className="text-gray-300 font-medium text-lg">Total Donations Raised</p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gold-400/30 shadow-2xl hover:shadow-gold-400/20 transition-all duration-500 backdrop-blur-sm group hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gold-400 to-yellow-500 text-black rounded-full mb-6 shadow-2xl group-hover:shadow-gold-400/50 transition-all duration-500">
                <HandHeart className="h-10 w-10" />
              </div>
              <h3 className="text-5xl font-bold text-gold-400 mb-2">{stats.donorCount}</h3>
              <p className="text-gray-300 font-medium text-lg">Generous Donors</p>
            </div>
            <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-gold-400/30 shadow-2xl hover:shadow-gold-400/20 transition-all duration-500 backdrop-blur-sm group hover:scale-105">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gold-400 to-yellow-500 text-black rounded-full mb-6 shadow-2xl group-hover:shadow-gold-400/50 transition-all duration-500">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-5xl font-bold text-gold-400 mb-2">{stats.volunteerCount}</h3>
              <p className="text-gray-300 font-medium text-lg">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Mission Section with Chess Tournament Background */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.75), rgba(30, 30, 30, 0.8)), url('/IMG-20250810-WA0021.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gold-400 mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe in inclusivity, empowerment, and the unifying spirit of chess. Our mission is to enable
              physically challenged individuals to learn, play, and grow through chess—building confidence and breaking
              barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-3xl shadow-2xl hover:shadow-gold-400/20 transition-all duration-500 border border-gold-400/30 backdrop-blur-sm group hover:scale-105">
              <div className="bg-gradient-to-r from-gold-400 to-yellow-500 p-4 rounded-full w-fit mb-8 shadow-2xl group-hover:shadow-gold-400/50 transition-all duration-500">
                <Users className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-400 mb-6">Inclusive Community</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Building an ecosystem where everyone—regardless of physical ability—can enjoy chess. Every move counts
                in our inclusive community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-3xl shadow-2xl hover:shadow-gold-400/20 transition-all duration-500 border border-gold-400/30 backdrop-blur-sm group hover:scale-105">
              <div className="bg-gradient-to-r from-gold-400 to-yellow-500 p-4 rounded-full w-fit mb-8 shadow-2xl group-hover:shadow-gold-400/50 transition-all duration-500">
                <Globe className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-400 mb-6">Global Impact, Local Focus</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Sponsoring players, organizing accessible tournaments, and driving policy-level inclusion. We're making
                strategic moves for global change.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-10 rounded-3xl shadow-2xl hover:shadow-gold-400/20 transition-all duration-500 border border-gold-400/30 backdrop-blur-sm group hover:scale-105">
              <div className="bg-gradient-to-r from-gold-400 to-yellow-500 p-4 rounded-full w-fit mb-8 shadow-2xl group-hover:shadow-gold-400/50 transition-all duration-500">
                <Lightbulb className="h-10 w-10 text-black" />
              </div>
              <h3 className="text-3xl font-bold text-gold-400 mb-6">Empowerment Through Action</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                From mentorship to logistics support, we help our players succeed on and off the board. Every game is a
                victory for inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Chess Pieces Background */}
      <section
        className="py-20 relative"
        style={{
          background: "linear-gradient(135deg, #374151 0%, #4b5563 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-gold-400 mb-8">Ready to Make a Difference?</h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Whether through donation, volunteering, or spreading awareness, every action counts. Join our community of
            changemakers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/about"
              className="group inline-flex items-center px-10 py-5 border-2 border-gold-400 text-xl font-bold rounded-full text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-2xl hover:shadow-gold-400/25 transform hover:scale-105"
            >
              Learn More About Us
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center px-10 py-5 border-2 border-white text-xl font-bold rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

<a
  href="/donate"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center px-10 py-5 border-2 border-gold-400 text-xl font-bold rounded-full text-gold-400 bg-gray-800/50 backdrop-blur-sm hover:bg-gold-400 hover:text-black transition-all duration-300 shadow-2xl hover:shadow-gold-400/25 transform hover:scale-105"
>
  <HandHeart className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
  Donate Now
</a>
