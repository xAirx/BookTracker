var button = document.querySelector('button');
/* I'm selecting an element by idea here.
Now typescript can't know if this will really work.
Maybe I have a typo in here.
In this case I wouldn't be able to select an element this element simply wouldn't exist on the page.
So we might have a typo in typescript does not analyze your age HTML code to find out if this works.
So for one does might fail but even if it succeeds and we select an element there it doesn't have to
Most HTML elements doesnt have a value property you can access.
TypeScript forces us to be more clear and enforce and double check our code.
 */
var input1 = document.getElementById('num1'); // adding the exclamationmark here tells us via TS that it will never yield null, we can do  this
// because we double checked that we have the corresponding ID in the HTML
// as HTMLInputElement works as typecasting and defines it as an HTMLInputElement.
var input2 = document.getElementById('num2');
// we are setting num1 and num2 to being numbers.
function add(num1, num2) {
    return num1 + num2;
}
//Vanilla JS way to do it.
/* function add(num1, num2) {
  without ts we could do
  if(typeof num1 === "number" && typeof num2 === "number") {
    return num1+num2;
  }else {
    adding the plus here will make it into numbers
  return +num1 + +num2;
} */
button.addEventListener('click', function () {
    /* And here it's important to know that in JavaScript when you access the value of an input element it's
  always a string always no matter which type of input this is if this is of type no or not.
   */
    // we are turning them into numbers. from strings.
    console.log(add(+input1.value, +input2.value));
});
