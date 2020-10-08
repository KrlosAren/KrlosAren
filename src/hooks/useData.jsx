import { useState, useEffect } from 'react';

const useData = (API, options = {}) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: '',
  });
  async function getData() {
    try {
      setState({ loading: true });
      const data = await fetch(API, options);
      const response = await data.json();
      setState({ data: response, error: null });
    } catch (error) {
      setState({ loading: false, error });
    }
  }
};

export default useData;
