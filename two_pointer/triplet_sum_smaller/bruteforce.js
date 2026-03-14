
//Check the sum If the sum is smaller than target → increase count
function triplet_sum_smaller(array, target) {
    let n = array.length
    let count = 0
    for (let i = 0; i < n - 2; i++) {//First person needs space for 2 (j & k)
        for (let j = i + 1; j < n - 1; j++) {//Second person needs space for 1(for k)
            for (let k = j + 1; k < n; k++) {//Third person needs space for 0 (nothing left remaing)
                let sum = array[i] + array[j] + array[k]
                if (sum < target) {
                    count++
                    /*we only increase the count when the sum is smaller than the target.
    If It Is NOT Less Than Target That means: sum >= target
    In brute force we simply ignore it.
    We do nothing and continue checking the next triplet.
   array= [-1,0,1,3] ta,rget = 2
Triplets:
(-1,0,1)  → sum = 0  <2  → count++
(-1,0,3)  → sum = 2  >=2 → ignore
(-1,1,3)  → sum = 3  >=2 → ignore
(0,1,3)   → sum = 4  >=2 → ignore*/
                }
            }
        }
    }
    return count

}
console.log(triplet_sum_smaller([-1, 0, 1, 3], 2))