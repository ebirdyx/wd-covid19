import './index.css';

function ArticleText() {
  return (
    <div>
      <h2>How Germs Spread</h2>
      <p>
        Washing hands can keep you healthy and prevent the spread of respiratory
        and diarrheal infections. Germs can spread from person to person or from
        surfaces to people when you:
      </p>
      <ul className="list-tips">
        <li>Touch your eyes, nose, and mouth with unwashed hands</li>
        <li>Prepare or eat food and drinks with unwashed hands</li>
        <li>Touch surfaces or objects that have germs on them </li>
        <li>
          Blow your nose, cough, or sneeze into hands and then touch other
          people’s hands or common objects
        </li>
      </ul>
    </div>
  );
}

export default ArticleText;
