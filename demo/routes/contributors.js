var express = require('express');
var puppeteer = require('puppeteer');
var router = express.Router();

router.get('/:owner/:repo', async (req, res, next) => {
  const contributorsPage = `https://github.com/${req.params.owner}/${req.params.repo}/graphs/contributors`;

  const browser = await puppeteer.launch({ headless : true});
  const page = await browser.newPage();

  await page.goto(contributorsPage);
	await page.waitForSelector(".contrib-person");
  const element = await page.$("#contributors");
  var image = await element.screenshot();

  await page.close();
  await browser.close();

  res.set('Content-Type', 'image/png');
  res.send(image);
});

module.exports = router;
