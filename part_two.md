
Question 1
for...of is a native loop statement that works with all iterables like Arrays, Sets, Maps, and Strings. It supports break and continue, and it also works better with async/await because it waits for each iteration. It is generally faster than forEach because it doesn’t create a callback function for every item.
forEach() is an array instance method that works mainly with Arrays, NodeLists, and Map/Set prototypes. It doesn’t support break or continue, and it doesn’t work well with async/await because it doesn’t wait for each iteration. It is generally slower than for...of because it creates a callback function for every item.
Use for...of when you need more control over the loop, like using break or continue, working with async/await, or when performance matters. Use forEach() when you just want to perform an action on every item and don’t need to stop or control the loop.

Question 2
Hoisting is when declarations are moved to the top of their scope. var, let, and const are all hoisted, but var is hoisted and initialized with undefined. let and const are also hoisted, but accessing them before their declaration gives a ReferenceError because they are in the Temporal Dead Zone (TDZ), where they exist but cannot be accessed until their declaration is reached.

console.log(x); // undefined as an answer
var x = 5;

console.log(y); // ReferenceError as an answer because it is in TDZ
let y = 5;

Question 3
== compares values after doing type conversion if needed, while === compares both the value and the type without type conversion. === is generally preferred because it is more strict and avoids unexpected results.

Question 4
We use try...catch for error handling, where we write in try the actual code we want to run. catch runs only if the code inside try throws an error. It is important in async operations because if an API request or something else fails and throws an error, catch allows us to handle and show the error instead of letting the program fail silently.

Question 5
Type conversion we do it manually using our code like that 
let x = "10"
let y = Number(x); //output converts from a string to number. We did it manually.

Type coercion happens by Javascript automatically like this example.
let result = "10" + 5; //output is "105". javascript changed it by itself. and chose it to be two strings added.
