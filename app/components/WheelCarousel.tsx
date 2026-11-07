'use client'

import { useState } from 'react'
import Image from 'next/image'
import { photos, type Photo } from '../lib/photos'

// Home-page photos only (photos may repeat within the home page, never across pages)
const wheelPhotos: Photo[] = [
  photos.peekingTogether,
  photos.kidsWithToys,
  photos.pointingAndSmiling,
  photos.braidedHair,
  photos.siblingsInStripes,
  photos.twoInSun,
  photos.embracingOnRoad,
  photos.closeSmile,
  photos.schoolBus,
  photos.sunlitSmile,
  photos.hillsideGroup,
  photos.armInArm,
  photos.brightClothes,
  photos.portraitGrin,
  photos.nightPortrait,
  photos.schoolCrowd,
]

const step = 360 / wheelPhotos.length

// Photos placed around a large circle; only its top shows, as an arc across the hero.
// The circle turns continuously so photos travel along the arc; the arrows nudge it one
// photo at a time and the pause button stops it. Motion is skipped for reduced-motion users.
export default function WheelCarousel() {
  const [offset, setOffset] = useState(0)
  const [paused, setPaused] = useState(false)

  return (
    <div className="group relative h-full w-full [--card-h:195px] [--card-w:155px] [--r:600px] sm:[--card-h:250px] sm:[--card-w:200px] sm:[--r:820px] md:[--card-h:330px] md:[--card-w:265px] md:[--r:1080px]">
      {/* Outer layer: arrow nudges (animated). Inner layer: continuous slow spin */}
      <div
        className="absolute left-1/2 top-4 h-[calc(var(--r)*2)] w-[calc(var(--r)*2)] transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-50%) rotate(${offset}deg)` }}
      >
        <ul className="wheel-spin absolute inset-0" data-paused={paused}>
          {wheelPhotos.map((photo, i) => (
            <li
              key={photo.src}
              className="absolute left-1/2 top-1/2 h-[var(--card-h)] w-[var(--card-w)]"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * step}deg) translateY(calc(var(--r) * -1 + var(--card-h)))`,
                transformOrigin: '50% 100%',
              }}
            >
              <div className="relative h-full w-full overflow-hidden border-4 border-white shadow-2xl md:border-[6px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 265px, (min-width: 640px) 200px, 155px"
                  className="object-cover"
                  priority={i < 3 || i > wheelPhotos.length - 3}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setOffset((o) => o + step)}
        className="absolute left-3 top-[calc(var(--card-h)*0.9)] z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 md:left-8 md:h-14 md:w-14"
        aria-label="Previous photos"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play photo carousel" : "Pause photo carousel"}
        className="absolute right-4 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 md:right-8"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          {paused ? <path d="M7 4l13 8-13 8z" /> : <path d="M6 4h4v16H6zM14 4h4v16h-4z" />}
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setOffset((o) => o - step)}
        className="absolute right-3 top-[calc(var(--card-h)*0.9)] z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 md:right-8 md:h-14 md:w-14"
        aria-label="Next photos"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
