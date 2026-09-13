import { LANGS, getLang, setLang, t } from "./i18n.js";

export function renderLangSwitch(host) {
  if (!host) return;
  host.innerHTML = "";
  host.setAttribute("role", "navigation");
  host.setAttribute("aria-label", t("langAria"));
  const current = getLang();
  for (const lang of LANGS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn" + (lang.id === current ? " is-on" : "");
    btn.lang = lang.id;
    btn.textContent = lang.label;
    btn.addEventListener("click", () => {
      setLang(lang.id);
      applyI18n();
      renderLangSwitch(host);
    });
    host.appendChild(btn);
  }
}

export function applyI18n() {
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));
}
