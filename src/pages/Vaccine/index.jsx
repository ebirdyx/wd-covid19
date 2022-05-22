import { Center, Box, Text } from '@chakra-ui/react';
import HighlightedLink from '../../components/HighlightedLink';
import { ArrowRightIcon } from '@chakra-ui/icons';
import './index.css';

function Vaccine() {
  return (
    <div className="vaccine_page">
      <div className="vaccine-article">
        <Center>
          <h1 className="vaccine-h1">Coronavirus (COVID-19) vaccine</h1>
        </Center>
        <p className="vaccine-p">
          The coronavirus (COVID-19) vaccines are safe and effective. They give
          you the best protection against COVID-19.
        </p>
        <h4 className="vaccine-h3">Who can get a COVID-19 vaccine</h4>
        <p className="vaccine-p">
          Everyone aged 5 and over can get a 1st and 2nd dose of the COVID-19
          vaccine.
        </p>
        <p className="vaccine-p">
          People aged 16 and over, and some children aged 12 to 15, can also get
          a booster dose.
        </p>
        <p className="vaccine-p">
          People aged 12 and over who had a severely weakened immune system when
          they had their first 2 doses, will be offered a 3rd dose and a booster
          (4th dose).
        </p>
        <p className="vaccine-p">
          People aged 75 and over, people who live in care homes for older
          people, and people aged 12 and over who have a weakened immune system,
          will be offered a spring booster.
        </p>
        <Center>
          <iframe
            width="745"
            height="419"
            src="https://www.youtube.com/embed/OC9vnISihKM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Center>

        <div className="link-divider"></div>

        <HighlightedLink
          href="https://covid19.trackvaccines.org/country/albania/"
          text="Find out how to get a COVID-19 vaccine"
        />
      </div>

      <div className="vaccine-article">
        <h3 className="vaccine-h3">Types of COVID-19 vaccine</h3>
        <p className="vaccine-p">
          The COVID-19 vaccines currently approved for use in Albania are:
        </p>
        <ul className="vaccine-ul">
          <li className="vaccine-li">Moderna vaccine</li>
          <li className="vaccine-li">Oxford/AstraZeneca vaccine</li>
          <li className="vaccine-li">Pfizer/BioNTech vaccine</li>
          <li className="vaccine-li">
            Novavax vaccine (not currently available)
          </li>
          <li className="vaccine-li">SinoVac vaccine</li>
        </ul>
        <Box
          m={'0.5em 3em'}
          display="flex"
          alignItems="center"
          w="90%"
          color={'white'}
          bg={'gray.800'}
          borderColor="white"
          borderWidth="10px"
          borderRadius="sm"
          // overflow="hidden"
        >
          <Text margin="0.5em 0" font-size="6em" font-family="Lato">
            <ArrowRightIcon
              color="linear(to-l, #7928CA, #FF0080)"
              w={6}
              h={6}
              ml="2em"
              mr="0.5em"
            />
          </Text>
          <h4 className="vaccine-h4">Which vaccine should I get?</h4>
          <iframe
            width="736"
            height="439"
            src="https://www.youtube.com/embed/lFjIVIIcCvc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
        <p className="vaccine-p">
          You cannot usually choose which vaccine you have. If you book online,
          you'll only be offered appointments for vaccines that are suitable for
          you.
        </p>
        Most people can have any of the COVID-19 vaccines, but some people are
        only offered certain vaccines.
        <p className="vaccine-p">For example: </p>
        <ul className="vaccine-ul">
          <li className="vaccine-li">
            if you're pregnant or under 40 you'll usually be offered
            appointments for the Pfizer/BioNTech or Moderna vaccines
          </li>
          <li className="vaccine-li">
            if you're under 18, you'll only be offered the Pfizer/BioNTech
            vaccine
          </li>
        </ul>
        <p className="vaccine-p">
          You should have the same vaccine for both your 1st and 2nd doses,
          unless you had serious side effects (such as a serious allergic
          reaction) after your 1st dose.
        </p>
        <p className="vaccine-p">
          Most people will be offered a booster dose of the Pfizer/BioNTech
          vaccine or Moderna vaccine.
        </p>
        <p className="vaccine-p">
          This means your booster dose may be different from the vaccine you had
          for your first 2 doses.
        </p>
      </div>
      <div className="vaccine-article">
        <h3 className="vaccine-h3">How well do the COVID-19 vaccines work?</h3>
        <p className="vaccine-p">
          Anyone who gets COVID-19 can become seriously ill or have long-term
          effects (long COVID). The COVID-19 vaccines are the best way to
          protect yourself and others.
        </p>
        <p className="vaccine-p">Research has shown the vaccines help: </p>
        <ul className="vaccine-ul">
          <li className="vaccine-li">
            reduce your risk of getting seriously ill or dying from COVID-19
          </li>
          <li className="vaccine-li">
            reduce your risk of catching or spreading COVID-19
          </li>
          <li className="vaccine-li">protect against COVID-19 variants</li>
        </ul>
        <p className="vaccine-p">
          The 1st dose should give you some protection from 3 or 4 weeks after
          you've had it. But you need 2 doses for stronger and longer-lasting
          protection.
        </p>
        <p className="vaccine-p">
          Most people also need a booster dose to help improve the protection
          from the first 2 doses of the vaccine.
        </p>
        <p className="vaccine-p">
          There is a chance you might still get or spread COVID-19 even if you
          have a vaccine, so it's important to follow advice about how to avoid
          catching and spreading COVID-19.
        </p>

        <HighlightedLink
          href="https://www.youtube.com/watch?v=zgtWpwkS9u4&list=PLnhASgDToTktp2HIjdyeo2fsI6Agcn1ul&index=5"
          text="Watch a YouTube video explaining what's in the COVID-19 vaccines and
        how they work"
        />
      </div>
      <div className="vaccine-article">
        <h3 className="vaccine-h3">Side effect and safety</h3>
        <p className="vaccine-p">
          The COVID-19 vaccines approved for use in the UK have met strict
          standards of safety, quality and effectiveness.
          <br />
          They can cause some side effects, but not everyone gets them.
          <br />
          Any side effects are usually mild and should not last longer than a
          week, such as:
        </p>

        <ul className="vaccine-ul">
          <li className="vaccine-li">feeling achy</li>
          <li className="vaccine-li">feeling or being sick</li>
          <li className="vaccine-li">a sore arm from the injection </li>
          <li className="vaccine-li">a headache</li>
          <li className="vaccine-li">feeling tired</li>
        </ul>

        <p className="vaccine-p">
          More serious side effects, such as allergic reactions or blood
          clotting, are very rare.
        </p>
        <HighlightedLink
          href="https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/safety-and-side-effects/"
          text="Find out more about COVID-19 vaccine side effects and safety"
        />
      </div>
      <div className="vaccine-article">
        <h3 className="vaccine-h3">COVID-19 vaccine ingredients</h3>
        <p className="vaccine-p">
          The COVID-19 vaccines do not contain egg or animal products. <br />
          The Oxford/AstraZeneca vaccine contains a tiny amount of alcohol, but
          this is less than in some everyday foods like bread. <br />
        </p>
      </div>
    </div>
  );
}

export default Vaccine;
