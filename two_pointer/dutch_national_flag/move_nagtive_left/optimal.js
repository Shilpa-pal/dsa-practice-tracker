
/*Rearrange the array so that all negative numbers come first and positive numbers come after.
Example:
Input:
[3,-1,4,-2,5,-3]
Output:
[-1,-2,-3,3,4,5] */

function moveNegativeToLeft(array){
    let left = 0
    for(let right = 0;right<array.length;right++){
        // if corrent number is less than 0 than swap
        if(array[right] < 0){

            // swaping has done
            [array[left],array[right]] = [array[right],array[left] ]
            left++
        }
    }
    return array
}
console.log(moveNegativeToLeft([3,-1,4,-2,5,-3]))