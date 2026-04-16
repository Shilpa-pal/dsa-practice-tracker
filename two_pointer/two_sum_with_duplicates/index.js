
// give some of dulplicates
function sumOfDuplicates(array,target){
    let n = array.length
    let left = 0 // starts at beginning
    let right = n-1  // starts at end
    let result = []
    while(left <right){
        let sum = array[left] + array[right]

        if(sum === target){
            result.push(array[left],array[right])
            // skip while next is same
            while(array[left] === array[left +1]){// skip left duplicates
                left ++
            }
            while(array[right] === array[right -1]){//// skip right duplicates
                right--
            }
            left++ // move past the last duplicate
            right--// move past the last duplicate
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
