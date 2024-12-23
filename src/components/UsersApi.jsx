import React, { useEffect, useState } from "react";
import api from "../api/api";

const useUsersApi = () => {
  const [data, setData] = useState(null);

  const initialFetch = async () => {
    const response = await api.get(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    setData(response.data);
  };

  return { data, initialFetch };
};

function UsersApi() {
  const { data, initialFetch } = useUsersApi();
  console.log("data", data);
  useEffect(() => {
    initialFetch();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}

export default UsersApi;
