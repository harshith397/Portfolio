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
    lerp: 0.05,
    wheelMultiplier: 0.3,
    syncTouch: true,        // For newer versions of Lenis
    smoothTouch: true,      // Fallback fallback if using an older package version
    touchMultiplier: 1.8,
  }}>
      <App />
    </ReactLenis>
  </StrictMode>,
)
