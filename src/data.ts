type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type TUsersList = User[];

export const users: TUsersList = [
  {
    id: 1,
    name: "Gabriel Silva",
    age: 25,
    email: "gabriel@gmail.com"
  },
  {
    id: 2,
    name: "Lany Santos",
    age: 22,
    email: "lany@gmail.com"
  },
  {
    id: 3,
    name: "Nathan Silva",
    age: 28,
    email: "nayhan@gmail.com"
  },
  {
    id: 4,
    name: "Erika Vitória",
    age: 25,
    email: "erika@gmail.com"
  },
  {
    id: 5,
    name: "Jaílson Oliveira",
    age: 26,
    email: "jaílson@gmail.com"
  }
];