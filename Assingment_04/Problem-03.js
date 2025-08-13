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



let r = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France");

console.log(r);