const fs = require('fs');
const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.ambito.com/contenidos/dolar-oficial.html');
    const cotizacion = await page.evaluate(() => document.querySelector(".data-venta").innerText);
    await browser.close();

    res.json({ dolar: cotizacion });
});

module.exports = router;
