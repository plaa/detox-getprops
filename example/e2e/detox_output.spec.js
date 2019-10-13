const {device, expect: expectDetox, element, by, waitFor} = require('detox');

describe('Detox output', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should log the output', async () => {
    try {
      await expectDetox(element(by.id('heading'))).toHaveText('_NOT_PRESENT_');
    } catch (e) {
      const msg = e.message.toString();
      console.log('OUTPUT: ' + msg);
    }
  });
});
