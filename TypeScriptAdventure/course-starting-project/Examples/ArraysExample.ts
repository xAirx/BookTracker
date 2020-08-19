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
  // Typescript detects an array of data here.
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivites: string[];
// wont work because we expect a string array
favoriteActivites = 'sports';
// Wont work since we define a string array above

let favoriteActivites: any[];
favoriteActivites = ['Sports', 1];

// The above line would work if we used the any type.
/* The any type is a special type and typescript which will have a closer look later which basically means
do whatever you want.
It's of course a type you don't want to use too often because you'll lose the benefits typescript gives
you your back and JavaScript the world where you also can use any value anywhere. */
/* Any is very flexible but gives up everything typescript has to offer
 */
console.log(person.nickname);
