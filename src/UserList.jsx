import React from 'react';

export default function UserList({ info }) {
  return (
    <div>
      <h2>User List</h2>
      {info.length > 0 ? (
        info.map((user, index) => (
          <div key={index}>
            <p>Name: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
        ))
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
}
