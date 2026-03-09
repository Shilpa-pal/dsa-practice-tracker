
// remove duplicates 

function removeDuplicates(array) {

    // it index of the officer that stand at 0 position 
    let officer = 0
    // it index of the cm that stand at position 1
    let cm = 1
    let unique = 1

    while (cm < array.length) {
        // comparing current index to previous 
        if (array[cm] === array[cm - 1]) {
            cm++
        } else {
            //cm → finds the unique number
            //officer + 1 → position where the unique number should be stored next unique position
            array[officer + 1] = array[cm]
            officer++//officer → last stored unique element
            unique++ //unique → count of unique numbers
            cm++//cm → scanning pointer (always moves forward)
        }
    }
    return unique
    // return array.slice(0, unique)  this line give store uniqu number in array
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 3]))