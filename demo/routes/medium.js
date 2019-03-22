var express = require('express');
var puppeteer = require('puppeteer');
var router = express.Router();

router.get('/:owner/:post', async (req, res, next) => {
  const postPage = `https://medium.com/${req.params.owner}/${req.params.post}`;

  const browser = await puppeteer.launch({ headless : true});
  const page = await browser.newPage();

  await page.goto(postPage);
  await page.waitForSelector("HEADER");
  await page.evaluate(() => {
    document.querySelector('HEADER').remove();
    document.querySelector('.js-postMetaLockup').remove();
  });
  const pdf = await page.pdf();

  await page.close();
  await browser.close();

  res.set('Content-Type', 'application/pdf');
  res.send(pdf);
});

module.exports = router;
