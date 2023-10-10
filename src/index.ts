import { Elysia } from "elysia";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const getUserById = (id: number | string) =>
  users.find((user) => Number(user.id) === (Number(id) || 0));

const app = new Elysia()
  .get("/", () => "Hello World!")
  .get("/test", () => "Hello Test!")
  .post("/test", () => "Hello Test From Post!")
  .get("/id/:id", ({ params: { id } }) => {
    const user = getUserById(id);
    return user ? user : "User not found";
  })
  .get("/*", () => "404 Not Found")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
