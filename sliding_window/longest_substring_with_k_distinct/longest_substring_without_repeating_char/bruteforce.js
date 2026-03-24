
function main(string){
    let n = string.length
    for(let i =0;i<n;i++){
        // it only store unique chacter but map store value in key value pair eg. a:2,b:1
        const seen = new Set()
        for(j = i;j<n;j++){
            

            // If character already seen → STOP
            if(seen.has(string[j])) break;

            seen.add(string[j])


            // Update result by using high -low +1 becuse we want to length between i to j
            res = Math.max(res, j - i + 1);

        }
    }
    return res; 
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   //4