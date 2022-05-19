import { Divider, Box, chakra } from '@chakra-ui/react';
import './index.css';

function ArticleText({ myvar }) {
  return (
    <div className="article_text">
      <Box color={'white'} bg={'gray.800'} mt="10" mr={'2'}>
        <h2>{myvar.title}</h2>
        <p>{myvar.paragraph}</p>
        <ul className="list-tips">
          {myvar.stepsList.map((step) => (
            <li>{step}</li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default ArticleText;
