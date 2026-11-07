'use client'

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { worldDots } from "../lib/worldDots";
import Eyebrow from "./Eyebrow";

const dots = worldDots.points.split(" ").map((pair, i) => {
  const [x, y] = pair.split(",").map(Number);
  return { x, y, twinkle: i % 23 === 0 };
});

// Animated dotted world map: dots sweep in west to east when the section scrolls into view,
// then scattered dots twinkle in amber. Motion is skipped for people who prefer reduced motion.
export default function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Eyebrow>Around the world</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">A global family of Heroes</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We are carried by a family of volunteers from around the world — from
              our organisers, nurses, and mentors to our volunteer teachers,
              technicians, and those who are just ready to start.
            </p>
          </div>
          <Link
            href="/volunteer"
            className="justify-self-start bg-brand-navy px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-blue lg:justify-self-end"
          >
            Join the family
          </Link>
        </div>

        <div ref={ref} data-visible={visible} className="world-map mt-14">
          <svg
            viewBox={`-1 -1 ${worldDots.cols + 2} ${worldDots.rows + 1}`}
            className="h-auto w-full"
            role="img"
            aria-label="Dotted map of the world"
          >
            {dots.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={0.34}
                className={d.twinkle ? "world-dot world-twinkle" : "world-dot"}
                style={{ "--d": `${Math.round(d.x * 14)}ms`, "--t": `${(i * 0.37) % 4}s` } as React.CSSProperties}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
