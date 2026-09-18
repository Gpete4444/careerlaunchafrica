import { AlignmentType, Document, HeadingLevel, Paragraph, TextRun } from "docx";
import { contactLine } from "./cvParser.js";
import { sectionHeading } from "./headings.js";

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

export function buildDocxDocument(cv) {
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
  const lang = cv.CV_LANGUAGE;
  if (cv.PROFILE) children.push(heading(sectionHeading(lang, "PROFILE")), ...bodyParas(cv.PROFILE));
  if (cv.EXPERIENCE) children.push(heading(sectionHeading(lang, "EXPERIENCE")), ...bodyParas(cv.EXPERIENCE));
  if (cv.EDUCATION) children.push(heading(sectionHeading(lang, "EDUCATION")), ...bodyParas(cv.EDUCATION));
  if (cv.SKILLS) children.push(heading(sectionHeading(lang, "SKILLS")), ...bodyParas(cv.SKILLS));
  if (cv.LANGUAGES) children.push(heading(sectionHeading(lang, "LANGUAGES")), ...bodyParas(cv.LANGUAGES));
  if (cv.OTHER) children.push(heading(sectionHeading(lang, "OTHER")), ...bodyParas(cv.OTHER));

  return new Document({
    sections: [
      {
        properties: { page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } } },
        children,
      },
    ],
  });
}
