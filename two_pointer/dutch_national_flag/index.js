
// arrange number 0 ,1,2 or any other in sorted way without using the sorting

function sortArray(array) {

    let n = array.length
    let low = 0
    let mid = 0
    let high = n - 1

    while (mid <= high) {
        if (array[mid] === 0) {
            //do swapping
            [array[mid], array[low]] = [array[low], array[mid]] 
            low++,
            mid++
        }
        else if (array[mid] === 1) {
            mid++
        }
        /*Okay, 0 grows from left to right. That means numbers are added from the left side like 0, 0.
         That’s why we use low++ because it moves forward.And 2 grows from right to left. 
         That means we first put a 2 at the end, then another 2 before it like 2, 2. 
        
         0s are placed from the left side.Example:
Start [_,_,_,_,_] ,After first 0[0,_,_,_,_] ,After second 0 ,[0,0,_,_,_] So the 0 area grows to the right.
That is why: low++
         ** right region grows from the end” means It means:it grows from right to left, and that’s why we use high--.
We start putting 2s at the end of the array. Then we keep filling backwards.So 
Like stacking toys from the right side of the shelf. that's why we move high --
_ _ _ _ 2
_ _ _ 2 2
_ _ 2 2 2
The 2 area becomes bigger from the right side.*/
        else {
            [array[mid], array[high]] = [array[high], array[mid]]
            high--
        }

    }
    return array
}
console.log(sortArray([1,0,2,1,0,2]))