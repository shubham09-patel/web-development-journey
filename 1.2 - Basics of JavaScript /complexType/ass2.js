//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user = {
    name : "shubham patel",
    age : 12,
    gender : "Female"

}
function greet(object){
    let pre;
    if(object.gender === "male"){
        pre = "Mr. "
    }
    else{
        pre = "Mrs. "
    }

    
    console.log('hello ' + pre + object.name + ' you are ' + object.age + ' years old')
    if(object.age<= 17){
        console.log("you are a minor u can not vote");
    }
    else{
        console.log("you are an adult u can vote");
    }
}

greet(user);