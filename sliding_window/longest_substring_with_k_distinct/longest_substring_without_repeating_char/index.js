
//Longest substring without repeating char

function lengthOfLongestSubstring(string){
    let low = 0,high = 0
    let res = -Infinity
    let freq = new Map()

    for(high = 0;high<string.length;high++){
        // Add current character
        freq.set(string[high],(string[high]|| 0) +1)

        // using a length to compare with freq.size becuse no k is given
        let len = high -low +1

         // Shrink window if duplicate found (f.size < len means duplicate exists)
        while(freq.size <len){
            freq.set(string[low],freq.get(string[low] -1))
          
            if(freq.get(string[low] === 0)){

                // delete to frequncy to maintain the length
                freq.delete(string[low])
                
            }
            low++;
            len = high-low+1
        }
        // Now all characters are unique
        len = high - low + 1;
        res = Math.max(res, len);    

    }
     // If res never updated → return 0
    if (res === -Infinity) return 0;
    return res;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));         // Output: 0