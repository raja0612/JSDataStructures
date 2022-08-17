package Arrays;

import java.util.Arrays;

public class RemoveDuplicates {

	public static void main(String[] args) {
		int arr[] = { 1, 2, 2, 3, 4, 4, 4, 5, 5, 1, 6, 6, 7, 8, 9, 9, 9, 9, 0 };

		// first sort array.
		Arrays.sort(arr);

		int j = 0; // index is used to store unique elements.
		for (int i = 0; i < arr.length - 1; i++) {
			// check adjacent elements.
			if (arr[i] != arr[i + 1])
				arr[j++] = arr[i];
		}

		// add last element because , we skip that one above iteration to avoid
		// ArrayIndexOutOfBound Exception.
		arr[j++] = arr[arr.length - 1];

		// run upto j index
		for (int i = 0; i < j; i++) {
			System.out.print(arr[i] + " ");
		}

		String names[] = { "Raja", "Max", "Max", "Jack", "Mahesh","Max" };
		int k = 0;
		for (int i = 0; i < names.length - 1; i++) {
			if (!names[i].equalsIgnoreCase(names[i + 1]))
				names[k++] = names[i];

		}
		// run up to k index
		for (int i = 0; i < k; i++) {
			System.out.print(names[i] + " ");
		}

	}

}
