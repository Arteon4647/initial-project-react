import { FC } from "react";
import { UserType } from "../types/user.type";

type Props = {
  user: UserType,
  removeUser: (userId: number) => void,
};

export const UserCard: FC<Props> = ({user, removeUser}) => {
  return (
    <div key={user.id} className="user-card">
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <p>Address: {user.address.city}, {user.address.street}</p>
      <p>Phone number: {user.phone}</p>
      <button onClick={() => removeUser(user.id)}>Remove this user</button>
    </div>
  );
};
