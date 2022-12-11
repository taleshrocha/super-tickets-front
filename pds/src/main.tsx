import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cadastrar from './Cadastrar'
import CreateEvent from './CreateEvent'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CreateEvent />
  </React.StrictMode>
)
