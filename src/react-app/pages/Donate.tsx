import { Crown, Trophy, Globe, HandHeart, CreditCard, GraduationCap, Plane, Package } from "lucide-react"

export default function Donate() {
  const donationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdDddr3VrTkLJEn1sEZLLrwf_ueRiChVpE8rP4O8TMB3s8leg/viewform?usp=header"

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/chess theme.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Make a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Difference Today
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your donation directly supports differently-abled chess players, enabling them to participate in
            tournaments, receive training, and build confidence through the game they love.
          </p>
        </div>
      </section>

      {/* Impact Stories with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact in Action</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how your donations are transforming lives and creating opportunities for chess players with physical
              disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-300">
              <img
                src="/IMG-20250810-WA0041.jpg"
                alt="Chess tournament success"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tournament Success</h3>
                <p className="text-gray-700 mb-4">
                  Your donations help players compete in inclusive tournaments with dignity and confidence.
                </p>
                <div className="flex items-center text-gray-600">
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-300">
              <img
                src="/IMG-20250810-WA0042.jpg"
                alt="Training and mentorship"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  Expert coaching and guidance for aspiring chess players of all abilities.
                </p>
                <div className="flex items-center text-gray-600">
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-300">
              <img
                src="/IMG-20250810-WA0043.jpg"
                alt="Community building"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Building</h3>
                <p className="text-gray-700 mb-4">
                  Creating inclusive spaces where everyone can learn, grow, and connect through chess.
                </p>
                <div className="flex items-center text-gray-600">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Your Donations Help</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every contribution makes a real difference in the lives of chess players with disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tournament Fees</h3>
              <p className="text-gray-700 leading-relaxed">
                Covering entry fees for inclusive chess tournaments and competitions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training Programs</h3>
              <p className="text-gray-700 leading-relaxed">Funding expert coaching and skill development programs.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Assisting with transportation and accommodation for tournaments.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Equipment</h3>
              <p className="text-gray-700 leading-relaxed">Providing chess sets, boards, and adaptive equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How You Can Help Us</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At CADPC Foundation, every move counts – both on the chessboard and in life. Your support can transform
              the journey of physically challenged chess players, helping them pursue their passion, gain recognition,
              and build a dignified livelihood through the game they love.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300 group hover:scale-105">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <HandHeart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-700">
                Your contributions directly go towards training, equipment, travel, and tournament sponsorships for
                specially-abled players. All donations are eligible for tax exemption under Section 80G.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300 group hover:scale-105">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sponsor a Player or Event</h3>
              <p className="text-gray-700">
                You can choose to support an individual player or sponsor a tournament. This not only gives players
                financial security but also motivates them to achieve new heights.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300 group hover:scale-105">
              <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h3>
              <p className="text-gray-700">
                Are you an organization or corporate house? Partner with us for CSR initiatives. Together, we can create
                impactful programs that open doors for talent and inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donation Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
              <div className="text-center">
                <div className="bg-gradient-to-r from-gray-700 to-black p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Click the button below to access our secure donation form. You can choose your donation amount and
                  payment method. Every contribution, no matter the size, makes a meaningful impact.
                </p>
                <a
                  href={donationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <HandHeart className="mr-2 h-5 w-5" />
                  Donate Now
                </a>
              </div>
            </div>

            {/* UPI Payment Option */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick UPI Payment</h3>
                <p className="text-gray-700 mb-6">
                  Scan the QR code below to donate directly via any UPI app
                </p>
                <div className="flex justify-center mb-6">
                  <img 
                    src="/QRCODE.jpg" 
                    alt="UPI QR Code for CADPC Foundation" 
                    className="w-64 h-64 object-contain border-2 border-gray-200 rounded-lg shadow-md"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">UPI ID: cadpc718@kotak</p>
                <p className="text-sm text-gray-600">Pay using Google Pay, PhonePe, Paytm, or any UPI app</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}