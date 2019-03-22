var puppeteer = require("puppeteer");

(async function () {
    const url = `https://www.despegar.com.ar/shop/flights/search/roundtrip/BUE/MDZ/2019-05-05/2019-05-11/1/0/0/NA/NA/NA/NA/NA/?from=SB&di=1-0`;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitForSelector("buy-button");
    const bestPrice = await page.evaluate(() => {
        var elements = document.querySelectorAll('.main-content .fare-price .amount.price-amount');
        return elements.length ? elements[0].innerText : '0';
    });
    console.log(`Best price for Mendoza ${bestPrice}`);

    const clickElement = await page.evaluateHandle('document.querySelectorAll(".main-content buy-button:first-child A")[0]');
    await clickElement.click();
    await page.waitForSelector('.detail-total-amount .amount');
    const checkoutPrice = await page.evaluate('document.querySelectorAll(".detail-total-amount .amount")[0].innerText');

    console.log(`Final price for Mendoza ${checkoutPrice}`);

    await page.close();
    await browser.close();
})();