import Main from '@pages/MainPage/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppRoutes from '@routes/index';
import { StyledEngineProvider } from '@mui/material/styles';

const queryClient = new QueryClient();
function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
      <StyledEngineProvider injectFirst>
        <Router>
          <AppRoutes />
        </Router>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
