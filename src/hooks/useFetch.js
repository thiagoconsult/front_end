import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        // console.log("ERROR", error);
        // setData(null);
        // throw error;
      }
    };

    fetchData();
  }, [url]);

  return { data };
};
