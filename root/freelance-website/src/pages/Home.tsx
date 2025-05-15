import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  createIcon,
  Flex,
  SimpleGrid,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Image,
  Link,
  Divider,
  chakra,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckIcon, InfoIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/easy-steps-of-web-development-process.jpg'
import emailjs from '@emailjs/browser'
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaUser } from 'react-icons/fa'

// Placeholder for hero device mockup and geometric graphics
const Placeholder = ({ label }: { label: string }) => (
  <Flex
    align="center"
    justify="center"
    bg={useColorModeValue('gray.200', 'gray.700')}
    color={useColorModeValue('gray.500', 'gray.400')}
    borderRadius="2xl"
    minH={{ base: '180px', md: '340px', lg: '420px' }}
    w="full"
    fontSize="xl"
    fontWeight="bold"
    border="2px dashed"
    borderColor={useColorModeValue('gray.300', 'gray.600')}
  >
    {label}
  </Flex>
)

// Create motion components
const MotionBox = motion.create(Box)
const MotionStack = motion(Stack)
const MotionSimpleGrid = motion(SimpleGrid)

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}
const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const toast = useToast()

  // --- HERO SECTION ---
  // Headline, subheadline, device mockup, geometric bg (placeholder)
  // Button scrolls to contact

  // --- INTRO/FEATURE SECTION ---
  // Two feature cards: Get Started, Explore Our Work
  const introFeatures = [
    {
      icon: <Icon as={InfoIcon} w={8} h={8} color="cyan.400" />,
      title: 'Get Started',
      text: 'Kick off your project with a free consultation and discover how I can help you succeed.',
    },
    {
      icon: <Icon as={StarIcon} w={8} h={8} color="cyan.400" />,
      title: 'Explore Our Work',
      text: 'See examples of our custom web solutions and the results we deliver for clients.',
    },
  ]

  // --- WEB SOLUTIONS SECTION ---
  // Two large cards: Custom Web Development, Start a Project
  const webSolutions = [
    {
      title: 'Custom Web Development',
      text: 'Cutting-edge solutions tailored to your business needs, using the latest technologies.',
      button: 'See Solutions',
    },
    {
      title: 'Start a Project',
      text: "Ready to transform your ideas into reality? Let's discuss your vision and goals.",
      button: 'Contact Us',
    },
  ]

  // --- EXPERTISE/SERVICES SECTION ---
  // Four cards, use your service/feature content
  const expertise = [
    {
      icon: <Icon as={CheckIcon} w={8} h={8} color="cyan.400" />,
      title: 'Responsive Design',
      text: 'Seamless user experience on all devices.',
    },
    {
      icon: <Icon as={CheckIcon} w={8} h={8} color="cyan.400" />,
      title: 'Custom Development',
      text: 'Built from scratch to suit your unique requirements.',
    },
    {
      icon: <Icon as={CheckIcon} w={8} h={8} color="cyan.400" />,
      title: 'Cutting-Edge Tech',
      text: 'Modern frameworks, scalable architecture, and robust security.',
    },
    {
      icon: <Icon as={CheckIcon} w={8} h={8} color="cyan.400" />,
      title: 'Personalized Approach',
      text: 'Direct communication and tailored support throughout.',
    },
  ]

  // --- PROJECT TYPES SECTION ---
  // Four cards: Mobile App Design, Web App Design, App Development, Tailored Solutions
  const projectTypes = [
    {
      icon: <Icon as={StarIcon} w={8} h={8} color="cyan.400" />,
      title: 'Mobile Responsive Design',
      text: 'Intuitive, engaging mobile experiences for iOS and Android.',
    },
    {
      icon: <Icon as={StarIcon} w={8} h={8} color="cyan.400" />,
      title: 'Web App Design',
      text: 'Modern, scalable web applications for any business need.',
    },
    {
      icon: <Icon as={StarIcon} w={8} h={8} color="cyan.400" />,
      title: 'App Development',
      text: 'Full-stack development from concept to launch.',
    },
    {
      icon: <Icon as={StarIcon} w={8} h={8} color="cyan.400" />,
      title: 'Tailored Solutions',
      text: 'Custom integrations and unique features for your business.',
    },
  ]

  // --- CLIENTS/COLLABORATION SECTION ---
  // Placeholder cards for client logos
  const clients = [
    { name: 'Shell', logo: null },
    { name: 'Coca-Cola', logo: null },
    { name: 'Google', logo: null },
  ]

  // --- CONTACT FORM ---
  // TODO: Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_exeu1i9';
  const EMAILJS_TEMPLATE_ID = 'template_s7pt0mb';
  const EMAILJS_PUBLIC_KEY = 'bPW2rYI6IGLAYJBXU';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      toast({
        title: 'Message sent!',
        description: "I'll get back to you as soon as possible.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} color={useColorModeValue('black', 'gray.100')} w="full" overflowX="hidden">
      {/* HERO SECTION */}
      <MotionBox
        id="home"
        scrollMarginTop={{ base: '72px', md: '88px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <Container maxW="7xl" py={{ base: 12, md: 24 }}>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={12}>
            <Stack flex={1} spacing={8}>
              <Text fontSize="sm" color={useColorModeValue('blue.500', 'cyan.400')} fontWeight="bold" textTransform="uppercase" letterSpacing="wider">
                <Box as="span" color={useColorModeValue('blue.500', 'cyan.400')}>jack buchanan / web developer</Box>
              </Text>
              <Heading as="h1" size="2xl" fontWeight="extrabold" lineHeight={1.1} color={useColorModeValue('black', 'gray.100')}>
                Making your <br /> web designs a reality
              </Heading>
              <Text fontSize="xl" color={useColorModeValue('gray.700', 'gray.400')}>
                Transform your ideas into reality with custom web solutions, modern design, and expert deployment.
              </Text>
              <Button
                colorScheme={useColorModeValue('blue', 'cyan')}
                size="lg"
                rounded="full"
                px={8}
                alignSelf="flex-start"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </Stack>
            <Box flex={1} maxW="lg" w="full">
              {/* Device mockup placeholder */}
              <Placeholder label="Device Mockup Image" />
              {/* Geometric/tech graphics placeholder */}
              <Box mt={4}>
                <Placeholder label="Geometric/Tech Graphics" />
              </Box>
            </Box>
          </Flex>
        </Container>
      </MotionBox>

      {/* INTRO/FEATURE SECTION */}
      <MotionBox
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('white', 'gray.800')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInRight}
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {introFeatures.map((f, i) => (
              <Box
                key={i}
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor={useColorModeValue('blue.400', 'gray.700')}
                textAlign="center"
                minH="220px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box color={useColorModeValue('blue.400', 'cyan.400')}>{f.icon}</Box>
                <Heading as="h3" size="lg" mt={4} mb={2} color={useColorModeValue('blue.500', 'cyan.400')}>{f.title}</Heading>
                <Text fontSize="lg" color={useColorModeValue('black', 'gray.100')}>{f.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </MotionBox>

      {/* WEB SOLUTIONS SECTION */}
      <MotionBox
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('white', 'gray.900')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <Container maxW="6xl">
          <Text fontSize="sm" color={useColorModeValue('blue.500', 'cyan.400')} fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
            We specialize in
          </Text>
          <Heading as="h2" size="xl" mb={10} color={useColorModeValue('black', 'gray.100')}>
            Cutting-edge Web Solutions
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {webSolutions.map((ws, i) => (
              <Box
                key={i}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="2xl"
                p={10}
                border="1px solid"
                borderColor={useColorModeValue('blue.400', 'gray.700')}
                minH="260px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
              >
                <Heading as="h3" size="lg" color={useColorModeValue('blue.500', 'cyan.400')} mb={4}>{ws.title}</Heading>
                <Text fontSize="lg" mb={6} color={useColorModeValue('black', 'gray.100')}>{ws.text}</Text>
                <Button colorScheme={useColorModeValue('blue', 'cyan')} variant="outline" rounded="full">{ws.button}</Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </MotionBox>

      {/* EXPERTISE/SERVICES SECTION */}
      <MotionBox
        id="services"
        scrollMarginTop={{ base: '72px', md: '88px' }}
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('white', 'gray.900')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInRight}
      >
        <Container maxW="7xl">
          <Text fontSize="sm" color={useColorModeValue('blue.500', 'cyan.400')} fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
            Our Expertise
          </Text>
          <Heading as="h2" size="xl" mb={10} color={useColorModeValue('black', 'gray.100')}>
            Proven Expertise in Web Development
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {expertise.map((ex, i) => (
              <Box
                key={i}
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor={useColorModeValue('blue.400', 'gray.700')}
                minH="220px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Box color={useColorModeValue('blue.400', 'cyan.400')}>{ex.icon}</Box>
                <Heading as="h3" size="md" mt={4} mb={2} color={useColorModeValue('blue.500', 'cyan.400')}>{ex.title}</Heading>
                <Text fontSize="lg" color={useColorModeValue('black', 'gray.100')}>{ex.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </MotionBox>

      {/* PROJECT TYPES SECTION */}
      <MotionBox
        id="get-started"
        scrollMarginTop={{ base: '72px', md: '88px' }}
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('white', 'gray.800')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <Container maxW="6xl">
          <Text fontSize="sm" color={useColorModeValue('blue.500', 'cyan.400')} fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
            Get Started
          </Text>
          <Heading as="h2" size="xl" mb={10} color={useColorModeValue('black', 'gray.100')}>
            Let's Discuss Your Project
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {projectTypes.map((pt, i) => (
              <Box
                key={i}
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor={useColorModeValue('blue.400', 'gray.700')}
                minH="220px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Box color={useColorModeValue('blue.400', 'cyan.400')}>{pt.icon}</Box>
                <Heading as="h3" size="md" mt={4} mb={2} color={useColorModeValue('blue.500', 'cyan.400')}>{pt.title}</Heading>
                <Text fontSize="lg" color={useColorModeValue('black', 'gray.100')}>{pt.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </MotionBox>

      {/* CLIENTS/COLLABORATION SECTION */}
      <MotionBox
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('white', 'gray.900')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInRight}
      >
        <Container maxW="5xl">
          <Text fontSize="sm" color={useColorModeValue('blue.500', 'cyan.400')} fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
            Trusted by
          </Text>
          <Heading as="h2" size="xl" mb={10} color={useColorModeValue('black', 'gray.100')}>
            Collaborate with Industry Leaders
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
            {clients.map((client, i) => (
              <Box
                key={i}
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor={useColorModeValue('blue.400', 'gray.700')}
                minH="120px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                {/* Placeholder for client logo */}
                <Placeholder label={`${client.name} Logo`} />
              </Box>
            ))}
          </SimpleGrid>
          <Flex justify="center">
            <Button colorScheme={useColorModeValue('blue', 'cyan')} size="lg" rounded="full">
              Get in Touch
            </Button>
          </Flex>
        </Container>
      </MotionBox>

      {/* CONTACT SECTION */}
      <MotionBox
        id="contact"
        scrollMarginTop={{ base: '72px', md: '88px' }}
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('white', 'gray.800')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInLeft}
      >
        <Container maxW="4xl">
          <Text fontSize="sm" color={useColorModeValue('blue.500', 'cyan.400')} fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={2}>
            Contact
          </Text>
          <Heading as="h2" size="xl" mb={10} color={useColorModeValue('black', 'gray.100')}>
            Get in Touch
          </Heading>
          <Box bg={useColorModeValue('white', 'gray.700')} borderRadius="2xl" p={8} border="1px solid" borderColor={useColorModeValue('blue.400', 'gray.700')}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {/* Personal Info */}
              <Stack spacing={6} justify="center">
                <Stack direction="row" align="center" spacing={3}>
                  <Box color={useColorModeValue('blue.400', 'cyan.400')}><FaUser /></Box>
                  <Text fontWeight="bold" color={useColorModeValue('black', 'gray.100')}>Jack Buchanan</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={3}>
                  <Box color={useColorModeValue('blue.400', 'cyan.400')}><EmailIcon /></Box>
                  <Text color={useColorModeValue('black', 'gray.100')} fontWeight="medium">jack.buchanan789@gmail.com</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={3}>
                  <Box color={useColorModeValue('blue.400', 'cyan.400')}><PhoneIcon /></Box>
                  <Text color={useColorModeValue('black', 'gray.100')} fontWeight="medium">07939984141</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={3}>
                  <Box color={useColorModeValue('blue.400', 'cyan.400')}><FaMapMarkerAlt /></Box>
                  <Text color={useColorModeValue('black', 'gray.100')}>Essex, England</Text>
                </Stack>
              </Stack>
              {/* Contact Form */}
              <Box>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <FormControl id="name" isRequired>
                      <FormLabel>Your Name</FormLabel>
                      <Input name="name" value={formData.name} onChange={handleChange} color={useColorModeValue('black', 'gray.100')} />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel>Your Email</FormLabel>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} color={useColorModeValue('black', 'gray.100')} />
                    </FormControl>
                    <FormControl id="subject">
                      <FormLabel>Subject</FormLabel>
                      <Input name="subject" value={formData.subject} onChange={handleChange} color={useColorModeValue('black', 'gray.100')} />
                    </FormControl>
                    <FormControl id="message" isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea name="message" rows={5} value={formData.message} onChange={handleChange} color={useColorModeValue('black', 'gray.100')} />
                    </FormControl>
                    <Button colorScheme={useColorModeValue('blue', 'cyan')} size="lg" rounded="full" type="submit">
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </MotionBox>
    </Box>
  )
}

const Feature = ({ title, text, icon }: any) => {
  return (
    <Box
      maxW={{ base: '445px', '2xl': '500px' }}
      w={'full'}
      h="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      display="flex"
      flexDirection="column"
    >
      <Stack spacing={4} flex="1">
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('brand.400', 'brand.500')}
          mb={1}
        >
          {icon}
        </Flex>
        <Heading fontSize={'2xl'}>{title}</Heading>
        <Text color={'gray.600'} fontSize={{ base: 'md', md: 'lg' }} flex="1">{text}</Text>
      </Stack>
    </Box>
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

const StarIcon = createIcon({
  displayName: 'StarIcon',
  viewBox: '0 0 24 24',
  d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
})

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
})

interface ServiceCardProps {
  id?: string
  title: string
  icon: React.ReactElement
  description: string
  features: string[]
}

const ServiceCard = ({ id, title, icon, description, features }: ServiceCardProps) => {
  return (
    <Box
      id={id}
      maxW={{ base: '445px', '2xl': '500px' }}
      w={'full'}
      h="full"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      display="flex"
      flexDirection="column"
    >
      <Stack spacing={4} flex="1">
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('brand.400', 'brand.500')}
          mb={1}
        >
          {icon}
        </Flex>
        <Heading fontSize={'2xl'}>{title}</Heading>
        <Text color={'gray.600'} fontSize={{ base: 'md', md: 'lg' }} flex="1">{description}</Text>
        <Stack spacing={2} mt="auto">
          {features.map((feature, index) => (
            <HStack key={index} align={'top'}>
              <Icon as={CheckIcon} color={'brand.400'} w={5} h={5} />
              <Text fontSize={{ base: 'md', md: 'lg' }}>{feature}</Text>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
} 