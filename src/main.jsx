import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'

import Card from './components/TodoCard'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card >
    </Card>
  </StrictMode>,
)
