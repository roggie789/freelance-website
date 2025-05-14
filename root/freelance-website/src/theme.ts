import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f5e6ff',
      100: '#d9b3ff',
      200: '#bf80ff',
      300: '#a64dff',
      400: '#8c1aff',
      500: '#7300e6',
      600: '#5900b3',
      700: '#400080',
      800: '#26004d',
      900: '#0d001a',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'brand.200' : 'brand.600',
        _hover: {
          color: props.colorMode === 'dark' ? 'brand.100' : 'brand.500',
        },
      }),
    },
  },
})

export default theme 