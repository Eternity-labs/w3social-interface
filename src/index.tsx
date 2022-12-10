import { createRoot } from 'react-dom/client';
import App from '@pages/App';
import works from '../mocks/browser';
import './wdyr';

import '@assets/styles/base.css';

if (process.env.NODE_ENV === 'development') {
  works.start();
}
createRoot(document.querySelector('#main')!).render(<App />);
