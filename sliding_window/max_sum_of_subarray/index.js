// Given an array of integers arr[] and  a number k . Return the maximum of a subarray  of size k.

function maxSumOfSubArray(array, k) {
    // low and high stand one 0 and 1 index
    if (array.lengh < k) return 0
    
    let windowSum = 0
    let maxSum = -Infinity

    // sum of first k elements
    for (let i = 0; i < k; i++) {
        windowSum = windowSum + array[i]
    }
    // updating the maxSum
    maxSum = windowSum

    // slide the window
    for (let i = k; i < array.length; i++) {
        /* // Update window sum by adding new element and removing old element
    array[i] → new element entering the window
    array[i - k] → element removing the window */
        windowSum += array[i] - array[i - k]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum;

}


console.log(maxSumOfSubArray([100, 200, 300, 400], 2))