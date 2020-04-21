let credits = 23580;
const pricePerDroid = 3000;
let answer = prompt('Сколько дронов жилаете купить?');
let totalPrice = answer * pricePerDroid;
if (answer === null) {
  alert('Отменено пользователем!');
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else if (totalPrice <= credits) {
  alert(
    `Вы купили ${answer} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`,
  );
}
