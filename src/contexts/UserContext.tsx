import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useState,
} from "react";
import { UserType } from "../types/user.type";
import { API } from "../axios";

type UserContextType = {
  users: UserType[];
  setUsers?: Dispatch<UserType[]>;
  getAllUsers: () => Promise<unknown>;
  updateAllUsers: () => Promise<unknown>;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  getAllUsers: async () => {},
  updateAllUsers: async () => {},
});

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<UserType[]>([]);

  const getAllUsers = async () => {
    try {
      const { data } = await API.get("users");
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };
  const updateAllUsers = async () => {
    try {
      for await (const user of users) {
        const { data } = await API.patch(`users/${user.id}`, user);
        console.log(`The user ${user.id} was updated`, data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        getAllUsers,
        updateAllUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
