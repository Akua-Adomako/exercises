
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var randomIndex = Math.floor(Math.random() * names.length);
    
    var person = names[randomIndex];
    
    return person + " is going to buy lunch today!";


/******Don't change the code below*******/    
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
