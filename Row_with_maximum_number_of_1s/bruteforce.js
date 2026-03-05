// Find the row with maximum number of 1's
// Problem Statement: You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting
// of only 0s and 1s. All the rows are sorted in ascending order.
// Your task is to find the index of the row with the maximum number of ones.
// Note: If two rows have the same number of ones, consider the one with a smaller index. 
// If there's no row with at least 1 zero, return -1.

function rowWithMaxmimumOnes(matrix,n,m){
    //it will store the maximum number of 1’s we have got 
    let cnt_max =0
    let index =-1 //index’ will store the row number.
// traverse the matrix:
    for(let i =0;i<n;i++){
        let cnt_ones = 0
        for(let j = 0;j<m;j++){
            cnt_ones += matrix[i][j]
        }
        if(cnt_ones >cnt_max){
            cnt_max = cnt_ones
            index = i
        }
    }
    return index
}
const matrix = [[1, 1, 1], [0, 0, 1], [0, 0, 0]];
const n = 3, m = 3;
console.log("The row with maximum no. of 1's is: " + rowWithMaxmimumOnes(matrix, n, m));
//Output: The row with maximum no. of 1's is: 0