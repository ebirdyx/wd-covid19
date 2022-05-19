import React from 'react';
import ChakraCard from '../../components/ChakraCard';
import ChakraGrid from '../../components/ChakraGrid';
import './index.css';

function Home() {
  return (
    <div className="home_page">
      <ChakraCard />
      <ChakraGrid />
    </div>
  );
}

export default Home;
