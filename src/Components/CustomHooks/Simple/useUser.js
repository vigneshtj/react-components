import axios from "axios";
import { useState, useEffect } from "react";

function useUser() {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      await axios.get(`/users/123`).then((response) => {
        console.log("res..", response.data);
        setUser(response.data);
      });
    })();
  }, []);

  console.log("**user:", user);
  return user;
}

export default useUser;
