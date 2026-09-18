import { saveAs } from "file-saver";
import { applyI18n, renderLangSwitch } from "./applyI18n.js";
import { progressFileBase } from "./fileName.js";
import { t } from "./i18n.js";
import { parseProgressBox, progressFileText } from "./progressParser.js";

function boot() {
  applyI18n();
  renderLangSwitch(document.getElementById("lang-switch"));

  const paste = document.getElementById("progress-paste");
  const error = document.getElementById("parse-error");

  document.getElementById("download-progress").addEventListener("click", () => {
    const parsed = parseProgressBox(paste.value);
    if (!parsed.ok) {
      error.hidden = false;
      error.textContent = t("progressError");
      return;
    }
    error.hidden = true;
    error.textContent = "";
    const text = progressFileText(paste.value);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${progressFileBase(parsed.progress)}.txt`);
  });
}

boot();
