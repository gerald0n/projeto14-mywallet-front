import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './styles/ResetStyle.js'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <ResetStyle />
         <GlobalStyle />
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
