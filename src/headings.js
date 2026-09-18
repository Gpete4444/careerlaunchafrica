export const SECTION_HEADINGS = {
  en: {
    PROFILE: "Profile",
    EXPERIENCE: "Experience",
    EDUCATION: "Education",
    SKILLS: "Skills",
    LANGUAGES: "Languages",
    OTHER: "Other",
  },
  fr: {
    PROFILE: "Profil",
    EXPERIENCE: "Expérience",
    EDUCATION: "Formation",
    SKILLS: "Compétences",
    LANGUAGES: "Langues",
    OTHER: "Autre",
  },
  pt: {
    PROFILE: "Perfil",
    EXPERIENCE: "Experiência",
    EDUCATION: "Formação",
    SKILLS: "Competências",
    LANGUAGES: "Línguas",
    OTHER: "Outro",
  },
  sw: {
    PROFILE: "Wasifu",
    EXPERIENCE: "Uzoefu",
    EDUCATION: "Elimu",
    SKILLS: "Stadi",
    LANGUAGES: "Lugha",
    OTHER: "Nyingine",
  },
  mg: {
    PROFILE: "Mombamomba",
    EXPERIENCE: "Traikefa",
    EDUCATION: "Fianarana",
    SKILLS: "Fahaiza-manao",
    LANGUAGES: "Fiteny",
    OTHER: "Hafa",
  },
};

export function normalizeCvLang(value) {
  const raw = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-");
  if (SECTION_HEADINGS[raw]) return raw;
  if (raw.startsWith("en") || raw.includes("english")) return "en";
  if (raw.startsWith("fr") || raw.includes("french") || raw.includes("français")) return "fr";
  if (raw.startsWith("pt") || raw.includes("portug")) return "pt";
  if (raw.startsWith("sw") || raw.includes("swahili") || raw.includes("kiswahili")) return "sw";
  if (raw.startsWith("mg") || raw.includes("malagasy") || raw.includes("gasy")) return "mg";
  return "en";
}

export function sectionHeading(cvLang, key) {
  const lang = normalizeCvLang(cvLang);
  return SECTION_HEADINGS[lang][key] || SECTION_HEADINGS.en[key] || key;
}
