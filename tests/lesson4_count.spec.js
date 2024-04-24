const { test, expect } = require('@playwright/test');

test('check count task', async({ page }) => {
    await page.goto('https://sky-todo-list.herokuapp.com/', {waitUntil: "networkidle"});
    const rows = await page.locator("tr").count()
    console.log(rows)

});