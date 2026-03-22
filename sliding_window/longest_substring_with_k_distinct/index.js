//Longest substring with K unique


function longestKSubstr(string, k) {
    let n = string.length
    let low = 0
    // taking -1 we can also take -Infinty
    let res = -1;
    let freq = new Map()
    for (let high = 0; high < n; high++) {
        // it will store high [0,1,2,3] index measn high[0] =,high[1]=
        // if you not want to use extra varible you can use string[high] instead of c everywhere 
        const c = string[high]
        // Add current character to map
        freq.set(c, (freq.get(c) || 0) + 1)

        // Shrink window if more than k unique characters
        while (freq.size > k) {
            const leftChar = string[low]

            //when the number of unique characters in the window becomes MORE than `k` → shrink
            //             after adding 'e': freq = { a:3, b:2, c:1, e:1 } → size = 4 ❌ MORE than k!
            // 4 > 3 → SHRINK!
            freq.set(leftChar, freq.get(leftChar) - 1)

            if (freq.get(leftChar) === 0) {
                freq.delete(leftChar)
            }
            low++;
        }

        // if exactly k uniqu charchter
        if (freq.size === k) {
            res = Math.max(res, high - low + 1)
        }

    }
    return res
}
console.log(longestKSubstr("aabacbebebe", 3)); // Output: 7
console.log(longestKSubstr("aaaa", 2));         // Output: -1
console.log(longestKSubstr("aabab", 1));        // Output: 2