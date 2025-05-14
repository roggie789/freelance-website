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
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/easy-steps-of-web-development-process.jpg'

// Create motion components
const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionSimpleGrid = motion(SimpleGrid)

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
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

  const handleScrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Message sent!',
      description: "I'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        py={{ base: 12, md: 28 }}
      >
        <Container maxW={{ base: '7xl', md: '6xl', lg: '7xl', xl: '8xl', '2xl': '9xl', '3xl': '10xl', '4xl': '11xl' }}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 20 }}
            py={{ base: 12, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            px={{ base: 4, md: 8, lg: 12 }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }} maxW={{ md: '2xl' }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blue.400',
                    zIndex: -1,
                  }}
                >
                  Professional
                </Text>
                <br />
                <Text as={'span'} color={'blue.400'}>
                  Website Development
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'lg', md: 'xl' }}>
                Transform your business with a custom website that stands out. I
                specialize in creating beautiful, responsive websites that help
                your business grow. From design to deployment, I handle every
                aspect of your web presence.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  onClick={handleScrollToContact}
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  _hover={{ bg: 'blue.500' }}
                >
                  Get Started
                </Button>
              </Stack>
            </Stack>
            <Stack
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Box
                position={'relative'}
                width={'full'}
                maxW="880px"
                sx={{
                  '&::before': {
                    content: '""',
                    display: 'block',
                    paddingTop: '61.818%', // 544/880 * 100 = 61.818% to maintain aspect ratio
                  }
                }}
                rounded={'2xl'}
                boxShadow={'2xl'}
                overflow={'hidden'}
              >
                <Image
                  src={heroImage}
                  alt="Web Development Process"
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.02)' }}
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </MotionBox>

      {/* Features Section */}
      <MotionBox
        py={{ base: 16, md: 32 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container maxW={{ base: '7xl', md: '6xl', lg: '7xl', xl: '8xl', '2xl': '9xl', '3xl': '10xl', '4xl': '11xl' }}>
          <MotionStack 
            spacing={4} 
            as={Container} 
            maxW={'3xl'} 
            textAlign={'center'} 
            mb={16}
            variants={fadeInUp}
          >
            <Heading fontSize={'3xl'}>Why Choose Me?</Heading>
            <Text color={'gray.600'} fontSize={{ base: 'lg', md: 'xl' }}>
              I provide comprehensive web development services tailored to your
              needs
            </Text>
          </MotionStack>

          <Flex justify="center">
            <MotionSimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={10} 
              maxW="1200px"
              width="100%"
              variants={staggerContainer}
            >
              <MotionBox variants={fadeInUp}>
                <Feature
                  icon={<Icon as={StarIcon} w={10} h={10} />}
                  title={'Custom Design'}
                  text={
                    'Unique, modern designs that reflect your brand identity and engage your audience.'
                  }
                />
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <Feature
                  icon={<Icon as={StarIcon} w={10} h={10} />}
                  title={'Responsive Development'}
                  text={
                    'Websites that work flawlessly across all devices, from mobile to desktop.'
                  }
                />
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <Feature
                  icon={<Icon as={StarIcon} w={10} h={10} />}
                  title={'Professional Deployment'}
                  text={
                    'Secure, fast, and reliable hosting with proper setup and maintenance.'
                  }
                />
              </MotionBox>
            </MotionSimpleGrid>
          </Flex>
        </Container>
      </MotionBox>

      {/* Services Section */}
      <MotionBox
        id="services"
        py={{ base: 16, md: 32 }}
        bg={useColorModeValue('gray.50', 'gray.900')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container maxW={{ base: '7xl', md: '6xl', lg: '7xl', xl: '8xl', '2xl': '9xl', '3xl': '10xl', '4xl': '11xl' }}>
          <MotionStack 
            spacing={4} 
            as={Container} 
            maxW={'3xl'} 
            textAlign={'center'} 
            mb={16}
            variants={fadeInUp}
          >
            <Heading fontSize={'3xl'}>My Services</Heading>
            <Text color={'gray.600'} fontSize={{ base: 'lg', md: 'xl' }}>
              Comprehensive web development services to help your business grow online
            </Text>
          </MotionStack>

          <Flex justify="center">
            <MotionSimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={10} 
              maxW="1200px"
              width="100%"
              variants={staggerContainer}
            >
              <MotionBox variants={fadeInUp}>
                <ServiceCard
                  id="services-design"
                  title={'Website Design'}
                  icon={<Icon as={CheckIcon} w={10} h={10} />}
                  description={
                    'Custom website design tailored to your brand and business needs. Modern, responsive designs that engage your audience.'
                  }
                  features={[
                    'Custom UI/UX Design',
                    'Responsive Layout',
                    'Brand Integration',
                    'Modern Design Trends',
                    'User-Focused Approach',
                  ]}
                />
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <ServiceCard
                  id="services-development"
                  title={'Website Development'}
                  icon={<Icon as={CheckIcon} w={10} h={10} />}
                  description={
                    'Professional development services using the latest technologies to create fast, secure, and scalable websites.'
                  }
                  features={[
                    'React/TypeScript Development',
                    'Performance Optimization',
                    'SEO Best Practices',
                    'Cross-browser Compatibility',
                    'Clean, Maintainable Code',
                  ]}
                />
              </MotionBox>
              <MotionBox variants={fadeInUp}>
                <ServiceCard
                  id="services-deployment"
                  title={'Website Deployment'}
                  icon={<Icon as={CheckIcon} w={10} h={10} />}
                  description={
                    'Secure and reliable deployment services to get your website live quickly and efficiently.'
                  }
                  features={[
                    'Hosting Setup',
                    'SSL Certificate',
                    'Domain Configuration',
                    'Performance Monitoring',
                    'Regular Backups',
                  ]}
                />
              </MotionBox>
            </MotionSimpleGrid>
          </Flex>
        </Container>
      </MotionBox>

      {/* Contact Section */}
      <MotionBox
        id="contact"
        py={{ base: 16, md: 32 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Container maxW={{ base: '7xl', md: '6xl', lg: '7xl', xl: '8xl', '2xl': '9xl', '3xl': '10xl', '4xl': '11xl' }}>
          <MotionStack 
            spacing={4} 
            as={Container} 
            maxW={'3xl'} 
            textAlign={'center'} 
            mb={16}
            variants={fadeInUp}
          >
            <Heading fontSize={'3xl'}>Get in Touch</Heading>
            <Text color={'gray.600'} fontSize={{ base: 'lg', md: 'xl' }}>
              Have a project in mind? Let's discuss how I can help bring your vision
              to life.
            </Text>
          </MotionStack>

          <Flex justify="center">
            <MotionStack
              spacing={{ base: 6, md: 10 }}
              direction={{ base: 'column', md: 'row' }}
              maxW="1200px"
              width="100%"
              variants={staggerContainer}
            >
              <MotionBox variants={fadeInUp} flex={1}>
                <Stack spacing={8}>
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                      <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="subject" isRequired>
                        <FormLabel>Subject</FormLabel>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="message" isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        colorScheme={'brand'}
                        bg={'brand.400'}
                        color={'white'}
                        _hover={{
                          bg: 'brand.500',
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </MotionBox>

              <MotionBox variants={fadeInUp} flex={1}>
                <Stack spacing={8}>
                  <Box>
                    <Heading fontSize={'2xl'}>Contact Information</Heading>
                    <Stack mt={4} spacing={4}>
                      <Text>
                        <strong>Email:</strong> your.email@example.com
                      </Text>
                      <Text>
                        <strong>Location:</strong> Your City, Country
                      </Text>
                      <Text>
                        <strong>Availability:</strong> Monday - Friday, 9:00 AM - 6:00 PM
                      </Text>
                    </Stack>
                  </Box>

                  <Box>
                    <Heading fontSize={'2xl'}>Follow Me</Heading>
                    <Stack mt={4} spacing={4}>
                      <Text>
                        <strong>LinkedIn:</strong>{' '}
                        <a href="#" style={{ color: 'var(--chakra-colors-brand-400)' }}>
                          linkedin.com/in/yourprofile
                        </a>
                      </Text>
                      <Text>
                        <strong>GitHub:</strong>{' '}
                        <a href="#" style={{ color: 'var(--chakra-colors-brand-400)' }}>
                          github.com/yourusername
                        </a>
                      </Text>
                      <Text>
                        <strong>Twitter:</strong>{' '}
                        <a href="#" style={{ color: 'var(--chakra-colors-brand-400)' }}>
                          twitter.com/yourhandle
                        </a>
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </MotionBox>
            </MotionStack>
          </Flex>
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