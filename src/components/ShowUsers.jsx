/* eslint-disable */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../hooks/users/actions';

function ShowUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.userReducer.data);

  return (
    <div>
      <h5>The following are the users</h5>
      {users.map((user, key) => (
        <p key={key}>{user.name}</p>
      ))}
    </div>
  );
}

export default ShowUsers;
