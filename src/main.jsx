import React from 'react'
import { createRoot } from 'react-dom/client'
import { Details } from './pages/Details'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
