import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root
  options={{
    lerp: 0.08,
    wheelMultiplier: 0.5,
  }}>
      <App />
    </ReactLenis>
  </StrictMode>,
)