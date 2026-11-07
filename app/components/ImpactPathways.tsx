'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Instrument_Serif } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
})

const pathways = [
  {
    id: 'child',
    title: 'Support a child',
    body: 'Help create moments of comfort, care, and opportunity.',
    href: '/get-involved',
  },
  {
    id: 'family',
    title: 'Support a family',
    body: 'Help families navigate the challenges that come with sickle cell.',
    href: '/get-involved',
  },
  {
    id: 'hero',
    title: 'Become a hero',
    body: 'Partner with Hala Equity Heroes through your time, skills, or resources.',
    href: '/volunteer',
  },
  {
    id: 'advocate',
    title: 'Learn & advocate',
    body: 'Help us create greater understanding around sickle cell.',
    href: '/stories',
  },
] as const

const collage = [
  {
    src: '/images/pexels-abril-paez-rosano-1170456433-21581705.jpg',
    alt: 'Two young children standing together on sandy ground under a blue sky',
    className:
      'z-20 w-[42%] left-[28%] top-[4%] rotate-[-7deg] sm:w-[38%]',
  },
  {
    src: '/images/pexels-atsahyel-aaron-243125759-13564632.jpg',
    alt: 'Two boys grinning arm in arm on a city street',
    className:
      'z-30 w-[46%] left-[8%] top-[32%] rotate-[6deg] sm:w-[40%] sm:left-[2%] sm:top-[30%]',
  },
  {
    src: '/images/pexels-dboyag-13019957.jpg',
    alt: 'Close-up of a smiling child',
    className:
      'z-40 w-[48%] right-[4%] top-[38%] rotate-[-4deg] sm:w-[44%] sm:right-[2%] sm:top-[34%]',
  },
  {
    src: '/images/pexels-jb-jorge-barreto-1459384-7192140.jpg',
    alt: 'Close-up of a grinning young boy',
    className:
      'z-20 w-[36%] left-[18%] bottom-[4%] rotate-[-11deg] sm:w-[32%] sm:left-[22%]',
  },
  {
    src: '/images/hero4.jpg',
    alt: 'Two boys in bright clothes laughing with their arms around each other',
    className:
      'z-10 w-[34%] right-[10%] bottom-[2%] rotate-[9deg] hidden sm:block sm:w-[30%]',
  },
]

export default function ImpactPathways() {
  const [selected, setSelected] = useState<(typeof pathways)[number]['id']>('child')
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const reduceMotion = useReducedMotion()
  const active = pathways.find((path) => path.id === selected) ?? pathways[0]

  const selectAt = (index: number) => {
    const path = pathways[index]
    if (!path) return
    setSelected(path.id)
    optionRefs.current[index]?.focus()
  }

  return (
    <section
      id="how-it-works"
      className="relative overflow-x-clip bg-brand-sky-tint py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6 xl:gap-10">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' }}
          className="relative z-10 max-w-xl"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-brand-navy/80">
            FOR CHILDREN LIVING BEYOND THE PAIN
          </p>

          <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.35rem]">
            Every Child Deserves
            <span
              className={`${instrumentSerif.className} mt-1 block text-[2.4rem] italic font-normal leading-[1.08] text-brand-navy sm:text-5xl lg:text-[3.55rem]`}
            >
              More Than a Diagnosis.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-brand-navy/75 sm:text-[15px]">
            Behind every sickle cell diagnosis is a child with dreams, a family
            carrying uncertainty, and a community that can choose to show up.
          </p>

          <div className="mt-10 max-w-md border border-brand-navy/10 bg-white p-4 shadow-[0_18px_50px_rgba(12,35,64,0.08)] sm:p-5">
            <h3
              id="pathways-heading"
              className="text-xs font-semibold tracking-[0.22em] text-brand-navy/80"
            >
              HOW WILL YOU SHOW UP?
            </h3>

            <div
              role="radiogroup"
              aria-labelledby="pathways-heading"
              className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2"
            >
              {pathways.map((path, index) => {
                const isSelected = path.id === selected
                return (
                  <button
                    key={path.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    ref={(el) => {
                      optionRefs.current[index] = el
                    }}
                    onClick={() => setSelected(path.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                        event.preventDefault()
                        selectAt((index + 1) % pathways.length)
                      }
                      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                        event.preventDefault()
                        selectAt((index - 1 + pathways.length) % pathways.length)
                      }
                    }}
                    className={`min-h-[92px] border px-3 py-3 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy ${
                      isSelected
                        ? 'border-brand-blue bg-brand-blue text-white'
                        : 'border-transparent bg-brand-sky-tint-deep text-brand-navy hover:bg-brand-sky-tint-deeper'
                    }`}
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                      {path.title}
                    </span>
                    <span
                      className={`mt-1.5 block text-[13px] leading-relaxed ${
                        isSelected ? 'text-white/90' : 'text-brand-navy/80'
                      }`}
                    >
                      {path.body}
                    </span>
                  </button>
                )
              })}
            </div>

            <Link
              href={active.href}
              aria-label={`Explore our impact: ${active.title}`}
              className="mt-4 flex min-h-12 w-full items-center justify-center bg-brand-blue px-4 text-sm font-bold tracking-[0.18em] text-white transition-colors duration-200 hover:bg-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              EXPLORE OUR IMPACT
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.12,
            ease: 'easeOut',
          }}
          className="relative min-h-[420px] w-full sm:min-h-[520px] lg:min-h-[640px]"
        >
          <div className="relative mx-auto h-[420px] w-full max-w-xl sm:h-[520px] lg:absolute lg:inset-0 lg:h-full lg:max-w-none">
            {collage.map((photo, index) => (
              <motion.figure
                key={photo.src}
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 16, rotate: 0 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.08 * index,
                  ease: 'easeOut',
                }}
                className={`absolute overflow-hidden bg-white p-[7px] pb-8 shadow-[0_16px_40px_rgba(28,40,60,0.16)] ${photo.className}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-sky-tint-deeper">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 22vw"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
