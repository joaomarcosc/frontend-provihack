import ReactDOM from 'react-dom/client';
import App from './app';
import { StoresProvider } from 'stores';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <StoresProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoresProvider>
  </QueryClientProvider>
);
