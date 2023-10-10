const users: User[] = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    job: "Developer",
    hobbies: ["Coding", "Gaming"],
    address: { city: "Seoul", country: "Korea" },
    friends: [
      { name: "Jane", age: 20 },
      { name: "Bob", age: 21 },
    ],
  },
  {
    id: 2,
    name: "Jane",
    username: "jane",
    age: 21,
    job: "Designer",
    hobbies: ["Designing", "Gaming"],
    address: { city: "Seoul", country: "Korea" },
    friends: [
      { name: "John", age: 20 },
      { name: "Bob", age: 21 },
    ],
  },
  {
    id: 3,
    name: "Bob",
    username: "bob",
    age: 22,
    job: "Marketer",
    hobbies: ["Marketing", "Gaming"],
    address: { city: "Seoul", country: "Korea" },
    friends: [
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
    ],
  },
  {
    id: 4,
    name: "Alice",
    username: "alice",
    age: 23,
    job: "Manager",
    hobbies: ["Managing", "Gaming"],
    address: { city: "Seoul", country: "Korea" },
    friends: [
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
    ],
  },
];

export { users };
