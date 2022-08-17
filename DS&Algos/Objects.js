let person = {
    name: "Raj",
    age: 30,
    hobbies: ['running', 'coding', 'sleeping']
}


console.log(Object.keys(person));  // O(N)
console.log(Object.values(person)); // O(N)
console.log(Object.entries(person)); // O(N)
console.log(Object.hasOwnProperty("birthday")); // O(1)