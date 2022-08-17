package Arrays;

public class ArrayBasics {

	public static void main(String[] args) {
		// array initialization.
		int a[] = { 1, 5, 7, 8, 9 };
		int length = a.length;
		System.out.println("Length of array" + length);

		// array traverse.

		for (int element : a) {
			System.out.println("Array values" + element);
		}

		for (int i = 0; i < a.length; i++) {
			System.out.println(a[i]);

		}

	}

}
