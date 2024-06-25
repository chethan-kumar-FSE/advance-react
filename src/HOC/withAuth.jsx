import { useEffect, useState } from "react";

export const autheticateUser = (Component) => {
  return (props) => {
    const [isAuthenicated, setIsAuthenticated] = useState();

    useEffect(() => {
      setIsAuthenticated(false);
    }, []);
    if (!isAuthenicated) {
      return <p>Not accessible</p>;
    }
    return <Component {...props} />;
  };
};
