// First Negative Number in Every Window of Size K
// 👉 Input:arr = [12, -1, -7, 8, -15, 30, 16, 28]
// k = 3

// 👉 Output:[-1, -1, -7, -15, -15, 0]
/*👉 You are given:

An array
A number k (window size)
👉 You have to:
Take every group of k continuous elements (window)
In each group → find the first negative number
If no negative → return 0 */

function firstNegtiveNumberOfEveryWindow(array,k){
    let n = array.length
    if(n < k) return 0
    let result = []

    //i <= n - k means: "Start only from positions where a full window of size k is possible"
    for(let i = 0;i<=n-k;i++){
        // n-k = 8-3 = 5 Why n - k = 5?
        //  Because after index 5, we cannot form a full window of size 3
        let found = false
        for(let j = i;j<i+k;j++){
            /*i + k tells where the window should end 
            eg. i = 4 ,k = 2, = 4 + 2 = 6 = 4,5 is ans 4 is start point and we skip 6 becuse j<i+k not j<=i +k-1
*/
            if(array[j]<0){
                result.push(array[j])
                found = true
                break;
            }
        }
        if(!found){
            result.push(0)
        }

    }
    return result
}

console.log(firstNegtiveNumberOfEveryWindow([12, -1, -7, 8, -15, 30, 16, 28],3))
