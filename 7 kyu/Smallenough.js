function smallEnough(a, limit){
    
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit){ 
      return false;
      break
    }
  }
  return true;
}
console.log(smallEnough([101, 45, 12, 105, 99, 105], 107));

//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//You can assume all values in the array are numbers.