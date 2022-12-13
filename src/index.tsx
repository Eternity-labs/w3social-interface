import { createRoot } from 'react-dom/client';
import App from '@pages/App';
import '@apis/index';
import './wdyr';

import '@assets/styles/base.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../mocks/browser');
  worker.start();
}
createRoot(document.querySelector('#main')!).render(<App />);
