function arr(n){
  n.sort();
   console.log(n);
  for(let i=1; i<n.length; i++){
    if(i != n[i-1]){
      return i;
    }
   }
}
console.log(arr([3,4,1]));

 
  
