import { useEffect, useState, useRef, useLayoutEffect } from "react";

function useDataSource(dataSource) {
  const [data, setData] = useState(null);

  //Function to handle infinate rerendering while passing function as dependency for useEffect
  //Step 1: Remove function from dependency for useEffect
  //Step 2: Handle function updates using useRef and useLayoutEffect as given below

  const useCallBackRef = (callback) => {
    const callBackRef = useRef(callback);

    useLayoutEffect(() => {
      callBackRef.current = callback;
    }, [callback]);

    return callBackRef;
  };

  const dataSourceFunc = useCallBackRef(dataSource);

  useEffect(() => {
    (async () => {
      let isCancelled = false;
      const result = await dataSourceFunc.current?.();
      !isCancelled && setData(result);

      //Clean up function if previous fetch is cancelled
      return () => {
        isCancelled = true;
      };
    })();
  }, []);

  return data;
}

export default useDataSource;
