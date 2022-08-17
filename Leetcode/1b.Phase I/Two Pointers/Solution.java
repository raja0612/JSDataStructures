// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        
        int L  = 0; 
        int n = numbers.length; 
        int R = n -1;
        
        while( L < R) {
            int sum  = numbers[L] + numbers[R];
            
            if(sum == target) {
                return new int[] {L+1, R+1};
            } else if(sum > target) {
                R--;
            } else {
                L++;
            }
            
         }
        
        return new int[] {-1, -1};
        
    }
}