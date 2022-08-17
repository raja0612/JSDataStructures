package Arrays;

public class ReverseArray {

	public static void main(String[] args) {

		int a[] = { 1, 2, 3, 4, 5, 6, 7 };

		int start = 0;
		int end = a.length - 1;
		int temp;
		while (start < end) {
			temp = a[start];
			a[start] = a[end];
			a[end] = temp;
			start++;
			end--;
		}

		System.out.println("Reverse");
		for (int element : a) {
			System.out.print(element + " ");
		}

		String name = "Raja";

		char nameArray[] = name.toCharArray();
		start = 0;
		end = nameArray.length - 1;
        char temp2;
		while (start < end) {
			temp2 = nameArray[start];
			nameArray[start] = nameArray[end];
			nameArray[end] = temp2;
			start++;
			end--;
		}

		System.out.println(" \n Reverse " + String.valueOf(nameArray));

	}

}
