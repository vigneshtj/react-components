import { useEffect, useState } from "react";

function useDataSource(dataSource) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await dataSource();
      setData(result);
    })();
  }, []);

  return data;
}

export default useDataSource;
