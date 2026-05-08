export function fibo(n, arr = [0, 1], prev = 0, curr = 1){

    if(n <= 1){
        return "ERROR";
    }
    
    if(n <= 2){
        return arr;
    }


    let next = curr + prev;
    prev = curr;
    curr = next;


    arr.push(curr);
    
    return fibo(n -1, arr, prev, curr);
}