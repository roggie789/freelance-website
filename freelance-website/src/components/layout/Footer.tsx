import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={{ base: '6xl', xl: '7xl', '2xl': '8xl', '3xl': '9xl', '4xl': '10xl' }}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2024 Your Name. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href="#" isExternal color="gray.500" _hover={{ color: 'blue.500' }}>
            <FaTwitter size="20px" />
          </Link>
          <Link href="#" isExternal color="gray.500" _hover={{ color: 'blue.500' }}>
            <FaGithub size="20px" />
          </Link>
          <Link href="#" isExternal color="gray.500" _hover={{ color: 'blue.500' }}>
            <FaLinkedin size="20px" />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
} 