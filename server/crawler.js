const puppeteer = require('puppeteer');

async function crawler() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto('https://www.southwest.com/air/check-in/');
  await page.type('#confirmationNumber', '45453');
  await page.type('#passengerFirstName', 'John');
  await page.type('#passengerLastName', 'Smith');
  await page.click('#form-mixin--submit-button');
}
crawler();

module.exports = crawler;