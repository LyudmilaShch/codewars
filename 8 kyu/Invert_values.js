function invert(array) {
    let result = [];
    for (let i = array.length-1; i >= 0; i--) {
       result[i]=array[i]*(-1);
       }
   return result;
}

console.log(invert([1,2,3,4,5]));

/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.*/