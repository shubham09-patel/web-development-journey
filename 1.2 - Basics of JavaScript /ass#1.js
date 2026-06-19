//Write a function called canVote that returns true or false if the age of a user is > 18
function canvote(a){
    if(a<18){
        return console.log("can't vote")
    }
    return console.log("can vote")
}

canvote(20);