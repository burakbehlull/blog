import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/routes.jsx'
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import { store } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
