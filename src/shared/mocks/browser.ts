import handlers from '@/shared/mocks/handlers';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handlers);
