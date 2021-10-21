const numberOfDigits = x => {
  let str = "";

  if (x >= 0 && x <= 9) {
    str = `One digit: ${x}`;
  } else if (x >= 10 && x <= 99) {
    str = `Two digits: ${x}`;
  } else {
    str = `The number is: ${x}`;
  }
  return str;
};

console.log(numberOfDigits(-2020)); // should return the number is -2020
console.log(numberOfDigits(5)); // should return one digit: 5
console.log(numberOfDigits(99)); // should return two digits: 99
