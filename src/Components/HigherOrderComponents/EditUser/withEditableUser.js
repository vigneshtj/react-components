import { useState, useEffect } from "react";
import axios from "axios";

const withEditableUser = (Component, id) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState();
    const [formUser, setFormUser] = useState();

    useEffect(() => {
      (async () => {
        await axios.get(`/users/${id}`).then((response) => {
          setOriginalUser(response.data);
          setFormUser(response.data);
        });
      })();
    }, []);

    const onChangeUser = (changeData) => {
      setFormUser((prev) => ({ ...prev, ...changeData }));
    };

    const onResetUser = () => {
      setFormUser(originalUser);
    };

    const onSaveUser = () => {
      (async () => {
        await axios
          .post(`/users/${id}`, { user: { ...formUser } })
          .then((response) => setOriginalUser(response.data));
      })();
    };

    return formUser ? (
      <Component
        {...props}
        user={{ ...formUser }}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    ) : (
      <p>loading...</p>
    );
  };
};

export default withEditableUser;
