import handlers from '@/shared/mocks/handlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
