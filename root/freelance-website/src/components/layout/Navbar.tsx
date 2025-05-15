import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  useColorMode,
  Heading,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons'
import React from 'react'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash || '#home'
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  React.useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg={useColorModeValue('gray.900', 'gray.900')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('cyan.400', 'cyan.700')}
      shadow="md"
    >
      <Container maxW={{ base: '6xl', xl: '7xl', '2xl': '8xl', '3xl': '9xl', '4xl': '10xl' }} px={{ base: 4, md: 6 }}>
        <Flex
          h={{ base: 16, md: 20 }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flex alignItems="center">
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={6} h={6} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              mr={2}
            />
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Heading
                fontSize={{ base: 'xl', md: '3xl' }}
                fontWeight="bold"
                color={useColorModeValue('cyan.400', 'cyan.400')}
                letterSpacing="wider"
                _hover={{
                  color: useColorModeValue('cyan.300', 'cyan.300'),
                }}
              >
                Jack Buchanan
              </Heading>
            </Link>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack 
              direction={'row'} 
              spacing={{ base: 4, md: 8 }} 
              alignItems="center"
              display={{ base: 'none', md: 'flex' }}
            >
              {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                  <Link
                    p={2}
                    href={navItem.href}
                    onClick={(e) => handleNavClick(e, navItem.href)}
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="medium"
                    color={useColorModeValue('gray.100', 'gray.100')}
                    _hover={{
                      textDecoration: 'none',
                      color: useColorModeValue('cyan.400', 'cyan.300'),
                    }}
                  >
                    {navItem.label}
                  </Link>
                </Box>
              ))}
            </Stack>

            <Stack direction={'row'} spacing={4} ml={{ base: 2, md: 8 }}>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                size={{ base: 'sm', md: 'md' }}
              />
              <Button
                as={Link}
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact')
                  setTimeout(onToggle, 300)
                }}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight={600}
                color={'gray.900'}
                bg={'cyan.400'}
                _hover={{
                  bg: 'cyan.300',
                }}
                px={6}
                rounded={'full'}
                size={{ base: 'sm', md: 'md' }}
                shadow="md"
              >
                Get Started
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>

      {/* Mobile menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          p={4}
          display={{ md: 'none' }}
          bg={useColorModeValue('gray.900', 'gray.900')}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('cyan.400', 'cyan.700')}
        >
          <Stack as={'nav'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.label}
                p={2}
                href={navItem.href}
                onClick={(e) => {
                  handleNavClick(e, navItem.href)
                  setTimeout(onToggle, 300)
                }}
                fontSize="lg"
                fontWeight="medium"
                color={useColorModeValue('gray.100', 'gray.100')}
                borderRadius="md"
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('cyan.400', 'cyan.300'),
                }}
              >
                {navItem.label}
              </Link>
            ))}
            <Button
              as={Link}
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, '#contact')
                setTimeout(onToggle, 300)
              }}
              fontSize="lg"
              fontWeight={600}
              color={'gray.900'}
              bg={'cyan.400'}
              _hover={{
                bg: 'cyan.300',
              }}
              w="full"
              rounded={'full'}
              mt={2}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const handleSubNavClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const element = document.querySelector(href ?? '#')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link
      href={href ?? '#'}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
      onClick={handleSubNavClick}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  const handleMobileNavClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const element = document.querySelector(href ?? '#')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as="a"
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
        onClick={(e: React.MouseEvent<HTMLElement>) => handleMobileNavClick(e)}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link 
                key={child.label} 
                py={2} 
                href={child.href}
                onClick={(e: React.MouseEvent<HTMLElement>) => handleMobileNavClick(e)}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
} 