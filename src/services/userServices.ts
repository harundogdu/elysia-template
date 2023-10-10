import { users } from "../assets/@fake.db";

const getUserById = (id: number | string) =>
  users.find((user) => Number(user.id) === (Number(id) || 0));

export { getUserById };
