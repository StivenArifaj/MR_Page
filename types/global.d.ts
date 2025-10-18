export {};
declare global {
  interface Window {
    chatbase?: {
      (...args: any[]): void;
      q?: any[][];
    };
  }
}
