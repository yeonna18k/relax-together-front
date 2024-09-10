import handlers from '@/shared/mock/handlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
