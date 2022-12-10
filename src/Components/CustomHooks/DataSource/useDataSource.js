import { useEffect, useState } from "react";

function useDataSource(dataSource) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await dataSource();
      //Added this check to prevent infinite rendering - need to find root cause
      if (JSON.stringify(data) !== JSON.stringify(result)) setData(result);
    })();
  }, [dataSource, data]);

  return data;
}

export default useDataSource;
