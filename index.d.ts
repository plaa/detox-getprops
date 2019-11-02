declare module 'detox-getprops' {
  import { element } from 'detox';

  export function getText(el: typeof element): string;
  export function getProps(el: typeof element): any;
  export function parseMessage(message: string): any;
}
