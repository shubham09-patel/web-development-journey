//Write a function that takes a user as an input and greets them with their name and age

let user = {
    name : "shubham Patel",
    age : 23
}

function greet(object){
    console.log('hello ' + object.name + ' you are ' + object.age + ' years old')
}

greet(user);