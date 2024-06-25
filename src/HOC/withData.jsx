import axios from "axios";
import { useEffect, useState } from "react";

export const loadData = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`
        );
        setUser(response.data);
      })();
    }, []);
    return <Component {...props} user={user} />;
  };
};
