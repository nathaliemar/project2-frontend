import axios from "axios";
import { useCallback, useState } from "react";

// https://dummyjson.com/recipes

export function useFetch(baseURL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL,
    // withCredentials: true,
  });

  // fetcher({})
  //fetcher({endPoint:"/1"})
  const fetcher = async ({
    method = "GET",
    endPoint = "/",
    reqBody = null,
    headers = {},
    // timeout = 0,
  }) => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        method,
        url: endPoint,
        data: reqBody,
        headers,
        // timeout,
      });

      setData(response);
      setError(null);
    } catch (err) {
      console.error("Error in useFetch hook", err);
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetcher };
}
// import axios from "axios";
// import { useEffect, useState } from "react";

// export function useFetch(apiUrl) {
//   const [response, setResponse] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleFetch = async () => {
//       try {
//         const resp = await axios.get(apiUrl);
//         setResponse(resp.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     handleFetch();
//   }, [apiUrl]);

//   return { response, error, loading };
// }
