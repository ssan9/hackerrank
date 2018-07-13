const arrInput = ["home", "about", "contact"];

const arrOutput = [
  {
    display: "Home",
    id: "home"
  },
  {
    display: "About",
    id: "about"
  },
  {
    display: "Contact",
    id: "contact"
  }
];

const objInput = {
  cat1: {
    id1: "1 value",
    id2: "2 value"
  },
  cat2: {
    id3: "1 value"
  }
};

const objOutput = {
  id1: {
    value: "1 value",
    category: "cat1"
  },
  id2: {
    value: "2 value",
    category: "cat1"
  },
  id3: {
    value: "1 value",
    category: "cat2"
  }
};

//Solution 1
let newArr = arrInput.map((arr, index) => {
  return {
    display: arr.charAt(0).toUpperCase() + arr.slice(1),
    id: arr
  };
});

console.log(newArr);

//Solution 2 - using for...in method
var cat1 = {
  id1: "1 value",
  id2: "2 value"
};

var cat2 = { id3: "1 value" };
var p;

for (p in cat1) {
  var n = { value: cat1[p], category: "cat1" };
  console.log({ [p]: n });
}

for (p in cat2) {
  var n = { value: cat2[p], category: "cat2" };
  console.log({ [p]: n });
}

//Solution 3- using Object.keys method
var cat1 = {
  id1: "1 value",
  id2: "2 value"
};

var cat2 = { id3: "1 value" };
var arr1 = Object.keys(cat1);
var arr2 = Object.keys(cat2);

for (var i = 0; i < arr1.length; i++) {
  var NewObject = {
    value: cat1[arr1[i]],
    category: "cat1"
  };
  console.log({ [arr1[i]]: NewObject });
}

for (var i = 0; i < arr2.length; i++) {
  var NewObject = {
    value: cat2[arr2[i]],
    category: "cat2"
  };
  console.log({ [arr2[i]]: NewObject });
}

//Solution 4 - Objects- Correct output using for...in method

let obj = {};

for (let key in objInput) {
  for (let key2 in objInput[key]) {
    obj[key2] = {
      value: objInput[key][key2],
      category: key
    };
  }
}

console.log(obj);

//Solution 5 - Objects- Correct output using Object.keys method

let obj = {};

Object.keys(objInput).forEach(function(key) {
  Object.keys(objInput[key]).forEach(function(key2) {
    obj[key2] = {
      value: objInput[key][key2],
      category: key
    };
  });
});

console.log(obj);

//Solution 6 - Objects- Correct output using for loop method

let key = Object.keys(objInput);
let obj = {};

for (let i = 0; i < key.length; i++) {
  let key2 = Object.keys(objInput[key[i]]);
  for (let j = 0; j < key2.length; j++) {
    obj[key2[j]] = {
      value: objInput[key[i]][key2[j]],
      category: key[i]
    };
  }
}

console.log(obj);

const objInput = {
    cat1: {
        id1: '1 value',
        id2: '2 value'
    },
    cat2: {
        id3: '1 value',
    }
};
// console.log(objInput);
// console.log(objInput.cat1.id1);
// console.log(objInput["cat1"].id1);

let cats = Object.keys(objInput);
// //for(i=0;i<cats.length;i++)
//   {
// console.log(Object.keys(objInput[cats[i]]));      
//   }

//for all cats get all the keys

//   console.log(objInput[cat1], objInput[cat2]);
//console.log(cats, objectKeys);

let obj = {};

for(let i = 0; i < cats.length; i++) {
 let newObj = Object.keys(objInput[cats[i]]); 
  for(let j = 0; j < newObj.length; j++)
    {
    obj[newObj[j]] = {
      value: objInput[cats[i]][newObj[j]],
      category: cats[i]
    }
    }
  }


console.log(obj);

var obj ={
  name: "Swati",
  age: 18
  
}

var object = Object.keys(obj);
//console.log(object[0]);

for(i=0;i<object.length;i++){
console.log(obj[object[i]]);}

const objInput = {
    cat1: {
        id1: '1 value',
        id2: '2 value'
    },
    cat2: {
        id3: '1 value',
    }
};


for (var key in objInput) {
  for (var key2 in objInput[key]){
    console.log({[key2]: {value :objInput[key][key2], category: key}});
  }
}

const objOutput = {
    id1: {
        value: '1 value',
        category: 'cat1'
    },
    id2: {
        value: '2 value',
        category: 'cat1'
    },
    id3: {
        value: '1 value',
        category: 'cat2'
    }
};
// for (var key in objInput) {
//   for (var key2 in objInput[key]) {
//     console.log(key, key2, objInput[key][key2], objInput[key][key]);
//   }
// }
for (var key in objInput) {
  for (var key2 in objInput[key]) {
    console.log(key);
  }
}

