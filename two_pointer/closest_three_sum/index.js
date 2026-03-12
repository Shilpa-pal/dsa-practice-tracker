
// closet three sum if target number is 3 
//if we find 0 difference is the close st and after that 1 , 2 and three differnce so on

function threeSumClosest(arr, target) {
    // sorting the array
    arr.sort((a, b) => a - b)

    let n = arr.length

    let closest = arr[0] + arr[1] + arr[2]

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1
        let right = n - 1
        while (left < right) {

            let sum = arr[i] + arr[left] + arr[right]

            //Is current distance < previous best distance? distance(means target) 
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum
                // target = 10,closest = 7,sum = 9
                // Distances:
                // |7 - 10| = 3
                // |9 - 10| = 1
                // Since:1 < 3 .Condition is true.// So we update:closest = 9 
                // The condition is false. So we do nothing.closest stays 9 and It moves pointers:
            }
            else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return closest
}
console.log(threeSumClosest([-1, 2, 1, -4], 1))