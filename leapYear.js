function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.
    var isleap;
    if (year % 4 === 0) {
        if (year % 100 === 0){
            if (year % 400 === 0){
                isleap = "Leap year."
            }else {
                isleap = "Not leap year."
            }
        }else{
            isleap = "Leap year."
        }
    } else {
        isleap = "Not leap year."
    }
    return isleap;



    

/**************Don't change the code below****************/    

}

console.log(isLeap(2024));