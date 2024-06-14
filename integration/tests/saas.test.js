const { Helper } = require("./helper")
const {
  setFullHeightScreenshot,
  treshHoldSettings,
  beforeAllHandler,
  defaultWaitTime,
} = Helper


describe("SaaS", () => {
  beforeAll(async (done) => {
    await beforeAllHandler(page, "saas--saas")
    done()
  }, 30000)

  it("desktop looks correct", async () => {
    await setFullHeightScreenshot(page, 1920)
    await page.waitFor(12000)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(treshHoldSettings())
  }, 30000)


  it("tablet looks correct", async () => {
    await setFullHeightScreenshot(page, 600)
    await page.waitFor(defaultWaitTime)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(treshHoldSettings())
  }, 30000)


  it("mobile looks correct", async () => {
    await setFullHeightScreenshot(page, 320)
    await page.waitFor(defaultWaitTime)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(treshHoldSettings())
  }, 30000)

})

