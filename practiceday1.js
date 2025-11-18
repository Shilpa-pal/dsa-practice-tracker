function findingKthElme(a, b, k) {
    let n = a.length
    let m = b.length
    if (n > m) return findingKthElme(b, a)

    let left = k
     let low = min(0, k - a), high = max(k, b)
    let mid1 = Math.floor((low + high) / 2)
    let mid2 = left - mid1
    while (low <= high) {
        
        let l1 = -Infinity
        let l2 = -Infinity
        let r1 = Infinity
        let r2 = Infinity

        if (mid1<m) r2 = a[mid1]
        if (mid2<n) r1 = b[mid2]

        if(mid1-1>=0)l2 = a[mid1 -1]
        if(mid2-1>=0)l1= b[mid2 -1]
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }

        // eliminating the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;

    }
    return 0// dummy statement
}
let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " + findingKthElme(a, b,5));    
        
     
    