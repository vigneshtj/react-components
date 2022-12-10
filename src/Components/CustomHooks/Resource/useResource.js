import axios from "axios";
import { useState, useEffect } from "react";

function useResource(resource) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      await axios.get(resource).then((response) => setData(response.data));
    })();
  }, [resource]);

  return data;
}

export default useResource;
