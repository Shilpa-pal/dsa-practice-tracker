
function triplet_sum_smaller(array, target) {
    array.sort((a, b) => a - b)
    let count = 0
    let n = array.length
    for (let i = 0; i < n - 2; i++) {

        let left = i + 1
        let right = n - 1
        while (left < right) {
            let sum = array[i] + array[left] + array[right]


            if (sum >= right) { 
                right--         /*above code means:
        sum == target OR sum > target
        Both are invalid because the question asks for: sum < target
        So when the sum is equal or bigger, we must reduce the sum. 

/*      If arr[i] + arr[left] + arr[right] < target, why this condition becuse we have to 
        find number that is less than tireget so sum< target this condition we need 
        then all elements between left and right will also form valid triplets because the array is sorted.
        Therefore:count += right - left */
        
            } else {
                count = count + (right - left)
                left++
            }
        }
    }
    return count
}
console.log(triplet_sum_smaller([-1, 0, 1, 3],2))