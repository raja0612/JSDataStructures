package Arrays;

import java.util.Arrays;
import java.util.Collections;

public class ArrayMinMaxValue {

	public static void main(String[] args) {
		Integer a[] = { 13, 17, 23, 45, 78, 99, 0, 100 };

		System.out.println("Minimum.." + Collections.min(Arrays.asList(a)));
		System.out.println("Maximum..." + Collections.max(Arrays.asList(a)));

		Arrays.sort(a);
		System.out.println("Minimum..." + a[0]);
		System.out.println("Maximum..." + a[a.length - 1]);

	}

}
