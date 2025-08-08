import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

// start coding
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* browse route */}
    <BrowserRouter>
    {/* link of main page */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)