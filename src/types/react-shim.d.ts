declare module 'react' {
  export type ReactNode = any;
  export function createContext<T>(defaultValue?: T): any;
  export function useContext<T>(ctx: any): T;
  export function useEffect(effect: (...args: any[]) => any, deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useState<S>(initialState: S | (() => S)): [S, (s: S) => void];
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
