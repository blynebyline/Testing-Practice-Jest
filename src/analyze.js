export function analyzeArray(arr){


    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: getLength(arr)
    };
}

function average(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum / arr.length
}

function min(arr){
    let small = arr[0];
    for(let i =1; i < arr.length; i++){
        if(arr[i] < small){
            small = arr[i];
        }
    }

    return small;
}

function max(arr){
    let big = arr[0];
    for(let i =1; i < arr.length; i++){
        if(arr[i] > big){
            big = arr[i];
        }
    }

    return big;
}

function getLength(arr){
    return arr.length;
}