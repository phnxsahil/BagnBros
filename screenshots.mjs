import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { resolve } from "path";

const BASE_URL = "http://localhost:3000";
const OUT_DIR = resolve("screenshots");

mkdirSync(OUT_DIR, { recursive: true });

// Each section identified by its selector — works both with and without id attributes
const sections = [
  { name: "nav", selector: "header" },
  { name: "hero", selector: "#top" },
  { name: "trust-bar", selector: "#trust, section:nth-of-type(3)" },
  { name: "munsiyari-dossier", selector: "#munsiyari" },
  { name: "stacked-chapters", selector: "#hidden" },
  { name: "reels-rail", selector: "#immersive" },
  { name: "field-journal", selector: "#journals" },
  { name: "packages", selector: "#packages" },
  { name: "testimonials", selector: "#testimonials, section:nth-of-type(9)" },
  { name: "booking", selector: "#booking, section:nth-of-type(10)" },
  { name: "footer", selector: "#contact" },
];

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  // Wait extra for lazy-loaded route component
  await page.waitForTimeout(2000);

  for (const sec of sections) {
    // Before any section except nav, hide fixed overlays
    if (sec.name !== "nav") {
      await page.evaluate(() => {
        const existing = document.getElementById("__hide-overlays");
        if (!existing) {
          const s = document.createElement("style");
          s.id = "__hide-overlays";
          s.textContent = `header.fixed, a[aria-label="Chat on WhatsApp"] { display: none !important; }`;
          document.head.appendChild(s);
        }
      });
    }
    try {
      const selector = sec.selector.split(",")[0].trim();
      const fallback = sec.selector.includes(",") ? sec.selector.split(",")[1].trim() : null;

      let locator = page.locator(selector);
      let found = await locator.count();

      if (found === 0 && fallback) {
        locator = page.locator(fallback);
        found = await locator.count();
      }

      if (found === 0) {
        console.error(`Skipped: ${sec.name} — no element found`);
        continue;
      }

      await locator.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);

      await locator.first().screenshot({ path: resolve(OUT_DIR, `${sec.name}.png`) });
      console.log(`Saved: ${sec.name}.png`);
    } catch (err) {
      console.error(`Failed: ${sec.name} — ${err.message}`);
    }
  }

  await browser.close();
  console.log("Done — all section screenshots saved.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
