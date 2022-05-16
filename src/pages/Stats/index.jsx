import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import { Spinner } from '@chakra-ui/react';

function Stats() {
  const api_key = '7a7c7857f30e4be4991fd88e95348433';
  const data_endpoint =
    'https://api.covidactnow.org/v2/counties.json?apiKey=' + api_key;

  const [data, setData] = useState([]);
  const isLoading = data.length === 0;

  useEffect(() => {
    axios.get(data_endpoint).then((resp) => {
      setData(resp.data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // if (isLoading) {
  //   return (
  //     <div>
  //       <Spinner
  //         thickness="4px"
  //         speed="0.65s"
  //         emptyColor="gray.200"
  //         color="blue.500"
  //         size="xl"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="graph-cards">
        <iframe
          src="https://public.domo.com/cards/avnAV"
          width="50%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://public.domo.com/cards/31O7r"
          width="50%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
      </div>
      <div className="graph-cards">
        <iframe
          src="https://public.domo.com/cards/dNl4L"
          width="100%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
      </div>
      <div className="graph-cards">
        <iframe
          src="https://public.domo.com/cards/aOm4g"
          width="100%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
        <iframe
          src="https://public.domo.com/cards/dLj4g"
          width="70%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
      </div>
      <div className="graph-cards">
        <iframe
          src="https://public.domo.com/cards/dJ45D"
          width="100%"
          height="900"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Stats;
