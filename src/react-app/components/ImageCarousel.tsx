"use client"

import { useState, useEffect } from "react"

interface ImageCarouselProps {
  images: string[]
  autoSlideInterval?: number
  showNavigation?: boolean
  showIndicators?: boolean
  showTextOverlay?: boolean
}

export default function ImageCarousel({
  images,
  autoSlideInterval = 5000,
  showIndicators = true,
  showTextOverlay = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl border-2 border-gold-400/30">
      {/* Left Shadow Overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>

      {/* Right Shadow Overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Text Overlay and CTA Buttons */}
      {showTextOverlay && (
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 z-20 text-white max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-left">
            <span className="bg-gradient-to-r from-gold-400 to-yellow-300 bg-clip-text text-transparent">
              Empowering Through
            </span>
            <span className="block text-white">Discovery</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed text-left">
            Inclusive opportunities for differently-abled individuals to learn, compete, and grow through the game of
            chess.
          </p>
        </div>
      )}

      {/* Enhanced Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-gold-400/50 ${
                index === currentIndex
                  ? "bg-gold-400 scale-125 border-gold-400 shadow-lg shadow-gold-400/50"
                  : "bg-gold-400/30 hover:bg-gold-400/60 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
