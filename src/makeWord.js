import { Packer } from "docx";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import { applyI18n, renderLangSwitch } from "./applyI18n.js";
import { buildDocxDocument } from "./cvDoc.js";
import { contactLine, parseCvBox } from "./cvParser.js";
import { cvFileBase } from "./fileName.js";
import { sectionHeading } from "./headings.js";
import { t, tFormat } from "./i18n.js";
import { registerNotoSans } from "./pdfFont.js";

const PLACEHOLDER = /^\s*\[[^\]]+\]\s*$/;

async function buildPdf(cv) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  await registerNotoSans(doc);
  const margin = 54;
  const width = 595.28 - margin * 2;
  let y = 64;
  const lang = cv.CV_LANGUAGE;

  const write = (text, opts = {}) => {
    const size = opts.size || 11;
    doc.setFont("NotoSans", opts.bold ? "bold" : "normal");
    doc.setFontSize(size);
    if (Array.isArray(opts.color)) doc.setTextColor(...opts.color);
    else doc.setTextColor(28, 42, 36);
    const lines = doc.splitTextToSize(String(text || ""), width);
    for (const line of lines) {
      if (y > 780) {
        doc.addPage();
        y = 64;
      }
      doc.text(line, opts.center ? 297.64 : margin, y, opts.center ? { align: "center" } : undefined);
      y += opts.leading || size + 6;
    }
  };

  write(cv.FULL_NAME || "[ADD YOUR NAME]", { size: 18, bold: true, center: true, leading: 24 });
  write(contactLine(cv), { size: 10, center: true, color: [51, 68, 60], leading: 16 });
  if (cv.TARGET_JOB) write(cv.TARGET_JOB, { size: 11, center: true, color: [13, 107, 86], leading: 22 });

  const section = (key, body) => {
    if (!body) return;
    y += 8;
    write(sectionHeading(lang, key), { size: 13, bold: true, color: [13, 107, 86], leading: 20 });
    for (const line of body.split(/\n+/).filter(Boolean)) {
      const warn = PLACEHOLDER.test(line);
      write(line.trim().replace(/^- /, "• "), {
        size: 11,
        leading: 16,
        color: warn ? [138, 90, 0] : [28, 42, 36],
      });
    }
  };

  section("PROFILE", cv.PROFILE);
  section("EXPERIENCE", cv.EXPERIENCE);
  section("EDUCATION", cv.EDUCATION);
  section("SKILLS", cv.SKILLS);
  section("LANGUAGES", cv.LANGUAGES);
  section("OTHER", cv.OTHER);
  return doc;
}

function showError(node, message) {
  node.hidden = !message;
  node.textContent = message || "";
}

function boot() {
  applyI18n();
  renderLangSwitch(document.getElementById("lang-switch"));

  const paste = document.getElementById("cv-paste");
  const error = document.getElementById("parse-error");
  const okNote = document.getElementById("parse-ok");
  const wordBtn = document.getElementById("download-word");
  const pdfBtn = document.getElementById("download-pdf");

  const readCv = (quiet) => {
    const parsed = parseCvBox(paste.value);
    if (!parsed.ok) {
      if (!quiet) showError(error, t("parseError"));
      else showError(error, "");
      okNote.classList.add("hidden");
      okNote.textContent = "";
      return null;
    }
    showError(error, "");
    okNote.classList.remove("hidden");
    okNote.textContent = tFormat("parseReady", { name: parsed.cv.FULL_NAME || parsed.cv.TARGET_JOB });
    return parsed.cv;
  };

  paste.addEventListener("input", () => {
    if (paste.value.trim()) readCv(true);
    else {
      showError(error, "");
      okNote.classList.add("hidden");
    }
  });

  wordBtn.addEventListener("click", async () => {
    const cv = readCv();
    if (!cv) return;
    const blob = await Packer.toBlob(buildDocxDocument(cv));
    saveAs(blob, `${cvFileBase(cv)}.docx`);
  });

  pdfBtn.addEventListener("click", async () => {
    const cv = readCv();
    if (!cv) return;
    try {
      const pdf = await buildPdf(cv);
      pdf.save(`${cvFileBase(cv)}.pdf`);
    } catch {
      showError(error, t("pdfFail"));
    }
  });
}

boot();
