const height = [65, 66, 68, 72, 78, 60, 65, 66];
function getMax(numbers){
     let max = numbers[0];
    for ( const num of numbers){
       
        if ( num > max){
            max = num ;
        }
    }
    return max ;
}

const max = getMax(height);
console.log(`max vlue is ${max}`);

const value = [65, 66, 68, 72, 78, 60, 65, 66];
function getMin(numbers){
     let min = numbers[0];
    for ( const num of numbers){
       
        if ( num < min){
            min = num ;
        }
    }
    return min ;
}

const min = getMin(value);
console.log(`min vlue is ${min}`);