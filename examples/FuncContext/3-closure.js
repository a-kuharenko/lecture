'use strict';

function secretPassword() {
  const password = 'xh38sk';
  return guess => guess === password;
}

const passwordGame = secretPassword();
console.log(passwordGame('badPassword')); // false
console.log(passwordGame('xh38sk')); // true
