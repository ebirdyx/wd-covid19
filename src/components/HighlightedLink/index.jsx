import './style.css';

function HighlightedLink({ href, text }) {
  return (
    <a className="highlighted-link" href={href}>
      {text}
    </a>
  );
}

export default HighlightedLink;
