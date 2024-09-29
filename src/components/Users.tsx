import { useContext, useEffect } from "react";
import { UserCard } from "./UserCard";
import "../styles/Users.css";
import { UserContext } from "../contexts/UserContext";

export const Users = () => {
  const { users, getAllUsers, updateAllUsers } = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
    return () => {
      updateAllUsers();
    };
  }, []);
  return (
    <div className="users-component">
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <UserCard key={user.id} user={user} />
        </div>
      ))}
    </div>
  );
};
