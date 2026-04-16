
// question is squares of sorted array

function sortedSquares(arr){
    //making two empty array to store negative number in one array and positive array in another
    let negativearray = []
    let positivearray = []

    // running a loop in arr if arr[i]<0 we will store in negative array
    //or if arr[i]>0 we store in positivearray
    for(let i =0;i<arr.length;i++){
        if(arr[i]<0){
           negativearray.push( arr[i])
        }else{
           positivearray.push(arr[i])
        }     
    }
    //step2: sequare both arrays
    for(let i=0;i<negativearray.length;i++){
       negativearray[i] = negativearray[i] * negativearray[i]
    }
    for(let i=0;i<positivearray.length;i++){
        positivearray[i] =  positivearray[i]* positivearray[i]  
    }
    //step3. reverse negtive array
    negativearray.reverse()

    // merge two sorted array 
    let i =0
    let j =0
    let result = [] // in this array we compare both array and store in this one by one 
    while(i<negativearray.length && j <positivearray.length){
        if(negativearray[i] <=positivearray[j]){
            result.push(negativearray[i])
            i++
        }else{
            result.push(positivearray[j])
            j++
        }
    }

    // remaining element
    // that may gets left in array so we adding here for both i and j
    while(i<negativearray.length){
        result.push(negativearray[i])
        i++
    }
    while(j<positivearray.length){
        result.push(positivearray[j])
        j++
    }
    return result 
}
console.log(sortedSquares([-4,-1,2,3,5]))
