import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ViewportProvider } from './contexts/viewportContext.tsx'
import { LanguageProvider } from './contexts/languageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewportProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ViewportProvider>
  </StrictMode>,
)
