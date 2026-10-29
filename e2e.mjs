import { chromium } from "playwright-core";

const exe = process.env.CHROME_PATH || "C:/Users/edumi/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe";
const base = process.env.BASE_URL || "https://edumilla1994.github.io/calcula-obra/";
const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage();
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push(String(e)));

async function run(name, path, fillFn, readSel) {
  await page.goto(base + path, { waitUntil: "networkidle" });
  await fillFn(page);
  await page.click("button[type=submit]");
  await page.waitForTimeout(300);
  const value = (await page.textContent(readSel))?.trim();
  console.log(`${name}: ${value}`);
  return value;
}

const r1 = await run("Ladrillos", "ladrillos/", async (p) => {
  await p.fill("#largo", "4");
  await p.fill("#alto", "2.5");
  await p.selectOption("#tipo", "king-kong-18");
  await p.fill("#desperdicio", "5");
}, "#lad-total");

const r2 = await run("Cemento", "cemento/", async (p) => {
  await p.fill("#largo", "4");
  await p.fill("#ancho", "3");
  await p.fill("#espesor", "0.1");
  await p.selectOption("#resistencia", "210");
  await p.fill("#desperdicio", "5");
}, "#cem-bolsas");

const r3 = await run("Pintura", "pintura/", async (p) => {
  await p.fill("#area", "40");
  await p.selectOption("#manos", "2");
  await p.fill("#rendimiento", "10");
  await p.fill("#desperdicio", "5");
}, "#pin-litros");

const r4 = await run("Losetas", "losetas/", async (p) => {
  await p.fill("#area", "20");
  await p.selectOption("#tamano", "0.60");
  await p.fill("#caja", "4");
  await p.fill("#desperdicio", "10");
}, "#los-unidades");

await page.goto(base, { waitUntil: "networkidle" });
await page.fill("#q-area", "40");
await page.selectOption("#q-manos", "2");
await page.waitForTimeout(200);
const r5 = (await page.textContent("#q-galones"))?.trim();

console.log(`Home rápida (40 m², 2 manos): ${r5}`);
console.log("\nRESULTADOS:");
console.log({ ladrillos: r1, cemento: r2, pintura: r3, losetas: r4, home: r5 });
console.log("Errores JS:", errors.length ? errors : "ninguno");

await browser.close();
