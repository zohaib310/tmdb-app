import React, { useEffect, useState } from 'react';
import { getDetails } from '../../services/ApiHelper';

const DetailsPage = () => {
  const [details, setDetails] = useState();
  console.log(window.location.pathname);
  useEffect(() => {
    const getData = async () => {
      const data = await getDetails(window.location.pathname);
      console.log(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h4>hi</h4>
    </div>
  );
};

export default DetailsPage;
