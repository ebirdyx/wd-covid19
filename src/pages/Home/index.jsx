import React from 'react';
import ChakraCard from '../../components/ChakraCard';
import ChakraGrid from '../../components/ChakraGrid';
import './index.css';
import { Flex } from '@chakra-ui/react';

function Home() {
  return (
    <Flex>
      <div className="home_page">
        <ChakraCard />
        <ChakraGrid />
      </div>
    </Flex>
  );
}

export default Home;
