import { createRoot } from 'react-dom/client';

import App from '@pages/App';
import 'normalize.css';

import '@assets/styles/base.css';

createRoot(document.querySelector('#main')!).render(<App />);
