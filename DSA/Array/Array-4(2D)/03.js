/** <aside>
💡 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

</aside>*/

function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
  
    const transposedMatrix = [];
  
    for (let j = 0; j < numCols; j++) {
      const row = [];
      for (let i = 0; i < numRows; i++) {
        row.push(matrix[i][j]);
      }
      transposedMatrix.push(row);
    }
  
    return transposedMatrix;
  }
  
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  const transposed = transposeMatrix(matrix);
  console.log(transposed); 
  