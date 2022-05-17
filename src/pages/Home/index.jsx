import React from 'react';
import ThreeColumnGrid from '../../components/ThreeColumnGrid';
import './index.css';

function Home() {
  return (
    <div>
      <ThreeColumnGrid />
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
        <button>Read more</button>
      </div>
      <img src="" alt="" />
    </div>
  );
}

export default Home;
