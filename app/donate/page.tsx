import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import NumberedSteps from "../components/NumberedSteps";
import QAGrid from "../components/QAGrid";
import IconChip, { icons, type Tone } from "../components/IconChip";
import { pageMetadata } from "../lib/seo";
import { photos } from "../lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description:
    "Give what you can — 100% of community gifts go to equity initiatives.",
  path: "/donate",
});

const amounts = ["10", "25", "50", "100", "250"];

const promises: { title: string; body: string; icon: string; tone: Tone }[] = [
  { title: "100% to the work", body: "Every community gift goes directly to equity initiatives.", icon: icons.heart, tone: "sky" },
  { title: "Full transparency", body: "We publish clear breakdowns for each initiative.", icon: icons.eye, tone: "blue" },
  { title: "Total flexibility", body: "Change or pause your giving at any time.", icon: icons.shield, tone: "green" },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10";

export default function DonatePage() {
  return (
    <main>
      <PageHero
        image={photos.twoSmiling}
        eyebrow="Donate"
        title="Give what you can, when you can"
        intro="Your donations are the driving force behind our mission, bringing quality healthcare closer to the families who need it most."
      />

      <section className="bg-brand-sky-tint py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* TODO: connect to a payment provider */}
          <form className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200/80 sm:p-10">
            <h2 className="text-2xl font-extrabold text-brand-navy">Choose an amount</h2>
            <fieldset className="mt-6">
              <legend className="sr-only">Donation amount</legend>
              <div className="grid grid-cols-3 gap-3">
                {amounts.map((a, i) => (
                  <label key={a} className="cursor-pointer">
                    <input type="radio" name="amount" value={a} defaultChecked={i === 2} className="peer sr-only" />
                    <span className="flex h-14 items-center justify-center rounded-xl border-2 border-slate-200 text-lg font-extrabold text-brand-navy transition peer-checked:border-brand-blue peer-checked:bg-brand-sky-tint peer-checked:text-brand-blue peer-focus-visible:ring-4 peer-focus-visible:ring-brand-blue/20 hover:border-brand-blue/50">
                      ${a}
                    </span>
                  </label>
                ))}
                <label className="cursor-pointer">
                  <input type="radio" name="amount" value="other" className="peer sr-only" />
                  <span className="flex h-14 items-center justify-center rounded-xl border-2 border-slate-200 font-bold text-brand-navy transition peer-checked:border-brand-blue peer-checked:bg-brand-sky-tint peer-checked:text-brand-blue hover:border-brand-blue/50">
                    Other
                  </span>
                </label>
              </div>
            </fieldset>

            <label htmlFor="donate-email" className="mt-6 block text-sm font-bold text-brand-navy">
              Email for your receipt
            </label>
            <input id="donate-email" type="email" required placeholder="you@example.org" className={inputClass} />

            <label className="mt-5 flex items-center gap-3 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 accent-brand-blue" />
              Make it a monthly gift
            </label>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-brand-amber px-6 py-4 text-base font-bold text-brand-navy shadow-md shadow-brand-amber/30 transition hover:bg-brand-amber-dark"
            >
              Donate now
            </button>
          </form>

          <div>
            <h2 className="font-display text-4xl text-brand-navy">Our promise to you</h2>
            <ul className="mt-8 space-y-7">
              {promises.map((p) => (
                <li key={p.title} className="flex gap-5">
                  <IconChip d={p.icon} tone={p.tone} />
                  <div>
                    <h3 className="font-extrabold text-brand-navy">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-slate-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <NumberedSteps
        title="Where your gift goes"
        intro="Community contributions primarily fund grants to grassroots partners, tools to support their work, and the minimal infrastructure needed to keep the network safe and accountable."
        background="white"
        steps={[
          { title: "You give", body: "Choose an amount, once or every month." },
          { title: "Partners receive", body: "Your gift funds grassroots partners and the tools they need." },
          { title: "We report back", body: "We publish transparent breakdowns for each initiative." },
        ]}
      />

      <QAGrid />
    </main>
  );
}
