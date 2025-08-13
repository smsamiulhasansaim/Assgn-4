// Problem-->1
function totalFine(fare) {
    // Check if input is not a number or is not positive
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    
    // Calculate fine: fare + 20% surcharge + 30 service charge
    const fine = fare + (fare * 0.2) + 30;
    
    // Return the calculated fine
    return fine;
}
// Problem-->2
function onlyCharacter(str) {
    // Check if input is not a string
    if (typeof str !== 'string') {
        return "Invalid";
    }
    
    // Remove all whitespace and convert to uppercase
    const result = str.replace(/\s/g, '').toUpperCase();
    
    // Return the processed string
    return result;
}
// Problem-->3
function bestTeam(player1, player2) {
    // Check if inputs are not objects or null
    if (typeof player1 !== 'object' || typeof player2 !== 'object' || 
        player1 === null || player2 === null || 
        Array.isArray(player1) || Array.isArray(player2)) {
        return "Invalid";
    }

    // Check if required properties exist
    if (!player1.name || !player2.name || 
        player1.foul === undefined || player2.foul === undefined ||
        player1.cardY === undefined || player2.cardY === undefined ||
        player1.cardR === undefined || player2.cardR === undefined) {
        return "Invalid";
    }

    // Calculate total infractions for each team
    const team1Score = player1.foul + player1.cardY + player1.cardR;
    const team2Score = player2.foul + player2.cardY + player2.cardR;

    // Determine the result
    if (team1Score < team2Score) {
        return player1.name;
    } else if (team2Score < team1Score) {
        return player2.name;
    } else {
        return "Tie";
    }
}
// Problem-->4
function isSame(arr1, arr2) {
    // Check if both inputs are arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // Check if lengths are different
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare each element
    for (let i = 0; i < arr1.length; i++) {
        // Use strict equality (===) to compare elements
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all elements are equal
    return true;
}
// Problem-->5
function resultReport(marks) {
    // Check if input is not an array
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    // Handle empty array case
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let passCount = 0;
    let failCount = 0;
    let total = 0;

    // Calculate pass/fail and total marks
    for (const mark of marks) {
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    // Calculate average and round it
    const average = Math.round(total / marks.length);

    // Return the result object
    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}


// S M Samiul Hasan