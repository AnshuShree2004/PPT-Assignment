function generateSpiralMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(new Array(n).fill(0));
    }
    let num = 1;
    let rowStart = 0,
      rowEnd = n - 1;
    let colStart = 0,
      colEnd = n - 1;
  
    while (num <= n * n) {
      // Traverse right
      for (let j = colStart; j <= colEnd; j++) {
        matrix[rowStart][j] = num++;
      }
      rowStart++;
  
      // Traverse down
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = num++;
      }
      colEnd--;
  
      // Traverse left
      for (let j = colEnd; j >= colStart; j--) {
        matrix[rowEnd][j] = num++;
      }
      rowEnd--;
  
      // Traverse up
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = num++;
      }
      colStart++;
    }
  
    return matrix;
  }
  
  const n = 3;
  const spiralMatrix = generateSpiralMatrix(n);
  for (let row of spiralMatrix) {
    console.log(row);
  }
  