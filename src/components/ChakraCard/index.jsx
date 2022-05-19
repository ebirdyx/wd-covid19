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
      display="flex"
      alignItems="center"
      maxW="100%"
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
    >
      <Box w={'40%'}>
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
        w={'40%'}
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
              <Link color="teal.500" href="#">
                Long COVID or Post-COVID Conditions
              </Link>
              <Divider
                borderColor={'#035d71'}
                size="5"
                orientation="horizontal"
              />

              <Link color="teal.500" href="#">
                Quarantine | Isolation
              </Link>
              <Divider borderColor={'#035d71'} orientation="horizontal" />

              <Link color="teal.500" href="#">
                PREVENT GETTING SICK
              </Link>
              <Divider borderColor={'#035d71'} orientation="horizontal" />
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
