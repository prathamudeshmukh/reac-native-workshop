/* eslint-disable no-undef */
describe("Test Search Screen", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have search input in the screen", async () => {
    await expect(element(by.id("search-input"))).toBeVisible();
    element(by.id("search-input")).typeText("Spider");
    element(by.id("search-button")).tap();
    await expect(element(by.id("character-list"))).toBeVisible();
    element(by.id("character-list"))
      .atIndex(0)
      .tap();
    await expect(element(by.id("row")).atIndex(1)).toBeVisible();
    element(by.id("row"))
      .atIndex(1)
      .tap();
    await expect(element(by.id("character-desc"))).toBeVisible();
  });
});
