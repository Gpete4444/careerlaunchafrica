export function pickAgents(path, finishToday) {
  if (finishToday === "no" && (path === "improve" || path === "tailor")) {
    return { first: "claude", backup: "gemini" };
  }
  if (path === "create") {
    return { first: "gemini", backup: "deepseek" };
  }
  return { first: "gemini", backup: "claude" };
}
