import { setupWorker } from 'msw';
import handles from './handlers';

export const worker = setupWorker(...handles);
