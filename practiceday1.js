
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
console.log("The k-th element of two sorted arrays is: " +
    bruteforce(a, b, 5));

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


