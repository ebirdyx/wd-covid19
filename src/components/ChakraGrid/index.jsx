import React from 'react';
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
  Flex,
} from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Grid, GridItem, Center } from '@chakra-ui/react';

function ChakraGrid() {
  return (
    <Box>
      <Box
        bg={'gray.800'}
        m={'2'}
        display="flex"
        alignItems="center"
        maxW="100%"
        borderBlockEndColor={'red.200'}
        borderWidth="10px"
        borderRadius="sm"
        overflow="hidden"
      >
        <Box w={'50%'} ml="3em">
          <Text
            fontFamily="Roboto"
            border-block="1rem solid"
            writing-mode="horizontal-tb"
            direction="rtl"
            fontSize="2em"
            mb="1em"
            color={'white'}
          >
            Stay Up to Date with Your COVID-19 Vaccines
          </Text>
          <Text
            fontFamily={'arial'}
            fontSize="1em"
            color={'white'}
            lineHeight="1.5"
            pr="3em"
          >
            Doctors recommend that everyone ages 5 years and older get their
            primary series of COVID-19 vaccine, and everyone ages 12 years and
            older also receive a booster. Some people can receive two
            boosters.People who are moderately or severely immunocompromised
            have specific COVID-19 vaccine recommendations, including
            recommendations for a booster. The following COVID-19 vaccine and
            booster recommendations may be updated as CDC continues to follow
            data related to vaccine effectiveness and safety, waning immunity,
            and protection against variants.
          </Text>
        </Box>

        <Box
          w={'40%'}
          bg={'gray.800'}
          m={'2'}
          borderBlockStartColor={'#ebf5f6'}
          borderWidth="10px"
          borderRadius="sm"
          overflow="hidden"
        >
          <Image src="/images/covid_vaccine.avif" alt=""></Image>
        </Box>
      </Box>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap="2"
        mx="50px"
        my="30px"
        alignItems="center"
      >
        <GridItem w="100%">
          <Flex justify="center">
            <Image
              w="60%"
              // h="300px"
              src={property.img}
              alt={property.Text}
              // borderRadius="full"
            />
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Text
            fontFamily="Lato"
            direction="rtl"
            fontSize="2em"
            fontWeight="500"
            mb="15px"
            color={'gray.800'}
          >
            About COVID-19 Vaccines
          </Text>
          <Text
            fontFamily={'arial'}
            fontSize="1em"
            color={'gray.500'}
            lineHeight="2"
          >
            COVID-19 vaccines available in the United States are effective at
            protecting people from getting seriously ill, being hospitalized,
            and even dying especially people who are boosted. As with other
            diseases, you are protected best from COVID-19 when you stay up to
            date with recommended vaccines.
          </Text>
          <Button
            colorScheme="blue"
            variant="outline"
            mt="10px"
            px="30px"
            as="a"
            href="/vaccine"
          >
            Read more
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}

const property = {
  Text: 'Get Vaccinated',
  img: '/images/covid19_vac.jpg',
  paragraph:
    'Doctors recommend that everyone ages 5 years and older get their primary series of COVID-19 vaccine, and everyone ages 12 years and older also receive a booster. Some people can receive two boosters.People who are moderately or severely immunocompromised have specific COVID-19 vaccine recommendations, including recommendations for a booster. Learn more about COVID-19 vaccine recommendations for people who are moderately or severely immunocompromised.Use CDC’s COVID-19 booster tool to learn if and when you can get boosters to stay up to date with your COVID-19 vaccines.The following COVID-19 vaccine and booster recommendations may be updated as CDC continues to follow data related to vaccine effectiveness and safety, waning immunity, and protection against variants.',
};

export default ChakraGrid;
