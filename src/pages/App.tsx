import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppRoutes from '@routes/index';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();
const rootElement = document.getElementById('main');

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <AppRoutes />
          </Router>
          <Toaster toastOptions={{ duration: 2000, id: 'info' }} />
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
