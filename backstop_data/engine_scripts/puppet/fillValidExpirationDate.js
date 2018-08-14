module.exports = async (page, scenario, vp) => {
    const iframe = await page.frames()[1];
    await iframe.waitForSelector("input[name='number']");
    await iframe.focus("input[name='number']");
    await page.keyboard.press('4');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');
    await page.keyboard.press('1');

    await require('../sleep')(1000);

    await iframe.focus("input[name='expiration']");
    await page.keyboard.press('1');
    await page.keyboard.press('2');
    await page.keyboard.press('/');
    await page.keyboard.press('2');
    await page.keyboard.press('3');
  };