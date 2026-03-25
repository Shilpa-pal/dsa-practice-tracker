/* Replace K charchter
Goal: Find the length of the longest substring where all characters can become the same after at most k replacements.
📌 Example
Input:
s = "AABABBA"
k = 1
Output:4 */

function characterReplacement(string, k) {
    let n = string.length
    let res = 0;

    for (let i = 0; i < n; i++) {
        let freq = new Map()  //  reset every i
        let maxfreq = 0 // reset every i

        for (j = i; j < n; j++) {

            // add current character
            freq.set(string[j], (freq.get(string[j]) || 0) + 1);

            //update frerquncy
            maxfreq = Math.max(maxfreq, freq.get(string[j]))

            let windowLen = j - i + 1
            let replacement = windowLen - maxfreq

            // if repalcement k is valid window
            if (replacement <= k) {
                res = Math.max(res, windowLen);
            } else {
                // replacements > k → no point going further
                break;
            }
        }
    }
    return res
}
console.log(characterReplacement("ABAB", 2));    // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
console.log(characterReplacement("AAAA", 2));    // Output: 4