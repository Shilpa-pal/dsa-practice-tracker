
// give some of dulplicates
function sumOfDuplicates(array,target){
    let n = array.length
    let left = 0
    let right = n-1
    let result = []
    while(left <right){
        let sum = array[left] + array[right]

        if(sum === target){
            result.push(array[left],array[right])
            while(array[left] === array[left -1]){
                left ++
            }
            while(array[right] === array[right +1]){
                right--
            }
            left++
            right--
        }
        else if(sum <target){
            left ++
        }else{
            right --
        }

    }
    return result 
}
console.log(sumOfDuplicates([1,1,1,2,2,3,3,3],4))