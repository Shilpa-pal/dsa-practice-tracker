
// remove duplicates 

function removeDuplicates(array){

    let slow = 0 //slow → last unique element

    let fast = 1 //fast → scanning pointer
    let unique = 1
    for(let fast = 1;fast<array.length;fast++){
        if(array[fast] !== array[slow]){
            slow++
            array[slow] = array[fast]
            unique ++
        }
    }
    return slow + 1
    // return array.slice(0, unique)
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3]))