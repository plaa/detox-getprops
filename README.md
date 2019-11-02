# detox-getprops

Allows fetching an element text contents using [Detox](https://github.com/wix/Detox).

Installation:

```
npm install --save-dev detox detox-getprops
```

Usage:

```
const { getText } = require('detox-getprops');

const text = getText(element(by.id('heading')));
expect(text).toEqual('Step One');
```
