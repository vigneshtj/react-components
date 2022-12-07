import { useState, useEffect } from "react";
import axios from "axios";

/*
 * This component can help us to wrap recursively like below
 * editableResource(
 * editableResource(userdata,'user'),'product'
 * );
 */

const capitaliseString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const editableUser = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [resourceData, setResourceData] = useState();
    const [data, setData] = useState();

    useEffect(() => {
      (async () => {
        await axios.get(`${resourcePath}`).then((response) => {
          setResourceData(response.data);
          setData(response.data);
        });
      })();
    }, []);

    const onChange = (changeData) => {
      setData((prev) => ({ ...prev, ...changeData }));
    };

    const onReset = () => {
      setData(resourceData);
    };

    const onSave = () => {
      (async () => {
        await axios
          .post(`${resourcePath}`, { [resourceName]: data })
          .then((response) => setResourceData(response.data));
      })();
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitaliseString(resourceName)}`]: onChange,
      [`onSave${capitaliseString(resourceName)}`]: onSave,
      [`onReset${capitaliseString(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};

export default editableUser;
