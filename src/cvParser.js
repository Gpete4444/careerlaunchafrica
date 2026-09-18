export const LABELS = [
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

const FIELD_ALIASES = {
  CV_LANGUAGE: ["cv_language", "cv language", "langue du cv"],
  FULL_NAME: ["full_name", "full name", "name", "nom", "nome", "jina", "anarana"],
  CITY: ["city", "ville", "cidade", "mji", "tanàna", "town"],
  COUNTRY: ["country", "pays", "país", "nchi", "firenena"],
  PHONE: ["phone", "tel", "telephone", "téléphone", "telemóvel", "simu", "finday"],
  WHATSAPP: ["whatsapp"],
  EMAIL: ["email", "e-mail", "courriel"],
  ADDRESS: ["address", "adresse", "endereço", "anwani"],
  TARGET_JOB: ["target_job", "target job", "job", "poste", "emploi", "vaga", "asa"],
  PROFILE: ["profile", "profil", "wasifu", "mombamomba", "summary", "résumé"],
  EXPERIENCE: [
    "experience",
    "expérience",
    "experiencia",
    "experiência",
    "uzoefu",
    "traikefa",
    "work",
    "employment",
  ],
  EDUCATION: ["education", "formation", "educação", "elimu", "fianarana", "school"],
  SKILLS: ["skills", "compétences", "competências", "stadi", "fahaiza-manao", "fahaiza"],
  LANGUAGES: ["languages", "langues", "línguas", "lugha", "fiteny"],
  OTHER: ["other", "autre", "outro", "nyingine", "hafa"],
  ATS_SCORE: ["ats_score", "ats score", "score"],
};

function emptyCv() {
  return Object.fromEntries(LABELS.map((key) => [key, ""]));
}

function aliasToLabel(raw) {
  const key = String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/[:*]/g, "")
    .replace(/\s+/g, " ");
  const upper = key.toUpperCase().replace(/ /g, "_");
  if (LABELS.includes(upper)) return upper;
  for (const [label, aliases] of Object.entries(FIELD_ALIASES)) {
    if (aliases.includes(key)) return label;
  }
  return null;
}

export function extractCvBox(raw) {
  const text = String(raw || "").replace(/\r\n/g, "\n");
  const startMatch = text.match(/===\s*CV START\s*===/i);
  const endMatch = text.match(/===\s*CV END\s*===/i);
  if (startMatch && endMatch) {
    const start = text.indexOf(startMatch[0]);
    const end = text.indexOf(endMatch[0]);
    if (end > start) return text.slice(start + startMatch[0].length, end).trim();
  }
  return text.trim() || null;
}

function parseLabeled(box) {
  const cv = emptyCv();
  const lines = box.split("\n");
  let current = null;
  for (const line of lines) {
    const match = line.match(/^\*{0,2}\s*([A-Za-zÀ-ÿ_ ]+?)\s*\*{0,2}\s*:\s*(.*)$/);
    if (match) {
      const label = aliasToLabel(match[1]);
      if (label) {
        current = label;
        cv[current] = match[2] || "";
        continue;
      }
    }
    if (current) {
      cv[current] = cv[current] ? `${cv[current]}\n${line}` : line;
    }
  }
  for (const key of LABELS) cv[key] = cv[key].trim();
  return cv;
}

function parsePlainCv(box) {
  const cv = emptyCv();
  const lines = box.split("\n");
  let current = null;
  let sawHeading = false;
  for (const line of lines) {
    const trimmed = line.trim().replace(/^\*+|\*+$/g, "").replace(/:$/, "").trim();
    const label = aliasToLabel(trimmed);
    if (label && ["PROFILE", "EXPERIENCE", "EDUCATION", "SKILLS", "LANGUAGES", "OTHER"].includes(label)) {
      current = label;
      sawHeading = true;
      continue;
    }
    if (current) {
      cv[current] = cv[current] ? `${cv[current]}\n${line}` : line;
      continue;
    }
    if (!trimmed) continue;
    if (!cv.FULL_NAME) {
      cv.FULL_NAME = trimmed;
      continue;
    }
    if (!cv.TARGET_JOB && trimmed.length < 80 && !/@/.test(trimmed) && !/\d{3}/.test(trimmed)) {
      cv.TARGET_JOB = trimmed;
    }
  }
  for (const key of LABELS) cv[key] = cv[key].trim();
  if (!sawHeading && !cv.EXPERIENCE && !cv.PROFILE) return emptyCv();
  return cv;
}

export function hasCvContent(cv) {
  if (!cv) return false;
  const name = cv.FULL_NAME && !/^\[ADD/i.test(cv.FULL_NAME);
  return Boolean(name || cv.EXPERIENCE || cv.PROFILE || cv.EDUCATION || cv.TARGET_JOB);
}

export function parseCvBox(raw) {
  const box = extractCvBox(raw);
  if (!box) return { ok: false, cv: null };
  let cv = parseLabeled(box);
  if (!hasCvContent(cv)) cv = parsePlainCv(box);
  if (!hasCvContent(cv)) return { ok: false, cv: null };
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
