import '@testing-library/jest-dom';

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

