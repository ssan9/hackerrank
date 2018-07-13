function find(arr, tar){
  let ar = arr.sort();
  console.log(ar);
  for (let i=0; i<ar.length; i++){
    for (let j=0; j<ar.length; j++){
      for (let k=0; k<ar.length; k++){
        for (let l=0; l<ar.length; l++){
          if (arr[i]+ar[j]+ar[k]+ar[l]===tar && i!=j && i!=k && i!=l && j!=k && j!=l && k != l ) return [i, j, k, l];
        }
      }
    }
  }
  return false;
}

console.log(find([10,20,12,30,18,10,70],50)); 

function findArrayQuadruplet(arr, s) {
  // your code goes here
  let ar = arr.sort();
  console.log(ar);
  for (let i=0; i<ar.length-3; i++){
    for (let j=i+1; j<ar.length-2; j++){
      for (let k=j+1; k<ar.length-1; k++){
        for (let l=k+1; l<ar.length; l++){
          if (arr[i]+ar[j]+ar[k]+ar[l]===tar) return [i, j, k, l];
        }
      }
    }
  }
  return false;
}

