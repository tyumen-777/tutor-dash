import { CssBaseline, ThemeProvider } from '@mui/material'
import { router } from './router/router'
import { RouterProvider } from 'react-router-dom'
import { theme } from './styles/theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
