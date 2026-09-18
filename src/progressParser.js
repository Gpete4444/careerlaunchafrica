export const PROGRESS_LABELS = [
  "WIZARD_LANGUAGE",
  "WIZARD_REGION",
  "CV_LANGUAGE",
  "CV_REGION",
  "FULL_NAME",
  "CITY",
  "COUNTRY",
  "PHONE",
  "WHATSAPP",
  "EMAIL",
  "ADDRESS",
  "TARGET_JOB",
  "JOB_AD",
  "PAID_WORK",
  "INFORMAL_WORK",
  "EDUCATION",
  "SKILLS",
  "LANGUAGES",
  "MISSION",
  "OTHER",
  "NEXT",
  "NOTES",
];

export function extractProgressBox(raw) {
  const text = String(raw || "").replace(/\r\n/g, "\n");
  const start = text.indexOf("=== PROGRESS START ===");
  const end = text.indexOf("=== PROGRESS END ===");
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start + "=== PROGRESS START ===".length, end).trim();
}

export function parseProgressBox(raw) {
  const box = extractProgressBox(raw);
  if (!box) return { ok: false, progress: null };
  const progress = Object.fromEntries(PROGRESS_LABELS.map((key) => [key, ""]));
  const lines = box.split("\n");
  let current = null;
  for (const line of lines) {
    const match = line.match(/^([A-Z_]+)\s*:\s*(.*)$/);
    if (match && PROGRESS_LABELS.includes(match[1])) {
      current = match[1];
      progress[current] = match[2] || "";
      continue;
    }
    if (current) {
      progress[current] = progress[current] ? `${progress[current]}\n${line}` : line;
    }
  }
  for (const key of PROGRESS_LABELS) progress[key] = progress[key].trim();
  return { ok: true, progress };
}

export function progressFileText(raw) {
  const box = extractProgressBox(raw);
  if (!box) return null;
  return `=== PROGRESS START ===\n${box}\n=== PROGRESS END ===\n`;
}
