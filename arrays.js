Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Task

Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in nums.

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function: 
The first line contains an integer, , denoting the size of the  array. 
The second line contains  space-separated numbers describing the elements in nums.

Constraints

. 1<=n <=10

. 0<=nums; i<=100, where nums; is the number at index i;

. The numbers in nums are not distinct. 

Output Format

Return the value of the second largest number in the nums array.

Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
Explanation 0

Given the array nums = [2,3,6,6,5] , we see that the largest value in the array is 6 and the second largest value is5 . Thus, we return 5 as our answer.










function getSecondLargest(nums) {
    nums.sort();
    let count = 0;
    for(let i = nums[nums.length-1]; i>=0; i--){
        if(nums[i] == nums[i-1]) {
            count++;
        }
        if(count >0) {
            return nums[nums.length-(count + 2)]; 
        }
        else {
            return nums[length-1];
        }
    }
}