import {
  Box,
  Link,
  Stack,
  Badge,
  AspectRatio,
  Image,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Icon,
} from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';
import { StarIcon } from '@chakra-ui/icons';

function ChakraCard() {
  return (
    <Box
      m={'2'}
      display={{
        base: 'block',
        lg: 'flex',
      }}
      alignItems="center"
      width="100%"
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
    >
      <Box w={'25em'}>
        <Text
          fontFamily="Lato"
          border-block="1rem solid"
          writing-mode="horizontal-tb"
          direction="rtl"
          ml="30px"
          fontSize="30px"
        >
          Find Local COVID-19 Guidance
        </Text>
        <Text
          ml="30px"
          fontSize="16px"
          color="gray.600"
          fontFamily={'monospace'}
        >
          Learn what prevention steps you should take based on your community
          data.
        </Text>
      </Box>
      <Image
        w={'25em'}
        margin="0.2em 0"
        // width="460px"
        height="400px"
        src="./images/covid19_guidance.jpg"
        alt="covid19-guide"
        objectFit="cover"
      />
      <Box p="4">
        <Box mt={'-60px'}>
          <Badge
            m="12px 0"
            fontFamily={'unset'}
            px="22"
            bg="#65b0bd"
            borderRadius={'2px'}
            color={'white'}
            fontSize={'40'}
          >
            Highlights
          </Badge>
          <Box>
            <Stack ml="30px" mr="102px">
              <Link color="#035d71" href="#" textDecoration={'underline'}>
                Long COVID or Post-COVID Conditions
              </Link>

              <Link color="#035d71" href="#" textDecoration={'underline'}>
                Quarantine | Isolation
              </Link>

              <Link color="#035d71" href="#" textDecoration={'underline'}>
                PREVENT GETTING SICK
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box
          color="black.300"
          mt="5"
          ml={'8'}
          fontSize="2xl"
          fontWeight="normal"
          as="h2"
        >
          {property.Text}
        </Box>
      </Box>
    </Box>
  );
}
const property = {
  Text: 'Get Vaccinated',
};

export default ChakraCard;
