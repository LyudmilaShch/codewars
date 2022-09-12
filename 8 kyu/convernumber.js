function digitize(n) {
    let result = [];
    let myArray = (""+n).split(''); //Метод split осуществляет разбиение строки в массив по указанному разделителю.
    for (let i = myArray.length - 1; i >= 0; i--) {
        result[i] = parseInt(myArray.shift(),10) // синтаксис parseInt(string, radix); Функция parseInt()принимается в качестве аргумента и принимает целое число в соответствии с основанием системы счисления.
  }
  return result;
  }
   console.log(digitize(123456));

/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]*/ 


