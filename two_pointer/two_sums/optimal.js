// optimal appraoch

function twoSum(array,target){
    let i = 0
    let j = array.length-1

    while(i<j){
        let sum = array[i] + array[j]
        if(sum === target){
            return [i,j] // it return index
            // return [array[i],array[j]]   // it return number
        }
        if(sum<target){
            i++;
        }
        else{ //sum > target → move right pointer (j--)
            j--
        }

    }
    return -1
}
console.log(twoSum([2,5,7,11,15], 9)); 