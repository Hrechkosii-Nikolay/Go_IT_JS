let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
  numbers.push(input);
}

console.log(`Общая сумма = ${total}`);
alert(`Общая сумма : ${total}`);
console.log(numbers);
