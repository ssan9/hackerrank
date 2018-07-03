Objective

In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

Task

Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and 
y. The function must return a count of all such objects o in array a that satisfy o.x == o.y.

Input Format

The first line contains an integer denoting n. 
Each of the n subsequent lines contains two space-separated integers describing the values of x and y.

Constraints

.5<=n<=10
.1<=x, y<=100

Output Format

Return a count of the total number of objects o such that o.x == o.y. Locked stub code in the editor prints the returned value to STDOUT.

Sample Input 0

5
1 1
2 3
3 3
3 4
4 5
Sample Output 0

2
Explanation 0

There are n=5 objects in the objects array:

. object1: {
	x: 1,
	y: 1
}

. object2: {
	x: 2,
	y: 3
}

. object3: {
	x: 3,
	y: 3
}

. object4: {
	x: 3,
	y: 4
}

.object5: {
	x: 4,
	y: 5
}


Because we have two objects o that satisfy o.x===o.y (i.e., object1 and object3), we return 2 as our answer.

function getCount(objects) {
    let n = 0 ;
     for(let i = 0; i<objects.length; i++) {
         if(objects[i].x === objects[i].y){
             n ++;
         }
     }
    return n;
}

//or

function getCount(objects) {
    const obj = objects.filter(object => {
        return object.x === object.y
    }).length;
    return obj;
}


//or

function getCount(objects) {
    return objects.filter(obj => obj.x == obj.y).length;
}