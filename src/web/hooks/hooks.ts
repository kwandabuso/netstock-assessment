import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { HomePage } from "../../../pages/HomePage";
import { ReservePage } from "../../../pages/Reservation";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let homePage: HomePage;
let reservePage: ReservePage;
let browser: Browser;
let context: BrowserContext;
let page: Page;
setDefaultTimeout(2000 * 100000);

Before(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  await page.goto("https://automationintesting.online/", { timeout: 90_000 });

  homePage = new HomePage();
  reservePage = new ReservePage();
});
After(async function () {
  // await browser.close();
});

export { homePage, page, reservePage };
