function optimalSonKthEle(a2, b2, k2) {
    let m = a2.length
    let n = b2.length
    if (n > m) optimalSonKthEle(b2, a2,k2)
    let left = k2
// We choose mid1 elements from A and mid2 = k - mid1 from B.
// mid1 must stay in a valid range:
// 1) mid1 cannot be negative        → mid1 ≥ 0
// 2) mid1 cannot exceed A's length  → mid1 ≤ m
// 3) mid2 cannot be negative        → mid2 = k - mid1 ≥ 0 → mid1 ≤ k
// 4) mid2 cannot exceed B's length  → mid2 = k - mid1 ≤ n → mid1 ≥ k - n
//
// Combine all conditions:
// lower limit = max(0, k - n)
// upper limit = min(k, m)
//
// So we do binary search on mid1 in this range.
    let low = Math.max(0, k2 - n)
    let high = Math.min(k2, m)
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left-mid1
        let l1 = -Infinity, l2 = -Infinity
        let r1 = Infinity, r2 = Infinity
        if (mid1 < m) r1 = a2[mid1]
        if (mid2 < n) r2 = b2[mid2]
        if (mid1 - 1 >= 0) l1 = a2[mid1 - 1]
        if (mid2 - 1 >= 0) l2 = b2[mid2 - 1]
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2)
        }
        else if (l1 > r2) high = mid1 - 1
        else low = mid1 + 1
    }

    return 0
}
let a2 = [2, 3, 6, 7, 9];
let b2 = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " + optimalSonKthEle(a2, b2, 5));    

