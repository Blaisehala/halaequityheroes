// Small section label that sits above every section heading, so each page has the same
// hierarchy: label → heading → text. The four-colour bar comes from the logo's heart.
const logoColours = ["bg-logo-pink", "bg-logo-orange", "bg-logo-green", "bg-logo-blue"];

type EyebrowProps = {
  children: React.ReactNode;
  /** "dark" for labels on navy or blue backgrounds */
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export default function Eyebrow({ children, tone = "light", align = "left", className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
        tone === "dark" ? "text-white/85" : "text-brand-blue"
      } ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span aria-hidden className="flex">
        {logoColours.map((c) => (
          <span key={c} className={`h-1 w-3 ${c}`} />
        ))}
      </span>
      {children}
    </p>
  );
}

/** Logo colours to cycle through for numbered markers (steps, rows) */
export const logoCycle = [
  { border: "border-logo-pink", text: "text-logo-pink" },
  { border: "border-logo-orange", text: "text-logo-orange" },
  { border: "border-logo-green", text: "text-logo-green" },
  { border: "border-logo-blue", text: "text-logo-blue" },
];
