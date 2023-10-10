interface User {
  id: number;
  name: string;
  username: string;
  age: number;
  job: string;
  hobbies: string[];
  address: {
    city: string;
    country: string;
  };
  friends: {
    name: string;
    age: number;
  }[];
}
