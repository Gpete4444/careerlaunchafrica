import { applyI18n, renderLangSwitch } from "./applyI18n.js";
import { t, tFormat } from "./i18n.js";
import { pickAgents } from "./pickAgents.js";
import { ATS_SECOND_PROMPT, promptFor } from "./wizardPrompt.js";

const AGENTS = {
  gemini: { href: "https://gemini.google.com", labelKey: "agentGemini" },
  claude: { href: "https://claude.ai", labelKey: "agentClaude" },
  deepseek: { href: "https://chat.deepseek.com", labelKey: "agentDeepSeek" },
};

const STORE = "cla-cv-flow";
const ALL_SCREENS = ["path", "ats", "finish", "tips", "copy", "open"];

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

function screensFor(path) {
  const tail = ["tips", "copy", "open"];
  if (path === "improve" || path === "tailor") return ["path", "ats", "finish", ...tail];
  return ["path", "finish", ...tail];
}

function loadFlow() {
  try {
    return JSON.parse(sessionStorage.getItem(STORE) || "{}");
  } catch {
    return {};
  }
}

function saveFlow(flow) {
  try {
    sessionStorage.setItem(STORE, JSON.stringify(flow));
  } catch {
    /* ignore */
  }
}

function boot() {
  applyI18n();
  renderLangSwitch(document.getElementById("lang-switch"));

  const saved = loadFlow();
  const params = new URLSearchParams(location.search);
  const paramPath = params.get("path");
  let path = saved.path || "";
  let finish = saved.finish || "";
  let screen = saved.screen || "path";
  if (["create", "improve", "tailor", "continue"].includes(paramPath)) {
    if (path !== paramPath) {
      finish = "";
      screen = screensFor(paramPath)[1] || "finish";
    }
    path = paramPath;
  }
  if (screen === "ready") screen = "tips";
  let learnOpen = false;

  const persist = () => saveFlow({ path, finish, screen });

  const paintChoices = () => {
    document.querySelectorAll("[data-group]").forEach((btn) => {
      const group = btn.getAttribute("data-group");
      const value = group === "path" ? path : finish;
      btn.classList.toggle("is-on", btn.getAttribute("data-value") === value);
    });
  };

  const renderLaunch = () => {
    document.getElementById("continue-help").classList.toggle("hidden", path !== "continue");
    document.getElementById("return-create").classList.toggle(
      "hidden",
      path !== "create" && path !== "continue",
    );
    document.getElementById("return-suggest").classList.toggle(
      "hidden",
      path !== "improve" && path !== "tailor",
    );
    document.getElementById("save-help").classList.toggle("hidden", path !== "create" && path !== "continue");
    document.getElementById("create-after").classList.toggle("hidden", path !== "create" && path !== "continue");
    document.getElementById("second-opinion").classList.toggle(
      "hidden",
      path !== "improve" && path !== "tailor",
    );

    document.getElementById("wizard-text").value = promptFor(path).trim();

    if (!finish) finish = "yes";
    const { first, backup } = pickAgents(path, finish);
    document.getElementById("first-link").replaceChildren(agentLink(first, true));
    document.getElementById("backup-link").replaceChildren(agentLink(backup, false));
    document.getElementById("deepseek-link").replaceChildren(agentLink("deepseek", false));
    document.getElementById("claude-wait").classList.toggle(
      "hidden",
      first !== "claude" && backup !== "claude",
    );
  };

  const showScreen = () => {
    const steps = screensFor(path);
    if (!steps.includes(screen)) screen = "path";
    const current = Math.max(1, steps.indexOf(screen) + 1);
    const total = path ? steps.length : steps.length;
    document.getElementById("step-label").textContent = tFormat("stepOf", {
      current: String(current),
      total: String(total),
    });

    const pct = Math.round((current / total) * 100);
    document.getElementById("progress-fill").style.width = `${pct}%`;
    const track = document.getElementById("progress-track");
    track.setAttribute("aria-valuenow", String(pct));
    track.setAttribute("aria-label", t("progressAria"));

    ALL_SCREENS.forEach((name) => {
      document.getElementById(`screen-${name}`).classList.toggle("hidden", screen !== name);
    });
    paintChoices();
    if (["tips", "copy", "open"].includes(screen)) renderLaunch();
    persist();
  };

  const goNext = () => {
    const steps = screensFor(path);
    const i = steps.indexOf(screen);
    if (i >= 0 && i < steps.length - 1) screen = steps[i + 1];
    showScreen();
  };

  const goBack = () => {
    const steps = screensFor(path);
    const i = steps.indexOf(screen);
    if (i > 0) screen = steps[i - 1];
    else screen = "path";
    showScreen();
  };

  document.querySelectorAll("[data-group]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.getAttribute("data-group");
      const value = btn.getAttribute("data-value");
      if (group === "path") {
        path = value;
        finish = "";
        goNext();
        return;
      }
      if (group === "finish") {
        finish = value;
        goNext();
      }
    });
  });

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.getAttribute("data-nav") === "back") goBack();
      else goNext();
    });
  });

  const learnBtn = document.getElementById("learn-why");
  const learnBody = document.getElementById("ats-learn");
  learnBtn.addEventListener("click", () => {
    learnOpen = !learnOpen;
    learnBody.classList.toggle("hidden", !learnOpen);
    learnBtn.textContent = t(learnOpen ? "hideLearn" : "learnWhy");
  });

  const copyStatus = document.getElementById("copy-status");
  document.getElementById("copy-wizard").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById("wizard-text").value);
      copyStatus.textContent = t("copied");
    } catch {
      copyStatus.textContent = t("copyFail");
    }
  });

  const secondStatus = document.getElementById("second-status");
  document.getElementById("copy-second").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ATS_SECOND_PROMPT.trim());
      secondStatus.textContent = t("copiedSecond");
    } catch {
      secondStatus.textContent = t("copyFail");
    }
  });

  document.getElementById("lang-switch").addEventListener("click", () => {
    showScreen();
    learnBtn.textContent = t(learnOpen ? "hideLearn" : "learnWhy");
    if (copyStatus.textContent) copyStatus.textContent = "";
    if (secondStatus.textContent) secondStatus.textContent = "";
  });

  showScreen();
}

boot();
