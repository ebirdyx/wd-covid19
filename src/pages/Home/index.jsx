import React from 'react';
import ChakraCard from '../../components/ChakraCard';
import './index.css';
import { AspectRatio } from '@chakra-ui/react';

function Home() {
  return (
    <div className="home_page">
      <ChakraCard />

      <div className="article">
        <h2>
          Cororna Virus Disease is Infectuos, We should Avoid Close Contact
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          aliquid natus. Vero nostrum, maiores doloribus quis culpa, sequi
          explicabo distinctio earum magnam ratione minus est maxime deleniti
          harum fuga tenetur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          aliquid natus. Vero nostrum, maiores doloribus quis culpa, sequi
          explicabo distinctio earum magnam ratione minus est maxime deleniti
          harum fuga tenetur.
        </p>
        {/* <button>Read more</button> */}
      </div>
      {/* <img src="/images/covid_animation.png" alt="" /> */}
    </div>
  );
}

export default Home;
