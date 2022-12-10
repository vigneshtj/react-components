import axios from "axios";
import { useState, useEffect } from "react";

function useUser() {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      await axios.get(`/users/123`).then((response) => {
        setUser(response.data);
      });
    })();
  }, []);

  return user;
}

export default useUser;
