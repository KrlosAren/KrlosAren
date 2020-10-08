import { useState, useEffect } from 'react';

const GetData = (API, options = {}) => {

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(API, {
          method: options.method,
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const response = await data.json();
        setState({
          loading: false,
          data: response,
          error: null,
        });
      } catch (error) {
        setState({
          loading: false,
          error,
          data: null,
        });
      }
    };
    fetchData();
  }, []);
  return [state, setState];
};

export default GetData;
