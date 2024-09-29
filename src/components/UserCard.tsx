import { FC } from "react";
import { UserType } from "../types/user.type";

type Props = {
  user: UserType,
};

export const UserCard: FC<Props> = ({user}) => {
  return (
    <div key={user.id} className="user-card">
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <p>Address: {user.address.city}, {user.address.street}</p>
      <p>Phone number: {user.phone}</p>
    </div>
  );
};
