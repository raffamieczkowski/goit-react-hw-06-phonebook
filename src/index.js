import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './components/store/contactsSlice';

import App from './components/App';
import './index.css';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
