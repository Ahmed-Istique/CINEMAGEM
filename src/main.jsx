import React from 'react'; // Import React for JSX
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './Store/Store.jsx';

// Axios Setup with Environment Variable Access (Vite-Specific)
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers['Authorization'] = `Bearer ${import.meta.env.VITE_REACT_APP_API_ACCESS_TOKEN}`;

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);