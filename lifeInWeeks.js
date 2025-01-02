function lifeInWeeks(age) {
    
    
    // Calculate the remaining years
    var remainingYears = 90 - age;

    // Convert remaining years into days, weeks, and months
    var days = remainingYears * 365;
    var weeks = remainingYears * 52;
    var months = remainingYears * 12;

    // Output the result with the correct format
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
}

lifeInWeeks(56); 
