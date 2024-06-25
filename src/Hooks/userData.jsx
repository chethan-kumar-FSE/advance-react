import axios from "axios";
import { useEffect, useState } from "react";

export const useData = (userId) => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`);
      setUser(response.data);
    })();
  }, []);

  return user;
};
