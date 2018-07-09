Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 3, 4

function find(arr, tar){
  let ar = arr.sort();
  console.log(ar);
  for (let i=0; i<ar.length; i++){
    for (let j=0; j<ar.length; j++){
      if (arr[i]+ar[j]===tar) return [i+1, j+1];
    }
  }
  return false;
}

console.log(find([10,20,40,30,40,10,70],50));