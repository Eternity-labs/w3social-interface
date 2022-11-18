import { setupWorker } from 'msw';
import handles from './handlers';

const worker = setupWorker(...handles);
export default worker;
