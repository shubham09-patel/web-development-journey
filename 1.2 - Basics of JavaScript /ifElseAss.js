//Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd.

function evenOddCheck(a){
    if(a%2 === 0){
        return console.log("The number is even.");
    }else{
        return console.log("The number is odd.");
    }
}

evenOddCheck(3);