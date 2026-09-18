import assert from "node:assert/strict";
import { contactLine, extractCvBox, parseCvBox } from "../src/cvParser.js";
import { cvFileBase, progressFileBase } from "../src/fileName.js";
import { sectionHeading } from "../src/headings.js";
import { localeKeySetsMatch, strings, tFormat } from "../src/i18n.js";
import { pickAgents } from "../src/pickAgents.js";
import { extractProgressBox, parseProgressBox } from "../src/progressParser.js";
import { promptFor } from "../src/wizardPrompt.js";

const messy = `Here is your CV.

=== CV START ===
CV_LANGUAGE: fr
FULL_NAME: Amina Diallo
CITY: Dakar
COUNTRY: Senegal
PHONE: +221 77 000 0000
WHATSAPP: +221 77 000 0000
EMAIL: [ADD YOUR EMAIL]
ADDRESS: [ADD YOUR ADDRESS IF THE EMPLOYER ASKS]
TARGET_JOB: Shop Assistant
PROFILE: Reliable shop assistant.
EXPERIENCE:
Market stall | Helper | 2024-2025
- Served customers
EDUCATION:
High school
SKILLS:
Cash handling
LANGUAGES:
French, Wolof
OTHER:
ATS_SCORE: 78
=== CV END ===

Copy only the box.
`;

assert.ok(extractCvBox(messy));
const { ok, cv } = parseCvBox(messy);
assert.equal(ok, true);
assert.equal(cv.CV_LANGUAGE, "fr");
assert.equal(cv.FULL_NAME, "Amina Diallo");
assert.equal(cv.TARGET_JOB, "Shop Assistant");
assert.match(cv.EXPERIENCE, /Market stall/);
assert.equal(cvFileBase(cv), "Amina_Diallo_Shop_Assistant_CV");
assert.match(contactLine(cv), /WhatsApp/);
assert.equal(parseCvBox("no box here").ok, false);
assert.equal(sectionHeading("fr", "PROFILE"), "Profil");
assert.equal(sectionHeading("sw", "SKILLS"), "Stadi");
assert.equal(sectionHeading("mg", "EXPERIENCE"), "Traikefa");
assert.equal(sectionHeading("pt", "EDUCATION"), "Formação");
assert.equal(sectionHeading("unknown", "PROFILE"), "Profile");

const progressRaw = `=== PROGRESS START ===
WIZARD_LANGUAGE: English
CV_LANGUAGE: en
FULL_NAME: Amina Diallo
TARGET_JOB: Shop Assistant
NEXT: skills
=== PROGRESS END ===
`;
assert.ok(extractProgressBox(progressRaw));
const progress = parseProgressBox(progressRaw);
assert.equal(progress.ok, true);
assert.equal(progress.progress.FULL_NAME, "Amina Diallo");
assert.equal(progress.progress.NEXT, "skills");
assert.equal(progressFileBase(progress.progress), "Amina_Diallo_CV_Launch_progress");
assert.equal(parseProgressBox("no box").ok, false);

assert.deepEqual(pickAgents("create", "yes"), { first: "gemini", backup: "claude" });
assert.deepEqual(pickAgents("create", "no"), { first: "gemini", backup: "claude" });
assert.deepEqual(pickAgents("continue", "yes"), { first: "gemini", backup: "claude" });
assert.deepEqual(pickAgents("improve", "yes"), { first: "gemini", backup: "claude" });
assert.deepEqual(pickAgents("improve", "no"), { first: "claude", backup: "gemini" });
assert.deepEqual(pickAgents("tailor", "no"), { first: "claude", backup: "gemini" });

assert.match(promptFor("create"), /CREATE A NEW CV/);
assert.match(promptFor("improve"), /YOU ONLY GIVE SUGGESTIONS/);
assert.doesNotMatch(promptFor("improve"), /=== FINAL OUTPUT ===/);
assert.match(promptFor("tailor"), /TAILOR A CV TO A JOB/);
assert.match(promptFor("continue"), /CONTINUE CREATING/);
assert.match(promptFor("create"), /=== PROGRESS START ===/);

assert.equal(localeKeySetsMatch(), true);
assert.ok(strings.sw);
assert.equal(strings.en.tileCv, "CV Launch");
assert.equal(strings.fr.tileInterview, "Interview Launch");
assert.equal(strings.pt.tileRoadmap, "Career Roadmap Launch");
assert.equal(strings.mg.tileCv, "CV Launch");
assert.equal(strings.sw.tileCv, "CV Launch");
assert.match(strings.en.openAgent, /\{agent\}/);
assert.match(strings.mg.openAgent, /Sokafy ny \{agent\}/);
assert.match(strings.sw.openAgent, /Fungua \{agent\}/);

const saved = globalThis.localStorage;
globalThis.localStorage = {
  getItem: () => "mg",
  setItem() {},
};
assert.equal(tFormat("openAgent", { agent: "Gemini" }), "Sokafy ny Gemini");
globalThis.localStorage = saved || { getItem: () => null, setItem() {} };

console.log("cv parser and routing ok");
