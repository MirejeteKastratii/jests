import { createContext, ReactNode, useContext, useState } from "react";

export interface User {
  id: number | undefined;
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  description: string | undefined;
}

export interface ContextType {
  users: User[];
  addUser: (user: User) => void;
  editUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  getUserById: (userId:number) => User | undefined
}
const context = createContext<ContextType | undefined>(undefined);

export const useData = (): ContextType => {
  const useT = useContext(context);
  if (useT === undefined) throw new Error("not wrapped with provider");
  return useT;
};

const defaultUsers = [
  {
    id: 1,
    name: "Test",
    surname: "Test Surnamasdasdasde",
    email: "test@example.com",
    description: "test description",
  },
  {
    id: 2,
    name: "Test1",
    surname: "Test Surname1",
    email: "test1@example.com",
    description: "test description1",
  },
  {
    id: 3,
    name: "Test2",
    surname: "Test Surname2",
    email: "test2@example.com",
    description: "test description2",
  },
  {
    id: 4,
    name: "Test3",
    surname: "Test Surname3",
    email: "test3@example.com",
    description: "test description3",
  },
  {
    id: 5,
    name: "Test4",
    surname: "Test Surname4",
    email: "test4@example.com",
    description: "test description4",
  },
];

export const DataContext = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [users, setUsers] = useState<User[]>(defaultUsers);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const editUser = (user: User) => {
    setUsers((prev) =>
      prev.map((userEl) => (userEl.id === user.id ? user : userEl))
    );
  };

  const deleteUser = (userId: number) => {
    if (users.length === 0) return;
    setUsers((prev) => prev.filter((userEl) => userEl.id !== userId));
  };

const getUserById = (userId:number) => {
    return users.find(userEl => userEl.id === userId)
}

  return (
    <context.Provider value={{ users, addUser, deleteUser, editUser,getUserById }}>
      {children}
    </context.Provider>
  );
};
