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

  it('should show results after searching a keyword', async () => {
    element(by.id('search-input')).typeText('spider');
    await element(by.id('search-button')).tap();
    expect(element(by.id('character-list'))).toBeVisible();
  });

  it('results should be scrollable after searching a keyword', async () => {
    element(by.id('search-input')).typeText('spider');
    await element(by.id('search-button')).tap();
    await expect(element(by.id('character-list'))).toBeVisible();
    await element(by.id('character-list')).scrollTo('bottom');
  });
});
