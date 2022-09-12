function descendingOrder(n){
 return parseInt((n+'').split('').sort().reverse().join(''))
}
console.log(descendingOrder(123));

/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
//Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
//Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.