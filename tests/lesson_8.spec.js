const { test, expect } = require("@playwright/test");

test("Поиск по сайту", async ({ page }) => {
  await page.goto("https://www.labirint.ru");
  await page.locator(".cookie-policy button").click();
  await page.locator("#search-field").fill("javascript");
  await page.locator("#search-field").press("Enter");
  const card = page.locator(".product-card").first();
  const price = (await card.locator(".product-card__price-current").textContent()).trim();
  await card.locator(".buy-link").click();
  await page.goto("https://www.labirint.ru/cart");
  await expect(page.locator(".b-dotted-im-e-val").last()).toHaveText(price);
});