const { test, expect } = require("@playwright/test");
const {MainPage} = require('../pages/mainPage'); // импортнули наш класс
const {ResultPage} = require('../pages/resultPage');
const {CartPage} = require('../pages/cartPage');


test("Поиск по сайту", async ({ page }) => {
    const mainPage = new MainPage(page); // создаем новый экземпляр и прокидываем в него page
    const resultPage = new ResultPage(page);
    const cartPage = new CartPage(page);

    mainPage.openPage(); // а вот и наши методы работы со страницей
    mainPage.searchFor("Javascript");
  
    const priceToBe = await resultPage.getPriceForItem(0);
    await resultPage.addItemToCart(0);

    await cartPage.openPage();
    await cartPage.checkTotalPrice(priceToBe)
  });

test("Поиск по сайту (пустая выдача)", async ({ page }) => {
  const mainPage = new MainPage(page); 
  const resultPage = new ResultPage(page);
  const cartPage = new CartPage(page);

  mainPage.openPage(page);
  mainPage.searchFor("Эйяфьядлайёкюдль");

  await resultPage.checkEmptySearchResultIsPresent("Мы ничего не нашли по вашему запросу! Что делать?");

  await cartPage.openPage();
  await cartPage.checkEmptyCartMessageIsPresent("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?")
  // запомнили первую карточку товара
  //await expect(page.locator("h1").first()).toHaveText("Мы ничего не нашли по вашему запросу! Что делать?")
  //await openCart(page)
  //await expect(page.locator("#basket-step1-default .g-alttext-small.g-alttext-grey.g-alttext-head").first()).toHaveText("ВАША КОРЗИНА ПУСТА. ПОЧЕМУ?", {ignoreCase: true})
});


test("Название", async ({page}) => {
  // тут шаги
})

