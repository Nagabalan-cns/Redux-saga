import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/user";

const User = () =>{
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);


  useEffect(() => {
    dispatch(getUser())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {users.length > 0 &&
        users.map((user) => (
          <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      {users.length === 0 && <p>No Users Available Now</p>}
      {error && !loading && <p>{error}</p>}
    </div>
  );
}

export default User;