function lowerbound(a, n, x) { //here  a = array,n = lenthf array ,x = value we want to kmow like 0,1
    let low = 0; high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.floor(low + high) / 2
        if (a[mid] <= x) {
            // maybe an answer
            ans = mid
            // look for smaller index on the left
            high = mid - 1
        } else {
            low = mid + 1// look on the right
        }
    }
    return ans
}
function rowWithMaxmimumOnes(matrix, n, m) {
    let cnt_max = 0;
    let index = -1;
    // traverse the rows:
    for (let i = 0; i < n; i++) {
        //         matrix[i] → the current row
        // m → total columns in that row
        // 1 → the value we want to find (first 1)
        let cnt_ones = m - lowerbound(matrix[i], m, 1);
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }
    return index
}
const matrix = [[1, 1, 1], [0, 0, 1], [0, 0, 0]];
const n = 3, m = 3;
console.log("The row with maximum no. of 1's is: " + rowWithMaxmimumOnes(matrix, n, m));
//Output: The row with maximum no. of 1's is: 0