import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProgressProvider } from './context/ProgressContext';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import './ui.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);