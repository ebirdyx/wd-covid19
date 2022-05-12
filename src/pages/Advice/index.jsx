import ArticleImage from '../../components/ArticleImage';
import ArticleText from '../../components/ArticleText';
import './index.css';

function Advice() {
  const articles = [
    {
      image: {
        src: '/images/kid_with_clean_hands.jpg',
        alt: 'Kid washing hands',
      },
      title: 'How Germs Spread',
      paragraph:
        'Washing hands can keep you healthy and prevent the spread of respiratory and diarrheal infections. Germs can spread from person to person or from surfaces to people when you:',
      stepsList: [
        'Touch your eyes, nose, and mouth with unwashed hands',
        'Prepare or eat food and drinks with unwashed hands',
        'Touch surfaces or objects that have germs on them',
        'Blow your nose, cough, or sneeze into hands and then touch other people’s hands or common objects',
      ],
    },
    {
      image: {
        src: '/images/steps_to_wash_hands.jpg',
        alt: 'Washing hands in steps',
      },
      title: 'Key Times to Wash Hands',
      paragraph:
        'You can help yourself and your loved ones stay healthy by washing your hands often, especially during these key times when you are likely to get and spread germs:',
      stepsList: [
        'Before, during, and after preparing food',
        'Before and after eating food',
        'Before and after caring for someone at home who is sick with vomiting or diarrhea',
        'Before and after treating a cut or wound',
        'After touching an animal, animal feed, or animal waste',
        'After blowing your nose, coughing, or sneezing',
      ],
    },
    {
      image: {
        src: '/images/when_to_wash_hands.jpg',
        alt: 'animation washing hands',
      },
      title: 'Follow Five Steps to Wash Your Hands the Right Way',
      paragraph:
        'Washing your hands is easy, and it’s one of the most effective ways to prevent the spread of germs. Clean hands can help stop germs from spreading from one person to another and in our communities—including your home, workplace, schools, and childcare facilities. hands can keep you healthy and prevent the spread of respiratory and diarrheal infections. Germs can spread from person to person or from surfaces to people when you:',
      stepsList: [
        'Wet your hands with clean, running water (warm or cold), turn off the tap, and apply soap.',
        'Lather your hands by rubbing them together with the soap. Lather the backs of your hands, between your fingers, and under your nails.',
        'Scrub your hands for at least 20 seconds. Need a timer? Hum the “Happy Birthday” song from beginning to end twice.',
        'Rinse your hands well under clean, running water.',
        'Dry your hands using a clean towel or air dry them.',
      ],
    },
  ];

  return (
    <div className="advice_page">
      {articles.map((article) => (
        <div>
          <ArticleImage myvar={article} />
          <ArticleText myvar={article} />
        </div>
      ))}
    </div>
  );
}

export default Advice;
