import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import { Box } from '@chakra-ui/react'
import theme from './theme'

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Router>
          <Box w="100%" minH="100vh">
            <Navbar />
            <Box as="main" w="100%">
              <Home />
            </Box>
            <Footer />
          </Box>
        </Router>
      </ChakraProvider>
    </>
  )
}

export default App
