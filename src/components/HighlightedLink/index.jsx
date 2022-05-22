import { Center } from '@chakra-ui/react';
import './style.css';

function HighlightedLink({ href, text }) {
  return (
    <Center>
      <a className="highlighted-link" href={href}>
        {text}
      </a>
    </Center>
  );
}

export default HighlightedLink;
