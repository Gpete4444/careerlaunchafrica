export function pickAgents(path, finishToday) {
  if (finishToday === "no" && (path === "improve" || path === "tailor")) {
    return { first: "claude", backup: "gemini" };
  }
  return { first: "gemini", backup: "claude" };
}
