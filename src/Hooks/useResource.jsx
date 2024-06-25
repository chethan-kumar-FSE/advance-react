import axios from "axios";
import { useEffect, useState } from "react";

export const useResource = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setData(response.data);
    })();
  }, []);

  return data;
};
