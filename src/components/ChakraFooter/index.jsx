import {
  Image,
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { FcAssistant } from 'react-icons/fc';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function ChakraFooter() {
  return (
    <Box
      bgGradient="linear(to-bl,#fff,#cce5e9)"
      //  bg="#cce5e9"
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={40}
        justify={'center'}
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={'center'}
      >
        <Stack spacing={4} backdropBlur="base">
          <Text fontFamily="EB Garamond,serif" fontSize="3xl">
            Are you infected by Corona?
          </Text>
          <Text color="gray.500" noOfLines={3}>
            People with COVID-19 have reported a wide range of issues from mild
            symptoms to severe illness. Symptoms may appear 2-14 days after
            exposure to the virus. If you have fever, cough, or other symptoms,
            you might have COVID-19.
          </Text>
          <Button
            as={'a'}
            href="/contact"
            size="md"
            height="48px"
            width="150px"
            border="2px"
            borderColor="#059bbd"
            leftIcon={<FcAssistant />}
            bg="#ECEBE4"
            variant="solid"
          >
            Contact us
          </Button>
        </Stack>
        <Stack
          display="flex"
          // w="xl"
          // h="180px"
          bg="#995666"
        >
          <Image
            src="images\covid_symptoms_headache.jpg"
            borderRadius="12px"
            border="6px dotted #059bbd"
            // boxSize="250px"
            height="12em"
            alt=" "
            objectFit="cover"
          />
        </Stack>
      </Container>

      {/* <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      ></Container> */}

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 | All rights reserved by Pamela Brahollari</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default ChakraFooter;
