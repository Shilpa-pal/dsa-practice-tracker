
// three sum 
function threeSum(array, target) {
    array.sort((a, b) => a - b)
    let result = []
    let n = array.length

    for (i = 0; i < n - 2; i++) {

        // skip duplicate values for i
        if (i > 0 && array[i] === array[i - 1]) {
            continue
        }
        let left = i + 1
        let right = n - 1
        while (left < right) {
            let sum = array[i] + array[left] + array[right]

            if (sum === target) {
                result.push([array[i], array[left], array[right]])

                left++;
                right--
                while (array[left] === array[left - 1]) {
                    left++
                }

                while (array[right] === array[right + 1]) {
                    right--
                }
            } else if (sum < target) {
                left++
            } else {
                right--
            }

        }


    }
    return result
}


console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))