describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should work', async () => {
    await expect(element(by.id('heading'))).toBeVisible();
  });
});
