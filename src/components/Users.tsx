import { useEffect, useState } from "react";
import { API } from "../axios";
import { UserType } from "../types/user.type";
import { UserCard } from "./UserCard";
import "../styles/Users.css"

export const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const removeUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  useEffect(() => {
    API.get("users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));

    return () => {
      return users.forEach((user) => {
        API.patch(`users/${user.id}`, user)
          .catch((res) => console.log(res.data))
          .catch((err) => console.log(err));
      });
    };
  }, []);
  return (
    <div className="users-component">
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <UserCard key={user.id} user={user} removeUser={removeUser} />
        </div>
      ))}
    </div>
  );
};
