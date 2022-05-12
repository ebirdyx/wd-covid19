import './index.css';

function ArticleText({ myvar }) {
  return (
    <div>
      <h2>{myvar.title}</h2>
      <p>{myvar.paragraph}</p>
      <ul className="list-tips">
        {myvar.stepsList.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleText;
