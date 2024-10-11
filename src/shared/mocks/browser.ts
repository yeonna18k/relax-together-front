import handlers from '@/shared/mocks/handlers/index';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handlers);
