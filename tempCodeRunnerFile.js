function optimalSonKthEle(a2, b2, k2) {
    let m = a2.length
    let n = b2.length
    if (n > m) optimalSonKthEle(n, m)
    let left = k2
    let low = (0, k2 - n)
    let high = (k, m)
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left-mid1
        let l1 = -Infinity, l2 = -Infinity
        let r1 = Infinity, r2 = Infinity
        if (mid1 < m) r1 = a[mid1]
        if (mid2 < n) r2 = b[mid2]
        if (mid1 - 1 <= 0) l1 = a[mid1 - 1]
        if (mid2 - 1 <= 0) l2 = b[mid2 - 1]
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2)
        }
        else if (l1 > r2) high = mid1 - 1
        else low = mid1 + 1
    }

    return 0
}
let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " + optimalSonKthEle(a, b, 5));    
