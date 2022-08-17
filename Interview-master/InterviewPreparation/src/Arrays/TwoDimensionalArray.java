package Arrays;

public class TwoDimensionalArray {

	public static void main(String[] args) {

		int a[][];
		a = new int[][] { { 1, 2, 3 }, { 3, 4, 5 }, { 6, 7, 8 } };

		for (int i = 0; i < a.length; i++) { // no of rows loop
			for (int j = 0; j < a.length; j++) { // no of columns
				System.out.print(a[i][j] + " ");
			}
			System.out.println(); // new line for each row
		}

	}

}
