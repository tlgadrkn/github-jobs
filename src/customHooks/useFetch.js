import { useState, useEffect } from 'react';

export const useFetch = (urlToFetch) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    try {
      const getJobs = async () => {
        const response = await fetch(urlToFetch);
        const data = response.json();
        setState(data);
        console.log(data);
      };
      getJobs();
    } catch (error) {
      throw new Error(`Fetch Error Something went wrong - ${error}`);
    }
  }, []);
  return [state, setState];
};
