import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(apiUrl) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const resp = await axios.get(apiUrl);
        setResponse(resp.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, [apiUrl]);

  return { response, error, loading };
}
