const LABELS = [
  "CV_LANGUAGE",
  "FULL_NAME",
  "CITY",
  "COUNTRY",
  "PHONE",
  "WHATSAPP",
  "EMAIL",
  "ADDRESS",
  "TARGET_JOB",
  "PROFILE",
  "EXPERIENCE",
  "EDUCATION",
  "SKILLS",
  "LANGUAGES",
  "OTHER",
  "ATS_SCORE",
];

export function extractCvBox(raw) {
  const text = String(raw || "").replace(/\r\n/g, "\n");
  const start = text.indexOf("=== CV START ===");
  const end = text.indexOf("=== CV END ===");
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start + "=== CV START ===".length, end).trim();
}

export function parseCvBox(raw) {
  const box = extractCvBox(raw);
  if (!box) return { ok: false, cv: null };
  const cv = Object.fromEntries(LABELS.map((key) => [key, ""]));
  const lines = box.split("\n");
  let current = null;
  for (const line of lines) {
    const match = line.match(/^([A-Z_]+)\s*:\s*(.*)$/);
    if (match && LABELS.includes(match[1])) {
      current = match[1];
      cv[current] = match[2] || "";
      continue;
    }
    if (current) {
      cv[current] = cv[current] ? `${cv[current]}\n${line}` : line;
    }
  }
  for (const key of LABELS) cv[key] = cv[key].trim();
  return { ok: true, cv };
}

export function contactLine(cv) {
  const bits = [
    [cv.CITY, cv.COUNTRY].filter(Boolean).join(", "),
    cv.PHONE ? `Tel ${cv.PHONE}` : "",
    cv.WHATSAPP ? `WhatsApp ${cv.WHATSAPP}` : "",
    cv.EMAIL,
    cv.ADDRESS && !/^\[ADD/i.test(cv.ADDRESS) ? cv.ADDRESS : "",
  ].filter(Boolean);
  return bits.join("  ·  ");
}
