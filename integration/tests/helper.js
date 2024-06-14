const Helper = {
  setFullHeightScreenshot: async (page, width) => {
    await page.setViewport({ width, height: 0 })
    await page.waitFor(500)
    const height = await page.evaluate(() => document.body.scrollHeight)
    await page.setViewport({ width, height })
  },

  treshHoldSettings: () => ({
    failureThreshold: "0.01",
    failureThresholdType: "percent",
  }),

  beforeAllHandler: async (page, path) => {
    await page.goto(`http://localhost:6006/iframe.html?id=${path}`, { waitUntil: "load" })
    await page.waitFor(1000)
  },
  defaultWaitTime: 6000,
}

module.exports = { Helper }