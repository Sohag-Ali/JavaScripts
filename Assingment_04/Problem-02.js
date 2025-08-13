function  onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    let lettersOnly = str.split(" ").join("");
    let result = lettersOnly.toUpperCase();

    return result;
}
console.log(onlyCharacter(true));

