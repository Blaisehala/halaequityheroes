'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ImageData {
  src: string
  alt: string
}

const images: ImageData[] = [
  { src: '/images/hero1.jpg', alt: 'Child with caregiver' },
  { src: '/images/hero2.jpg', alt: 'Mother and child' },
  { src: '/images/hero3.jpg', alt: 'Happy children' },
  { src: '/images/hero4.jpg', alt: 'Volunteer and child' },
  { src: '/images/hero5.jpg', alt: 'Smiling child' }
]

// Desktop positions - curved arc (no overlay blocking!)
const desktopPositions = [
  { x: '8%', y: '5%', rotation: -18, scale: 0.85 },
  { x: '22%', y: '0%', rotation: -10, scale: 0.9 },
  { x: '42%', y: '-2%', rotation: 0, scale: 1 },
  { x: '62%', y: '0%', rotation: 10, scale: 0.9 },
  { x: '78%', y: '8%', rotation: 18, scale: 0.85 }
]

// Mobile positions - spread vertically to fill space
const mobilePositions = [
  { x: '8%', y: '5%', rotation: -8, scale: 0.9 },
  { x: '28%', y: '15%', rotation: -3, scale: 0.95 },
  { x: '48%', y: '25%', rotation: 0, scale: 1 },
  { x: '68%', y: '35%', rotation: 3, scale: 0.95 },
  { x: '88%', y: '45%', rotation: 8, scale: 0.9 }
]

export default function CurvedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const rotateImages = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    } else {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }
  }

  const getVisibleImages = () => {
    const positions = isMobile ? mobilePositions : desktopPositions
    return positions.map((pos, index) => {
      const imageIndex = (currentIndex + index) % images.length
      return {
        ...images[imageIndex],
        ...pos,
        key: `${currentIndex}-${index}`
      }
    })
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="sync">
        {getVisibleImages().map((img) => (
          <motion.div
            key={img.key}
            className="absolute w-[140px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[280px] md:h-[320px] cursor-pointer"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: img.scale,
              left: img.x,
              top: img.y,
              rotate: img.rotation,
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => rotateImages('right')}
          >
            <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden border-4 md:border-[6px] border-white/95 hover:border-emerald-400/90 transition-colors duration-300">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 280px"
                priority
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => rotateImages('left')}
        className="absolute left-2 sm:left-4 md:left-8 top-[45%] md:top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/80 bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={() => rotateImages('right')}
        className="absolute right-2 sm:right-4 md:right-8 top-[45%] md:top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/80 bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}