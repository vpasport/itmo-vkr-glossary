import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet'

import { GlobalContextProvider } from '@/contexts'

import reportWebVitals from './reportWebVitals'
import { MainRouter } from './routers'

import './main.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Глоссарий</title>
      <link rel="icon" href="/logo.png" />
    </Helmet>
    <GlobalContextProvider>
      <MainRouter />
    </GlobalContextProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
