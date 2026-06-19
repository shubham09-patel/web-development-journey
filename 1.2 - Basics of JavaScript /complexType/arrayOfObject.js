//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
function getAdults(users) {
    let adults = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 18) {
            adults.push(users[i]);
        }
    }

    return adults;
}

let users = [
    { name: "Shubham", age: 23 },
    { name: "Rahul", age: 16 },
    { name: "Aman", age: 20 }
];

console.log(getAdults(users));