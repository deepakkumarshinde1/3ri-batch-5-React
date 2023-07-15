import { useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);

  let getUsers = async () => {
    let URL = "http://localhost:3003/users";
    let response = await fetch(URL, { method: "GET" });
    let data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []); // mounting
  return (
    <>
      <button onClick={getUsers}>Get Data</button>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.first_name}</li>;
        })}
      </ul>
    </>
  );
};

export default Users;
