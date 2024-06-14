const { Helper } = require("./helper")
const {
  setFullHeightScreenshot,
  treshHoldSettings,
  beforeAllHandler,
  defaultWaitTime,

} = Helper

describe("one-feedback-block", () => {
  beforeAll(async (done) => {
    await beforeAllHandler(page, "one-feedback-block--one-feedback-block")
    done()
  }, 30000)


  it("desktop looks correct", async () => {
    await setFullHeightScreenshot(page, 1920)
    await page.waitFor(defaultWaitTime)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(treshHoldSettings())
  }, 20000)


  it("tablet looks correct", async () => {
    await setFullHeightScreenshot(page, 600)
    await page.waitFor(defaultWaitTime)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(treshHoldSettings())
  }, 20000)


  it("mobile looks correct", async () => {
    await setFullHeightScreenshot(page, 320)
    await page.waitFor(defaultWaitTime)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(treshHoldSettings())
  }, 20000)

})

