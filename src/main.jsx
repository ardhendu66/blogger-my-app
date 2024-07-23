import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import UserProvider from './context/UserContext.jsx';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <UserProvider>
      <App />
      <ToastContainer />
    </UserProvider>
  </React.Fragment>,
)