const {device, expect: expectDetox, element, by, waitFor} = require('detox');

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should work', async () => {
    await expectDetox(element(by.id('heading'))).toBeVisible();
  });
});
