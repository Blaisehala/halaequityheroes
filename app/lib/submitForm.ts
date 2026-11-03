// Client helper shared by the contact and newsletter forms: posts JSON to an API route
// and turns the response into a status the form can show honestly.
export type FormStatus = "idle" | "sending" | "sent" | "error";

export async function submitForm(url: string, form: HTMLFormElement): Promise<{ status: FormStatus; message?: string }> {
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) return { status: "sent" };
    const { error } = await res.json().catch(() => ({ error: "" }));
    if (error === "invalid") return { status: "error", message: "Please check your details and try again." };
    return { status: "error", message: "Sorry — we couldn't send that just now. Please try again later." };
  } catch {
    return { status: "error", message: "You seem to be offline. Please check your connection and try again." };
  }
}

/** Off-screen field that only bots fill in; the API ignores submissions where it has a value */
export const honeypotProps = {
  name: "website",
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  className: "absolute -left-[9999px] h-px w-px opacity-0",
} as const;
