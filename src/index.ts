import { Elysia } from "elysia";

import { addNewUser, getAllUsers, getUserById } from "./services/userServices";

const app = new Elysia()
  .get("/", getAllUsers)
  .get("/id/:id", (context) => {
    const { params } = context;
    const user = getUserById(params.id);
    return user ? user : "User not found";
  })
  .post("/signup", (context) => {
    const { body } = context;
    const users = addNewUser(context.body as User);
    return {
      users,
    };
  })
  .get("/*", () => "404 Not Found")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
