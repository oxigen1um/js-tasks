function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


function checkAge(age) {
  
  return age > 18 ? true : confirm('Родители разрешили?');
  
}


function checkAge(age) {
  
  return (age > 18) || confirm('Родители разрешили?');
  
}


function min(a, b) {
  return a < b ? a : b;
}


/*
Возводит x в степень n 

@param {number} x число, которое возводится в степень
@param {number} n степень, должна быть целым числом больше 1

@return {number} x в степени n
*/

function pow(x,n) {
  var result = x;
  
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  
  return result;
}