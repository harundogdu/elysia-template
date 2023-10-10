import { Elysia } from "elysia";

import { addNewUser, getAllUsers, getUserById } from "./services/userServices";

const app = new Elysia()
  .get("/", () => new Response("Welcome to Elysia!"))
  .get("/users", getAllUsers)
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
  .get(
    "/*",
    () =>
      new Response("Not found!", {
        status: 404,
        statusText: "Not found!",
        headers: {
          "Content-Type": "text/html",
        },
      })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
