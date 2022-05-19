import { Image } from '@chakra-ui/react';

function ArticleImage({ myvar }) {
  return (
    <Image
      src={myvar.image.src}
      alt={myvar.image.alt}
      mt="3em"
      w="70%"
      mr="2em"
    />
  );
}

export default ArticleImage;
