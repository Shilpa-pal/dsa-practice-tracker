//better solution
function kthElement(a1,b1,m1,n1,k){
    let ele = -1
    let cnt = 0
    let i =0;j = 0
    while(a1<m1 && b1<n1){
        if(a1[i] < b1[j]){
            if (cnt === k-1) ele = a1[i]
            cnt++
            i++ 
            }else{
                if (cnt === k - 1) ele = b1[j];
                cnt++
                j++
            }
        }
    // copy the left-out elements:

    while (i < m1){
        if (cnt === k - 1) ele = a1[i];
        cnt++;
        i++;
    }
    while (j < n1){
        if (cnt === k - 1) ele = b1[j];
        cnt++;
        j++;
    }
    return ele;

}
let a1 = [2, 3, 6, 7, 9];
let b1 = [1, 4, 8, 10];
console.log("The k-th element of two sorted arrays is: " + kthElement(a1, b1, a1.length, b1.length, 5));
    