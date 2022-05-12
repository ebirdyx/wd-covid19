import './index.css';

function ArticleImage({ myvar }) {
  return (
    <img
      src={myvar.image.src}
      alt={myvar.image.alt}
      className="article_image"
    />
  );
}

export default ArticleImage;
