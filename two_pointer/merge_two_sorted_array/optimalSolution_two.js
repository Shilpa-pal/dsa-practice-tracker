
function sortedSquares(arr) {
    // left intialize at 0 index
    let left = 0
    //left intailize at last index
    let right = arr.length - 1

    //position 
    let pos = arr.length - 1
    let result = new Array(arr.length) // i using this array becuse it will hold position like
    // result = [_, _, _, _, _]

    //Keep comparing from both ends until pointers meet.
    while (left <= right) {
        let leftSq = arr[left] * arr[left]
        let rightSq = arr[right] * arr[right]

        if (leftSq > rightSq) {
            //Store the square of the left element at index pos in the result array.
            result[pos] = leftSq
            left++
        } else {
            result[pos] = rightSq
            right--
        }
        //We are using -- to move from right to left. In same way pos also moving from
        //  right to left in the result array.this was the reason we write pos-- after
        //  placing the largest square at the end.
        /* Why pos-- is Needed
Because we are placing elements from largest → smallest.
So the result array is filled like this:
Step 1: [_, _, _, _, 64]
Step 2: [_, _, _, 49, 64]
Step 3: [_, _, 16, 49, 64]
Step 4: [_, 9, 16, 49, 64]
Step 5: [1, 9, 16, 49, 64]
note:
largest square → placed at end
pos moves backward → pos--*/
        pos--//We use pos-- because we are filling the result array from right to left.

    }
    return result
}
console.log("program run")
console.log(sortedSquares([-7, -3, -1, 4, 8]))
console.log("no run")