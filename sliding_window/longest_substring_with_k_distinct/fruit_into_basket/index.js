
// fruits into basket

function fruitsIntoBasket(arr,k){
    let n = arr.length
    let low = 0
    let res = -1
    let freq = new Map()
    for(let high = 0;high<n;high++){

        freq.set(arr[high],(freq.get(arr[high]) || 0) + 1)

        while(freq.size >k){
            freq.set(arr[low],freq.get(arr[low])-1)

            if(freq.get(arr[low]) ===0){
                freq.delete(arr[low])
            }
            low++
        }
        res = Math.max(res, high - low + 1)

    }
    return res
}
console.log(fruitsIntoBasket([1,2,2,4],2))