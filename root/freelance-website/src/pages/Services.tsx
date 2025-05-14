import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function Services() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>My Services</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Comprehensive web development services to help your business grow online
        </Text>
      </Stack>

      <Container maxW={{ base: '6xl', xl: '7xl', '2xl': '8xl', '3xl': '9xl', '4xl': '10xl' }} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }} spacing={10}>
          <ServiceCard
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
          <ServiceCard
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
          <ServiceCard
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
        </SimpleGrid>
      </Container>
    </Box>
  )
}

interface ServiceCardProps {
  title: string
  icon: React.ReactElement
  description: string
  features: string[]
}

const ServiceCard = ({ title, icon, description, features }: ServiceCardProps) => {
  return (
    <Box
      maxW={{ base: '445px', '2xl': '500px' }}
      w={'full'}
      bg={'white'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
    >
      <Stack>
        <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
        >
          Service
        </Text>
        <Heading
          color={'gray.700'}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {title}
        </Heading>
        <Text color={'gray.500'}>{description}</Text>
      </Stack>

      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <VStack align={'start'}>
            {features.map((feature, index) => (
              <HStack key={index} align={'top'}>
                <Icon as={CheckIcon} color={'green.400'} w={5} h={5} />
                <Text color={'gray.600'}>{feature}</Text>
              </HStack>
            ))}
          </VStack>
        </Stack>
      </Stack>
    </Box>
  )
} 