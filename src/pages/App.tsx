import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppRoutes from '@routes/index';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import DataContainer from '@layouts/DataContainer';
import WalletProvider from '@layouts/WalletProvider';
import '../locales/i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 3,
      refetchOnWindowFocus: true,
    },
  },
});
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
    MuiTooltip: {
      styleOverrides: {
        tooltipPlacementBottom: {
          marginTop: '0px !important',
        },
      },
    },
  },
});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
      <WalletProvider>
        <DataContainer />
      </WalletProvider>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router>
            <AppRoutes />
          </Router>
          <Toaster
            toastOptions={{
              duration: 2000,
              style: {
                fontSize: '12px',
                padding: '4px 8px',
              },
            }}
          />
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
