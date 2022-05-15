import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

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

  if (isLoading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <iframe
        src="https://public.domo.com/cards/31O7r"
        width="900"
        height="600"
        marginheight="0"
        marginwidth="0"
        frameborder="0"
      ></iframe>
      <iframe
        src="https://public.domo.com/cards/W6m2W"
        width="900"
        height="600"
        marginheight="0"
        marginwidth="0"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Stats;
