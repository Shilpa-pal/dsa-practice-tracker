/* Move all 0s to the end while maintaining order of other elements.
Example:
Input:
[0,1,0,3,12]

Output:
[1,3,12,0,0] */

function moveAllZeroToEnd(array){
    let left = 0
    let right = 0
    while(right<array.length){
        if(array[right] !== 0){
            [array[left],array[right]] = [array[right],array[left]]
            left ++
        }
        right ++
    }
    return array
}
console.log(moveAllZeroToEnd([0,1,0,3,12]))