
// hash map using
function twoSum(array,target){
    let hashmap = {}
    for(let i =0;i<array.length;i++){
        const num = array[i]
        const complement = target - num

        if(hashmap.hasOwnProperty(complement)){
            return [hashmap[complement],i] // pair found
            //  hashmap[2] = 0
// hashmap[5] = 1
// hashmap[7] = 2
        }
        //If the complement was not found, we store the current number in the hashmap.{2:0}
        hashmap[num] = i
    }
    return [] // found any pair 
}
// Example
console.log(twoSum([2,5,7,11,15], 9)); 
