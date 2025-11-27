
function bruteforce(a, b, k) {
    let m = a.length
    let n = b.length
    let i = 0; j = 0
    // to push two sorted array in one single array
    let arr = []
    // putting number which one is the smaller first 
    while (i < m && j < n) {
        if (a[i] < b[j]) arr.push(a[i++])
        else arr.push(b[j++])
    }
    // pushing the leftover numbers
    while (i < m) arr.push(a[i++]);
    while (j < n) arr.push(b[j++]);

    return arr[k - 1]
}
let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " +bruteforce(a, b, 5));

// time complexcity
// Merging two arrays and comparing and pushing elements until one array ends → this takes O(m + n)
// Step 2: Pushing leftover elements
// Also takes O(m + n) (but still overall linear)
// Step 3: Accessing arr[k-1]
// This stores all elements of both arrays → size = m + n O(m + n) This is O(1)
// 	Complexity
// /Time	O(m + n)
// Space	O(m + n)

//better solution


function kthElement(a1, b1, m1, n1, k) {
    let ele = -1;
    let cnt = 0;
    let i = 0, j = 0;

    console.log("Starting merge...");
    console.log("a1:", a1);
    console.log("b1:", b1);
    console.log("----------------------");

    while (i < m1 && j < n1) {

        console.log(`Step ${cnt}: Comparing a1[${i}] = ${a1[i]} and b1[${j}] = ${b1[j]}`);

        if (a1[i] < b1[j]) {
            console.log(`--> Taking ${a1[i]} from a1`);
            if (cnt === k - 1) {
                console.log(`### Found k-th element: ${a1[i]}`);
                ele = a1[i];
            }
            cnt++;
            i++;
        } else {
            console.log(`--> Taking ${b1[j]} from b1`);
            if (cnt === k - 1) {
                console.log(`### Found k-th element: ${b1[j]}`);
                ele = b1[j];
            }
            cnt++;
            j++;
        }

        console.log(`Updated cnt = ${cnt}, i = ${i}, j = ${j}`);
        console.log("----------------------");
    }

    while (i < m1) {
        console.log(`Step ${cnt}: Taking leftover a1[${i}] = ${a1[i]}`);
        if (cnt === k - 1) {
            console.log(`### Found k-th element: ${a1[i]}`);
            ele = a1[i];
        }
        cnt++;
        i++;
        console.log(`Updated cnt = ${cnt}, i = ${i}, j = ${j}`);
        console.log("----------------------");
    }

    while (j < n1) {
        console.log(`Step ${cnt}: Taking leftover b1[${j}] = ${b1[j]}`);
        if (cnt === k - 1) {
            console.log(`### Found k-th element: ${b1[j]}`);
            ele = b1[j];
        }
        cnt++;
        j++;
        console.log(`Updated cnt = ${cnt}, i = ${i}, j = ${j}`);
        console.log("----------------------");
    }
    return ele;
}

let a1 = [2, 3, 6, 7, 9];
let b1 = [1, 4, 8, 10];
console.log("Result: " + kthElement(a1, b1, a1.length, b1.length, 7));


//optimalsolution 

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

