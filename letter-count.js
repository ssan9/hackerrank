module.exports = function letterCount(str) {
    let count = {};
    for(let i = 0; i<str.length; i++) {
    	let letter = str.charAt(i);
		if(count[letter]) {
			count[letter]++;
		}
		else{
			count[letter] = 1;
		}
    }
    return count; 
};

let letterCount = str => {
  return str.split('').reduce((count, letter) => {
    count[letter] ? count[letter]++ : count[letter] = 1;
    return count;
  }, {});
};

function letterCount(str) {  
  let count = {};
  str.split('').forEach(function(letter) {
     count[letter] ? count[letter]++ : count[letter] = 1;
  });
  return count;
};
    
