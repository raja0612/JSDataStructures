package Arrays;

import java.util.Arrays;

public class ArraysSum {

	public static void main(String[] args) {

		int a[] = {1,2,3,4,5,6,7,8,9,10};
		System.out.println("Sum...."+Arrays.stream(a).sum());
		System.out.println("Average...."+Arrays.stream(a).sum() / a.length);

	}

}
