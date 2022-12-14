function towerBuilder(nFloors) {    //создаем функцию nFloors
    let result = [];                //объявляем массив result
    let maxLength = 2*nFloors-1;    //объявляем maxLength - максимальную длину = 2 * количество этажей-1 
    
    for (let i = nFloors; 0 < i; i--) { //для всех значений i, начиная с i = количество этажей, до i = 1
      let ele = '*'.repeat(2*i-1);      //объявляем переменную ele = * повторяется 2*i (этаж) -1 
      ele = ele.length < maxLength ? ' '.repeat((maxLength-ele.length)/2) + ele + ' '.repeat((maxLength-ele.length)/2) : ele; 
      //если длина ele меньше максимальной длины, то ' ' повторяется (максимальная длина - длина звездочек)/2 + ele (звездочки) + ' ' повторяется (максимальная длина - длина звездочек)/2, иначе ставятся звездочки 
      result.unshift(ele); //добавляем ele в начало массива 
    }
    return result //возврат результата
    } 
    console.log(towerBuilder(5)); //вывод результата


    /*Пример при towerBuilder(2)
    result = [];
    maxLenght = 2 * 2 - 1 = 3;

    для (i=2; 0<i; i-1=1){
        ele = '*'.repeat(2*2-1) = ***;
        ***.lenght<3, нет, значит записываем ***
    }
    для (i=1; 0<i; i-1=0){
        ele = '*'.repeat(2*1-1) = *;
        *.lenght<3, да, значит записываем (3-1)/2+*+(3-1)/2 = ' '*' ' 
         записываем данное значение в начало массива
    }
    возвращаем результат: 
        [ ' * ', '***' ]
   выводим на экран */