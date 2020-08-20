/* const person: object { */
// we can set our types
/* const person: {
 name: string;
 age:number;
} = { */

// The best way is to let typescript infer its own types.
// Here it knows that name and age are strings and numbers.
// it gives an error on nickname since that does not not exist.
const person = {
  name: 'test',
  age: 30,
};

console.log(person.nickname);
console.log(person.name);
