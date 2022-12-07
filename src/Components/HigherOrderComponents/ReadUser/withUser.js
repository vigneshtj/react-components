import { useState, useEffect } from "react";
import axios from "axios";

const withUser = (Component, id) => {
  return (props) => {
    const [user, setUser] = useState();

    useEffect(() => {
      (async () => {
        await axios
          .get(`/users/${id}`)
          .then((response) => setUser(response.data));
      })();
    }, []);

    return user ? <Component {...user} /> : <p>loading...</p>;
  };
};

export default withUser;
