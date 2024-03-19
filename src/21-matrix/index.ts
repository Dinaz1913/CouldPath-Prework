/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

/*class Matrix {
  matrix: number [][] = [];
  constructor(private matrix: string) {
    
  }

  get rows() {
    return [];
  }

  get columns() {
    return [];
  }
}
*/

class Matrix {
  matrix: number[][];

  constructor(private matrixString: string) {
    this.matrix = this.parseMatrix(matrixString);
  }

  private parseMatrix(matrixString: string): number[][] {
    return matrixString.split('\n').map(row =>
      row.trim().split(' ').map(Number)
    );
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const numRows = this.matrix.length;
    const numCols = this.matrix[0].length;
    const columns: number[][] = [];

    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      const column: number[] = [];
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        column.push(this.matrix[rowIndex][colIndex]);
      }
      columns.push(column);
    }

    return columns;
  }
}





export { Matrix };
