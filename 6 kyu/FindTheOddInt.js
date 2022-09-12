function findOdd(A) {
    const count = (arr, val) => arr.filter((item) => item === val).length;
    let target = 0;
    A.forEach((arrnum) => {
      if (count(A, arrnum) % 2 !== 0) {
        target = arrnum;
      }
    });
    return target;
  }
  console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));

  /*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

/*var a = a.map( s => s.length );
тоже самое, что и 
var a = a.map(function(s){ return s.length } );
*/
