import notoBoldUrl from "./fonts/NotoSans-Bold.ttf?url";
import notoRegularUrl from "./fonts/NotoSans-Regular.ttf?url";

let cached = null;

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function loadAsBase64(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("font-load-failed");
  return arrayBufferToBase64(await res.arrayBuffer());
}

export async function registerNotoSans(doc) {
  if (!cached) {
    const [regular, bold] = await Promise.all([
      loadAsBase64(notoRegularUrl),
      loadAsBase64(notoBoldUrl),
    ]);
    cached = { regular, bold };
  }
  doc.addFileToVFS("NotoSans-Regular.ttf", cached.regular);
  doc.addFileToVFS("NotoSans-Bold.ttf", cached.bold);
  doc.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");
  doc.addFont("NotoSans-Bold.ttf", "NotoSans", "bold");
}
