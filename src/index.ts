import { Elysia, t as validationSchema } from "elysia";
import { swagger } from "@elysiajs/swagger";

import { addNewUser, getAllUsers, getUserById } from "./services/userServices";

const app = new Elysia()
  .state({
    version: "0.0.1",
    name: "Elysia",
    description: "A simple API for testing Deno Deploy",
  })
  .decorate("getDate", () => Date.now())
  .use(swagger())
  .get(
    "/",
    ({ store, getDate }) =>
      new Response(`Hello, Elysia! ${store.version} ${getDate()}`)
  )
  .group("/api", (group) =>
    group
      .get("/", () => new Response("Welcome to Elysia API!"))
      .get("/users", getAllUsers)
      .get("/id/:id", (context) => {
        const { params } = context;
        const user = getUserById(params.id);
        return user ? user : "User not found";
      })
      .post(
        "/signup",
        (context) => {
          const { body } = context;
          const users = addNewUser(context.body as unknown as Omit<User, "id">);
          return {
            users,
          };
        },
        {
          body: validationSchema.Object({
            name: validationSchema.String(),
            username: validationSchema.String(),
            age: validationSchema.Number(),
            job: validationSchema.String(),
            hobbies: validationSchema.Array(validationSchema.String()),
            address: validationSchema.Object({
              city: validationSchema.String(),
              country: validationSchema.String(),
            }),
            friends: validationSchema.Array(
              validationSchema.Object({
                name: validationSchema.String(),
                age: validationSchema.Number(),
              })
            ),
          }),
          beforeHandle: ({ body }) => {
            if (!body) {
              return new Response("Body is required!", {
                status: 400,
                statusText: "Body is required!",
                headers: {
                  "Content-Type": "text/html",
                },
              });
            }

            // body validation
            /*    const { name, address, age, friends, hobbies, job, username } =
              body as User;
            if (
              !name ||
              !address ||
              !age ||
              !friends ||
              !hobbies ||
              !job ||
              !username
            ) {
              return new Response("Invalid body!", {
                status: 400,
                statusText: "Invalid body!",
                headers: {
                  "Content-Type": "text/html",
                },
              });
            } */
          },
        }
      )
  )

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
  .listen(8080, ({ hostname, port }) => {
    console.log(`Running at http://${hostname}:${port}`);
  });
