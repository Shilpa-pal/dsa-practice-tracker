//K-th Element of two sorted arrays
function medianOfKth(a, b, m, n, k) {
    let arr3 = []
    let i = 0; j = 0
     // apply the merge step:
    while (i < m && j < n) {
        if (a[i] < b[j]) arr3.push(a[i++])
        else arr3.push(b[j++])
    }
 // copy the left-out elements:
    while (i < m) arr3.push(a[i++])
    while (j < m) arr3.push(b[j++])
// if we write arr3[k] would give the 6th element.
//Arrays start at 0, not 1.
//We use k-1 because humans count from 1, but arrays count from 0.
    return arr3[k - 1]

}
let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " +
    medianOfKth(a, b, a.length, b.length, 5));



