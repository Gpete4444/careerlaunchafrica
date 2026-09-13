import assert from "node:assert/strict";
import { contactLine, extractCvBox, parseCvBox } from "../src/cvParser.js";
import { cvFileBase } from "../src/fileName.js";
import { pickAgents } from "../src/pickAgents.js";

const messy = `Here is your CV.

=== CV START ===
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
assert.equal(cv.FULL_NAME, "Amina Diallo");
assert.equal(cv.TARGET_JOB, "Shop Assistant");
assert.match(cv.EXPERIENCE, /Market stall/);
assert.equal(cvFileBase(cv), "Amina_Diallo_Shop_Assistant_CV");
assert.match(contactLine(cv), /WhatsApp/);
assert.equal(parseCvBox("no box here").ok, false);

assert.deepEqual(pickAgents("create", "yes"), { first: "gemini", backup: "deepseek" });
assert.deepEqual(pickAgents("create", "no"), { first: "gemini", backup: "deepseek" });
assert.deepEqual(pickAgents("improve", "yes"), { first: "gemini", backup: "claude" });
assert.deepEqual(pickAgents("improve", "no"), { first: "claude", backup: "gemini" });
assert.deepEqual(pickAgents("tailor", "no"), { first: "claude", backup: "gemini" });

console.log("cv parser and routing ok");
