import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>
  </BrowserRouter>,
);