'use strict';

let number1 = 10.5;

let number2 = 100.5;

function deleteFraction(numb) {
  const fraction = numb % 1;
  console.log(fraction);
  numb -= fraction;
  return numb;
}

number1 = deleteFraction(number1);
number2 = deleteFraction(number2);
console.log(number1);
console.log(number2);
