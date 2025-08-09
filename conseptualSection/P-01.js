function cubeNumber(number) {
    if( typeof(number) !== 'number' || number <= 0){
        return "Invalid Input"
    }
    return number*number *number;
}
console.log(cubeNumber(-5));