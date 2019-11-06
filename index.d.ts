declare module 'detox-getprops' {
  import { element } from 'detox';

  export function getText(el: typeof element): Promise<string>;
  export function getProps(el: typeof element): Promise<object>;
  export function parseMessage(message: string): object;
}
