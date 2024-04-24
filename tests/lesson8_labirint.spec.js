const { test, expect } = require("@playwright/test");

test("Поиск по сайту", async ({ page }) => {
  await page.goto("https://www.labirint.ru");
  await page.locator(".cookie-policy button").click();
  await page.locator("#search-field").fill("Эйяфьядлайёкюдль");
  await page.locator("#search-field").press("Enter");
  await expect (page.locator("h1").first()).toHaveText("Мы ничего не нашли по вашему запросу! Что делать?");
  //const card = page.locator(".product-card").first();
  //const price = (await card.locator(".product-card__price-current").textContent()).trim();
  //await card.locator(".buy-link").click();
  await page.goto("https://www.labirint.ru/cart");
  await expect(page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first()).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})});