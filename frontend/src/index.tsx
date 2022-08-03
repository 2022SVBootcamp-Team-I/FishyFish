import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./redux/store";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider} from "react-query";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider> 
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);
