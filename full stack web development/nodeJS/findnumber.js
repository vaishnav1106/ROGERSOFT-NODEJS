const numbers = [10, 20, 30, 40, 50];//by replace number by string we can check the name duplication
const numberToFind = 100;

const index = numbers.indexOf(numberToFind);

if (index !== -1) {
  console.log(`The number ${numberToFind} is present at index ${index} in the array.`);
} else {
  console.log(`The number ${numberToFind} is not found in the array.`);
}