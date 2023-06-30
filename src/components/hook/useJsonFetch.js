import { useEffect, useState } from 'react';

const useJsonFetch = (url, opts = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} `);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    const timeout = setTimeout(() => {
      fetchData(url, opts);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [url, opts]);
  return [data, loading, error];
};

export default useJsonFetch;
