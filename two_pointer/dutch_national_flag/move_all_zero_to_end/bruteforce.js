/* Move all 0s to the end while maintaining order of other elements.
Example:
Input:
[0,1,0,3,12]

Output:
[1,3,12,0,0] */

function bruteforce(array){
    let result = []
    // num is value not index if we write array[num] it would be print index 
//     array[0] = 0
// array[1] = 1
// array[3] = 3
// array[12] = undefined ,Because the array does not have index 12.
    for(let num of array){
        if(num > 0){
             result.push(num)
           // result.push(array[num]) // it would be wrong write this line 
        }
    }
    for(let num of array){
        if(num === 0){
            result.push(num)
        }
    }
    return result
}
console.log(bruteforce([0,1,0,3,12]))
/* posituve numbers.
for (i = 0 → n)
Time:O(n)

Second loop Finds 0 numbers.
for (i = 0 → n)
Time:O(n)
Total Time Complexity
O(n) + O(n)
Which becomes:O(2n)
In Big-O notation we ignore constants, so the final complexity is: O(n)

The brute force solution takes O(n) time because we traverse the array twice. 
The space complexity is O(n) since we store the result in a new array.
*/