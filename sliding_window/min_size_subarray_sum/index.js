

function main(array, target) {

    let n = array.length;
    if (n < target) return 0;
    let low = 0;
    let high = 0;
    let sum = 0
    let minLen = Infinity


    while (high < n) {
        sum = sum + array[high];

        // shrink window while sum >= target
        while (sum >= target) {
            minLen = Math.min(minLen, high - low + 1)
            sum = sum - array[low]
            low++
        }
        high++
    }
    //If minLen is still Infinity, return 0, otherwise return minLen.”
    return minLen === Infinity ? 0 : minLen;
}
console.log(main([1, 2, 4, 4], 4))