import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import { applyI18n, renderLangSwitch } from "./applyI18n.js";
import { contactLine, parseCvBox } from "./cvParser.js";
import { cvFileBase } from "./fileName.js";
import { t } from "./i18n.js";

const PLACEHOLDER = /^\s*\[[^\]]+\]\s*$/;

function heading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, bold: true, font: "Calibri", size: 24, color: "0D6B56" })],
  });
}

function bodyParas(text) {
  if (!text) return [];
  return text.split(/\n+/).filter(Boolean).map(
    (line) =>
      new Paragraph({
        spacing: { after: 80 },
        bullet: line.trim().startsWith("- ") ? { level: 0 } : undefined,
        children: [
          new TextRun({
            text: line.trim().replace(/^- /, ""),
            font: "Calibri",
            size: 22,
            color: PLACEHOLDER.test(line) ? "8A5A00" : "1C2A24",
            italics: PLACEHOLDER.test(line),
          }),
        ],
      }),
  );
}

async function buildDocx(cv) {
  const children = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: cv.FULL_NAME || "[ADD YOUR NAME]",
          bold: true,
          font: "Calibri",
          size: 36,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: contactLine(cv),
          font: "Calibri",
          size: 20,
          color: "33443C",
        }),
      ],
    }),
  ];

  if (cv.TARGET_JOB) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: cv.TARGET_JOB, italics: true, font: "Calibri", size: 22 })],
      }),
    );
  }
  if (cv.PROFILE) {
    children.push(heading("Profile"), ...bodyParas(cv.PROFILE));
  }
  if (cv.EXPERIENCE) {
    children.push(heading("Experience"), ...bodyParas(cv.EXPERIENCE));
  }
  if (cv.EDUCATION) {
    children.push(heading("Education"), ...bodyParas(cv.EDUCATION));
  }
  if (cv.SKILLS) {
    children.push(heading("Skills"), ...bodyParas(cv.SKILLS));
  }
  if (cv.LANGUAGES) {
    children.push(heading("Languages"), ...bodyParas(cv.LANGUAGES));
  }
  if (cv.OTHER) {
    children.push(heading("Other"), ...bodyParas(cv.OTHER));
  }

  const doc = new Document({
    sections: [
      {
        properties: {
          page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } },
        },
        children,
      },
    ],
  });
  return Packer.toBlob(doc);
}

function buildPdf(cv) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 54;
  const width = 595.28 - margin * 2;
  let y = 64;

  const write = (text, opts = {}) => {
    const size = opts.size || 11;
    doc.setFont("helvetica", opts.bold ? "bold" : opts.italic ? "italic" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(opts.color || 28, 42, 36);
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
  if (cv.TARGET_JOB) write(cv.TARGET_JOB, { size: 11, italic: true, center: true, leading: 22 });

  const section = (title, body) => {
    if (!body) return;
    y += 8;
    write(title, { size: 13, bold: true, color: [13, 107, 86], leading: 20 });
    for (const line of body.split(/\n+/).filter(Boolean)) {
      write(line.trim().replace(/^- /, "• "), { size: 11, leading: 16 });
    }
  };

  section("Profile", cv.PROFILE);
  section("Experience", cv.EXPERIENCE);
  section("Education", cv.EDUCATION);
  section("Skills", cv.SKILLS);
  section("Languages", cv.LANGUAGES);
  section("Other", cv.OTHER);
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
  const wordBtn = document.getElementById("download-word");
  const pdfBtn = document.getElementById("download-pdf");

  const readCv = () => {
    const parsed = parseCvBox(paste.value);
    if (!parsed.ok) {
      showError(error, t("parseError"));
      return null;
    }
    showError(error, "");
    return parsed.cv;
  };

  wordBtn.addEventListener("click", async () => {
    const cv = readCv();
    if (!cv) return;
    const blob = await buildDocx(cv);
    saveAs(blob, `${cvFileBase(cv)}.docx`);
  });

  pdfBtn.addEventListener("click", () => {
    const cv = readCv();
    if (!cv) return;
    buildPdf(cv).save(`${cvFileBase(cv)}.pdf`);
  });
}

boot();
