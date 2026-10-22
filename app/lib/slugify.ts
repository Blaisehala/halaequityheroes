// "Start a local circle" -> "start-a-local-circle" (used for in-page anchors linked from the nav)
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
