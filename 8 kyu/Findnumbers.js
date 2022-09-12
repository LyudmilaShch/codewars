function divisibleBy(numbers, divisor){
    let result = [];
    for (let i = numbers.length; i >= 0; i--) {
       if (numbers[i] % divisor == 0){
         result.unshift(numbers[i]);
       }}
     return result;
   }
   console.log(divisibleBy([1, 4, 8, 6], 2));

/*Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]*/