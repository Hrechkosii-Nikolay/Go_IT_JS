let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}

console.log(`Общая сумма = ${total}`);
