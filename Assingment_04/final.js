//  Problem : 01 solution..........
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    
    let surcharge = fare * 0.20;
    let extraCharge = 30;
    let total = fare + surcharge + extraCharge;

    return total;
}

// Problem : 02 solution............

function  onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let lettersOnly = str.split(" ").join("");
    let result = lettersOnly.toUpperCase();

    return result;
}

// Problem 03 solution...........

function bestTeam(team1, team2) {
    if (typeof team1 !== "object" || typeof team2 !== "object" || Array.isArray(team1) || Array.isArray(team2) || team1 === null || team2 === null) {
        return "Invalid";
    }

    let total1 = team1.foul + team1.cardY + team1.cardR;
    let total2 = team2.foul + team2.cardY + team2.cardR;

    if (total1 < total2) {
        return team1.name;
    } else if (total2 < total1) {
        return team2.name;
    } else {
        return "Tie";
    }
}

// Problem 04 solution

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Problem 05 solution..........

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];

        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let avarage = Math.round(total / marks.length);

    return {
        finalScore: avarage,
        pass: passCount,
        fail: failCount
    };
}
