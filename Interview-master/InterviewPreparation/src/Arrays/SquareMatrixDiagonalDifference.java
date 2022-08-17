package Arrays;

public class SquareMatrixDiagonalDifference {

	public static void main(String[] args) {
		int[][] arr = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

		/* values
		 * 1 2 3 
		 * 4 5 6 
		 * 7 8 9
		 * 
		 * array cells
		 * 00 01 02 
		 * 10 11 12 
		 * 20 21 22
		 * 
		 * first diagonal cells 00 11 22 , row and column numbers are equal. 
		 * second diagonal cells 02 11 20 , row index + column index = array.length -1
		 * 
		 * |1+5+9 - 3+5+7| = 0
		 *
		 * 
		 */

		int length = arr.length;
		int firstDiagonalSum = 0;
		int secondDiagonalSum = 0;

		for (int row = 0; row < length; row++) {
			for (int column = 0; column < length; column++) {
				if (row == column) {
					firstDiagonalSum += arr[row][column];
				}

				if ((row + column) == length - 1) {
					secondDiagonalSum += arr[row][column];
				}
			}
		}

		if (firstDiagonalSum >= secondDiagonalSum) {
			System.out.println("Matrix Diagonal Difference..." + (firstDiagonalSum - secondDiagonalSum));
		} else {
			System.out.println("Matrix Diagonal Difference..." + (secondDiagonalSum - firstDiagonalSum));
		}

	}

}
