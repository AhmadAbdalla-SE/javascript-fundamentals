//Question 1
function stringPlusSeven(str) {
  let add = Number(str)+7
  return add
}
console.log(stringPlusSeven("123"));

//Question 2
function checkFalsy(value) {
  if (!value)
    return "Invalid"
  else 
    return "Valid"
}
console.log(checkFalsy(0));

//Question 3
function oddLoop() {
for (let i=1; i <11; i++) {
    if (i%2 === 0) {
        continue;
    } 
    else
        console.log(i);
    }
}
oddLoop()

//Question 4
function evenNumbers() {
    let arr = [1,2,3,4,5]
    let evens = arr.filter( even => even %2 ===0 )
    return evens
}
console.log(evenNumbers())

//Question 5
function mergeArrays(a, b) {
    const mergedArr = [...a, ...b]
    return mergedArr  
}
console.log(mergeArrays([1,2,3], [4,5,6]));

//Question 6
function dayName(n) {
    switch (n) {
        case 1: return "Sunday"
        case 2: return "Monday"
        case 3: return "Tuesday"
        case 4: return "Wednesday"
        case 5: return "Thursday"
        case 6: return "Friday"
        case 7: return "Saturday"
        default: return "Invalid day"
    }
}
console.log(dayName(2))

//Question 7
const words = ["a", "ab", "abc"];
const lengths = words.map(word => (word.length));
console.log(lengths);

//Question 8
function divThreeFive(a) {
    if (a%3 === 0 && a%5 === 0) {
        return "Divisible by both"
    }
    else 
        return "Not divisible by both"
}
console.log(divThreeFive(15));

//Question 9
const squareIt = n => n * n
console.log(squareIt(5));

//Question 10
function describe({ name, age }) {
  return `${name} is ${age} years old`
}
const person = { name: 'John', age: 25 };
console.log(describe(person));

//Question 11
function sumAll(...numbers) {
   let total = 0
   for (const n of numbers) {
    total += n
   }
   return total
}
console.log(sumAll(1, 2, 3, 4, 5));

//Question 12
function delayedSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Success');
    }, 3000);
  });
  }
  delayedSuccess().then(result => console.log(result));

//Question 13
function findLargest(arr) {
    return arr.reduce((max, current) => current > max ? current : max)
    }
console.log(findLargest([1, 3, 7, 2, 4]));

//Question 14
function getKeys(obj) {
    return Object.keys(obj)
}
console.log(getKeys({name: "John", age: 30}))

//Question  15
function splitWords(str) {
    return str.split(" ")
}
console.log(splitWords("The quick brown fox"))