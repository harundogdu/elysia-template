import { users } from "../assets/@fake.db";

const getUserById = (id: number | string) =>
  users.find((user: User) => Number(user.id) === (Number(id) || 0));

const addNewUser = (user: User) => {
  const isExistUser = users.find((_user) => _user.username === user.username);
  if (isExistUser) {
    return {
      message: "Username already exists",
      status: false,
    };
  }

  const lastInsertId = users.sort(
    (prev: User, next: User) => prev.id - next.id
  )[users.length - 1].id;

  const newUser: User = {
    ...user,
    id: lastInsertId + 1,
  };

  const _users = [...users, newUser];
  return {
    message: "User created successfully",
    status: true,
    users: _users,
  };
};

export { addNewUser, getUserById };
