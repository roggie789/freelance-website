import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
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
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Get in Touch</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Have a project in mind? Let's discuss how I can help bring your vision
          to life.
        </Text>
      </Stack>

      <Container maxW={{ base: '3xl', xl: '4xl', '2xl': '5xl', '3xl': '6xl', '4xl': '7xl' }} mt={10}>
        <Stack
          spacing={{ base: 6, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack spacing={8} flex={1}>
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
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 