//a simple program that takes in 'n' as a number and returns how many times each of that numbers individual digits divid into the original number.
//Using arrow functions, for of loop and new if else syntax

findDigits = n => {
  let count = 0;
  let num = n.toString();
  for (let char of num) {
    num % char == 0 ? (count += 1) : (count += 0);
  }
  return count;
};

console.log(findDigits(12));
console.log(findDigits(1012));
console.log(findDigits(2));
console.log(findDigits(122212));
