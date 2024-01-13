import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/routes.jsx'

import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>,
)
