//two pinter appraoch 

function twoSum(array,target){
    for(i =0;i<array.length;i++){
        for(j = 1;j<array.length;j++){
            if(array[i]+ array[j] === target){
                // return [array[i],array[j]] //.. to get number array 
                return [i,j] // to get indexes of array
            }
        }
    }
}
let ans = twoSum([2,7,11,15], 9)
console.log(ans)