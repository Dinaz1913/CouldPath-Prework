export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */
interface Writters {
  firstName: string;
  lastName: string;
  occupation: string;
  age: number;
  alive: boolean;
}
const writers: Writters[] = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

writers.forEach((Writter) => {
  console.log(
    "Hi, my name is" +
      " " +
      Writter.firstName +
      " " +
      Writter.lastName +
      " " +
      ".I am" +
      " " +
      Writter.age +
      " " +
      "years old, and work as a" +
      " " +
      Writter.occupation
  );
});
