function boolToWord( bool ){
    let result = '';
  if (bool === true){
      result = "Yes";
  } else {
  result = "No";}
  return result;
}
console.log(boolToWord(false));

/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/

function boolToWord( bool ) {
    return (bool === true) ? "Yes" : "No";
    }
   console.log(boolToWord(false)); //Второй способ


   //boolean перевести в string
   function booleanToString(b){
    return b.toString();
  }