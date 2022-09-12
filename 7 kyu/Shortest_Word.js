function findShort(s){
    let arr = s.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

  /*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

//s.split(" "). - разделение слов по " "
//sort((a, b) => a.length - b.length) - сортировка по длине


function findShort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
  }
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"));