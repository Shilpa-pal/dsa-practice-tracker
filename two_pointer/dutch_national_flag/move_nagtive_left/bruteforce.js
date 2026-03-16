
/*Rearrange the array so that all negative numbers come first and positive numbers come after.

Example:

Input:
[3,-1,4,-2,5,-3]

Output:
[-1,-2,-3,3,4,5] */

function bruteForce(array) {

let result = []
// first loop for negatives
for (let i=0;i<array.length;i++){
    if(array[i]<0){
        result.push(array[i])
}
}
// second loop for positives
for (let i=0;i<array.length;i++){
    if(array[i]>=0){
        result.push(array[i])
}
}
return result
}

console.log(bruteForce([3,-1,4,-2,5,-3]))