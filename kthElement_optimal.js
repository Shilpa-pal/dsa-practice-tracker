
function medianOfKthElement(a, b, k) {
    let m = a.length
    let n = b.length
//Because binary search must always run on the smaller array, never on the larger one.
//So:If you already have the smaller array in a → no need to swap
//If the larger array is in a → swap
    if (n > m) return medianOfKthElement(b, a)
    let left = k
    let low = Math.max(0, k - n), high = Math.min(k, m)
    
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2)
        let mid2 = left - mid1
        // Handle boundary elements// calculate l1, l2, r1, and r2
        let l1 = -Infinity, l2 = -Infinity;
        let r1 = Infinity, r2 = Infinity;
        if (mid1 < m) r1 = a[mid1];
        if (mid2 < n) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;

    }
    return 0// dummy statement
}
let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " + medianOfKthElement(a, b, a.length, b.length, 5));    
        