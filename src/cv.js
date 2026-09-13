import { applyI18n, renderLangSwitch } from "./applyI18n.js";
import { t, tFormat } from "./i18n.js";
import { pickAgents } from "./pickAgents.js";
import { WIZARD_PROMPT } from "./wizardPrompt.js";

const AGENTS = {
  gemini: { href: "https://gemini.google.com", labelKey: "agentGemini" },
  claude: { href: "https://claude.ai", labelKey: "agentClaude" },
  deepseek: { href: "https://chat.deepseek.com", labelKey: "agentDeepSeek" },
};

function agentLink(id, primary) {
  const agent = AGENTS[id];
  const a = document.createElement("a");
  a.className = primary ? "btn btn-primary" : "btn btn-secondary";
  a.href = agent.href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = tFormat("openAgent", { agent: t(agent.labelKey) });
  return a;
}

function boot() {
  applyI18n();
  renderLangSwitch(document.getElementById("lang-switch"));

  let path = "";
  let finish = "";

  const recommend = document.getElementById("recommend");
  const hint = document.getElementById("choose-both");

  const paintChoices = (name, value) => {
    document.querySelectorAll(`[data-group="${name}"]`).forEach((btn) => {
      btn.classList.toggle("is-on", btn.getAttribute("data-value") === value);
    });
  };

  const renderRecommend = () => {
    applyI18n();
    if (!path || !finish) {
      recommend.classList.add("hidden");
      hint.classList.remove("hidden");
      return;
    }
    hint.classList.add("hidden");
    recommend.classList.remove("hidden");
    const { first, backup } = pickAgents(path, finish);
    document.getElementById("first-link").replaceChildren(agentLink(first, true));
    document.getElementById("backup-link").replaceChildren(agentLink(backup, false));
    document.getElementById("claude-wait").classList.toggle(
      "hidden",
      first !== "claude" && backup !== "claude",
    );
  };

  document.querySelectorAll("[data-group]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.getAttribute("data-group");
      const value = btn.getAttribute("data-value");
      if (group === "path") path = value;
      if (group === "finish") finish = value;
      paintChoices(group, value);
      renderRecommend();
    });
  });

  const copyBtn = document.getElementById("copy-wizard");
  const copyStatus = document.getElementById("copy-status");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(WIZARD_PROMPT.trim());
      copyStatus.textContent = t("copied");
    } catch {
      copyStatus.textContent = t("copyFail");
    }
  });

  document.getElementById("lang-switch").addEventListener("click", () => {
    renderRecommend();
    if (copyStatus.textContent) copyStatus.textContent = "";
  });
}

boot();
