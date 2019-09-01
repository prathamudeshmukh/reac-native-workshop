describe('Test Search Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have search input in the screen', async () => {
    await expect(element(by.id('search-input'))).toBeVisible();
  });

  it('should have search button in the screen', async () => {
    await expect(element(by.id('search-button'))).toBeVisible();
  });

});
