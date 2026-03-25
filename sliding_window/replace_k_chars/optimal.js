
function characterReplacement(string, k) {

    let n = string.length
    let res = 0
    let low = 0
    let maxLen = 0
    let freq = new Map()
    //1. strun the loop 
    for (high = 0; high < n; high++) {

        //2.Added charchter to map
        freq.set(string[high],(freq.get(string[high]) || 0) + 1)

        // 3.updating max frequncy
        maxLen = Math.max(maxLen,(freq.get(string[high])))

        //4. checking is window is valid
        let windowLen = high - low +1
        if(windowLen-maxLen >k){

            // 5.if true shrink the window 
            freq.set(string[low],freq.get(string[low]-1));
            if(freq.get(string[low])===0){
                freq.delete(string[low])
            }
            low++
        }
        //6.updating the result
        res = Math.max(res,high-low+1)

    }
    return res
}
console.log(characterReplacement("ABAB", 2));    // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
console.log(characterReplacement("AAAA", 2));    // Output: 4


