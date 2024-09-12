interface MockLocalStorage {
  getItem: jest.Mock<string | null, [string]>;
  setItem: jest.Mock<void, [string, string]>;
  clear: jest.Mock<void, []>;
  removeItem: jest.Mock<void, [string]>;
}

const mockLocalStorage = (() => {
  let store: { [key: string]: string } = {};

  const mock: MockLocalStorage = {
    getItem: jest.fn((key: string): string | null => store[key] || null),
    setItem: jest.fn((key: string, value: string): void => {
      store[key] = value;
    }),
    clear: jest.fn((): void => {
      store = {};
    }),
    removeItem: jest.fn((key: string): void => {
      delete store[key];
    }),
  };

  return mock;
})();

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

export default mockLocalStorage;
