const { chromium } = require("@playwright/test");

async function startReboot() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://en.wikipedia.org/wiki/Algebra");

  // telling playwright to get the first heading on the page we are landing it on and to get the text of that heading

  // const headingText = await page.locator("#firstHeading").innerText();
  const firstParagraph = await page.locator("#mwDw").innerText();

  console.log("--------------");
  console.log("algebra definition: ", firstParagraph);

  console.log("--------------");

  await page.screenshot({ path: "reboot.png" });

  await browser.close();
}

startReboot();
