module.exports = async (page, scenario, vp) => {
    const iframe = await page.frames()[1];
    await iframe.waitForSelector("input[name='number']");
  };
  