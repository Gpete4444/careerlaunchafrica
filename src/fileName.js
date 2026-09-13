function slugPart(value, fallback) {
  const clean = String(value || "")
    .replace(/\[[^\]]*\]/g, " ")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, " ")
    .trim()
    .replace(/\s+/g, "_")
    .slice(0, 40);
  return clean || fallback;
}

export function cvFileBase(cv) {
  const name = slugPart(cv.FULL_NAME, "CV");
  const job = slugPart(cv.TARGET_JOB, "General");
  return `${name}_${job}_CV`;
}
