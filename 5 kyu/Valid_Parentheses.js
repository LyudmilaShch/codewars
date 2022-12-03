function validParentheses(parens) {
    if (parens.length >= 2){
        if (parens.split(')').join('') === "" 
        || parens.split('(').join('') === ""
        || parens.replace(')(', "") === "") {
            return false
        } else {
    return validParentheses(parens.replace('()', ""))
        }
  } else return (parens.length%2===0)
  }
  console.log(validParentheses("())("));

  /*
  Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
  */


function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

  function validParentheses(parens){
    while(parens.indexOf('()') != -1){
      parens = parens.replace('()', '');
    }
    return !parens.length;
  }