import { server } from '@/shared/mock/node';
import '@testing-library/jest-dom';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
