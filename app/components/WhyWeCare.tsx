'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Instrument_Serif } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

const stories = [
  {
    id: 'children',
    label: 'CHILDREN',
    src: '/images/hero3.jpg',
    alt: 'Children sharing a bright, ordinary moment together',
    story:
      'Behind every sickle cell diagnosis is a child with a name, a laugh, and a future still being written.',
    href: '/stories',
  },
  {
    id: 'health',
    label: 'HEALTH',
    src: '/images/hero2.jpg',
    alt: 'A child with a caregiver during a moment of attentive care',
    story:
      'Access to steady care can mean fewer crises, more school days, and more room for a child to simply be a child.',
    href: '/stories',
  },
  {
    id: 'care',
    label: 'CARE',
    src: '/images/hero4.jpg',
    alt: 'A volunteer standing with a child in a supportive setting',
    story:
      'Living with sickle cell should never mean a child has to face it alone. Care is also presence, patience, and community.',
    href: '/get-involved',
  },
  {
    id: 'education',
    label: 'EDUCATION',
    src: '/images/hero1.jpg',
    alt: 'A child with a caregiver, ready for learning and everyday life',
    story:
      'When families understand the condition and schools know how to support, children can stay in class and keep their dreams in view.',
    href: '/stories',
  },
] as const

export default function WhyWeCare() {
  const [activeId, setActiveId] = useState<(typeof stories)[number]['id']>('children')
  const reduceMotion = useReducedMotion()
  const active = stories.find((story) => story.id === activeId) ?? stories[0]

  const fade = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' as const },
  }

  return (
    <section
      id="initiatives"
      className="relative bg-[#F6F1E8] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div {...fade} className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.32em] text-[#0c2340]/55">
            WHY WE CARE
          </p>
          <h2
            className={`${instrumentSerif.className} mx-auto mt-4 max-w-3xl text-[2.15rem] leading-[1.15] text-[#0c2340] sm:text-5xl lg:text-[3.4rem]`}
          >
            Because every child deserves
            <span className="block">the chance to thrive</span>
          </h2>
        </motion.div>

        <motion.div
          {...fade}
          transition={{
            ...fade.transition,
            delay: reduceMotion ? 0 : 0.08,
          }}
          className="mt-10 sm:mt-12"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-md">
              <div className="relative aspect-[16/10] min-h-[240px] w-full sm:min-h-[360px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.src}
                      alt={active.alt}
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      priority={active.id === 'children'}
                    />
                  </motion.div>
                </AnimatePresence>

                <div
                  role="tablist"
                  aria-label="Stories of children, health, care, and education"
                  className="absolute left-1/2 top-4 z-10 flex w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5 sm:top-5 sm:w-auto sm:gap-2"
                >
                  {stories.map((story) => {
                    const isActive = story.id === active.id
                    return (
                      <button
                        key={story.id}
                        type="button"
                        role="tab"
                        id={`story-tab-${story.id}`}
                        aria-selected={isActive}
                        aria-controls="story-panel"
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveId(story.id)}
                        onKeyDown={(event) => {
                          const index = stories.findIndex((item) => item.id === story.id)
                          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                            event.preventDefault()
                            const next = stories[(index + 1) % stories.length]
                            setActiveId(next.id)
                            document.getElementById(`story-tab-${next.id}`)?.focus()
                          }
                          if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                            event.preventDefault()
                            const prev =
                              stories[(index - 1 + stories.length) % stories.length]
                            setActiveId(prev.id)
                            document.getElementById(`story-tab-${prev.id}`)?.focus()
                          }
                        }}
                        className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c2340] sm:px-3 sm:text-[10px] ${
                          isActive
                            ? 'border-[#0c2340] bg-[#0c2340] text-white'
                            : 'border-white/70 bg-white/90 text-[#0c2340]/80 hover:bg-white'
                        }`}
                      >
                        {story.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div
              id="story-panel"
              role="tabpanel"
              aria-labelledby={`story-tab-${active.id}`}
              className="mt-4 flex justify-center sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 sm:z-10 sm:block sm:justify-start"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                  className="max-w-[240px] bg-white px-4 py-4 text-left shadow-[0_12px_40px_rgba(12,35,64,0.12)] sm:max-w-[250px] sm:px-5 sm:py-5"
                >
                  <p className="text-[13px] leading-relaxed text-[#0c2340]">
                    {active.story}
                  </p>
                  <Link
                    href={active.href}
                    className="mt-4 inline-block text-[11px] font-semibold tracking-[0.14em] text-[#0c2340] transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c2340]"
                  >
                    LEARN ABOUT OUR IMPACT
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fade}
          transition={{
            ...fade.transition,
            delay: reduceMotion ? 0 : 0.12,
          }}
          className="mt-14 text-center sm:mt-16"
        >
          <h3
            className={`${instrumentSerif.className} mx-auto max-w-3xl text-[1.85rem] leading-[1.2] text-[#0c2340] sm:text-4xl lg:text-[2.75rem]`}
          >
            Every child deserves
            <span className="block">more than a diagnosis.</span>
          </h3>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#0c2340]/70 sm:text-[15px]">
            Hala Equity Heroes works to help children affected by sickle cell
            disease access support, resources, and opportunities to thrive.
          </p>
          <Link
            href="/get-involved"
            className="mt-7 inline-flex min-h-10 items-center justify-center rounded-full bg-amber-400 px-6 text-[12px] font-semibold tracking-[0.14em] text-[#0c2340] transition-colors hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c2340]"
          >
            SUPPORT A CHILD
          </Link>
        </motion.div>

        <motion.aside
          {...fade}
          transition={{
            ...fade.transition,
            delay: reduceMotion ? 0 : 0.16,
          }}
          className="mx-auto mt-12 flex max-w-xl items-center gap-4 border border-[#0c2340]/10 bg-[#EFE6D4] px-4 py-4 sm:gap-5 sm:px-6 sm:py-5"
          aria-label="How your support helps"
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#0c2340] text-[11px] font-semibold tracking-[0.16em] text-[#0c2340] sm:h-16 sm:w-16"
            aria-hidden
          >
            CARE
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[13px] font-semibold text-[#0c2340] sm:text-sm">
              Small acts can create meaningful change.
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-[#0c2340]/70 sm:text-[13px]">
              Your support can help provide children and families affected by
              sickle cell with access to resources, encouragement, education,
              and community.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
