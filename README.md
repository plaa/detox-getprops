# detox-getprops

Allows fetching an element text / properties using [Detox](https://github.com/wix/Detox).

The standard Detox API allows fetching element text / attributes on iOS using the [`getAttributes`](https://github.com/wix/Detox/blob/DetoxNext/docs/APIRef.ActionsOnElement.md#getAttributes--ios-only) method, but Android currently has no standard way of fetching element text. This package works on both.

Installation:

```
npm install --save-dev detox detox-getprops
```

Usage:

```
const { getText } = require('detox-getprops');

const text = await getText(element(by.id('heading')));
expect(text).toEqual('Step One');
```

See also a [full example](https://github.com/plaa/detox-getprops-example/blob/master/e2e/example.spec.js) in [its own repo](https://github.com/plaa/detox-getprops-example).

## Good to know

This is a horrible hack/workaround inspired by this [Stack Overflow answer](https://stackoverflow.com/a/57191290/412896).

It searches for text that is _not_ present in the element, catches the resulting exception, and parses the platform-dependent error message for the element properties.

This package should not be used once [Detox #2083](https://github.com/wix/Detox/issues/2083) is resolved.

## Methods

### getText

`getText` returns a promise for the text from a `<Text>` element. Usage example `await getText(element(by.id('heading')))`.

Using `getText` on a non-`<Text>` element is platform-dependent: on iOS it returns the text content of the sub-elements, on Android it returns `undefined`.

### getProps

`getProps` returns a promise for some properties of the element (which can also be a non-`<Text>` element). Usage example `await getProps(element(by.id('myview')))`.

The properties are highly platform-dependent. The only common fields are `type` (the underlying component type), `device` (either `android` or `ios`) and `text` (the text content returned by `getText`).

Example Android output:

```
{
    id: '15',
    visibility: 'VISIBLE',
    width: '954',
    height: '85',
    'has-focus': 'false',
    'has-focusable': 'false',
    'has-window-focus': 'true',
    'is-clickable': 'false',
    'is-enabled': 'true',
    'is-focused': 'false',
    'is-focusable': 'false',
    'is-layout-requested': 'false',
    'is-selected': 'false',
    'layout-params': 'android.view.ViewGroup$LayoutParams@92e27dd',
    tag: 'heading',
    'root-is-layout-requested': 'false',
    'has-input-connection': 'false',
    x: '63.0',
    y: '84.0',
    text: 'Step One',
    'input-type': '0',
    'ime-target': 'false',
    device: 'android',
    type: 'ReactTextView'
}
```

Example iOS output:

```
{
    AX: 'Y',
    'AX.id': 'heading',
    'AX.label': 'Step One',
    'AX.frame': '{{24, 260}, {366, 29.5}}',
    'AX.activationPoint': '{207, 274.75}',
    'AX.traits': 'UIAccessibilityTraitStaticText',
    'AX.focused': 'N',
    frame: '{{24, 0}, {366, 29.5}}',
    device: 'ios',
    type: 'RCTTextView',
    text: 'Step One'
}
```

The properties are what they are. Don't ask for more.

## License

ISC license.
