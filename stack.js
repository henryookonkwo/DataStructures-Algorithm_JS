// Stacks!

// functions: push, pop, peek, length

//palindrome

const root = document.getElementById("root");
const letterz = document.getElementById("letters");
const reverse_word = document.getElementById("rword");
const output = document.getElementById("output");

// let letters = []; //This is the stack

// let word = "weew";

// let rword = "";

// root.innerHTML = "<h1> Word: " + word + " </h1>";

// //put letters of word into a stack
// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// letterz.innerHTML = "<h1> Letters: " + letters + "</h1>";

// //pop off the stack in reverse  order
// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }
// reverse_word.innerHTML = "<h1> Reversed word: " + rword + "</h1>";

// if (rword === word) {
//   output.innerHTML = "<h1> " + word + " is a palindrome </h1>";
// } else {
//   output.innerHTML = "<h1> " + word + " is not palindrome </h1>";
// }

// Ceeates a Stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  //Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  //returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

myStack.push("Obum");
myStack.push("Henry");
myStack.push("1");

// output.innerHTML = "<h1> " + myStack.peek() + "</h1>";

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
myStack.push("Okonkwo");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.storage);
