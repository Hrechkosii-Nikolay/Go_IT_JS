// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   // const checkWords = ('sale', 'spam');
//   return message.includes('sale') || message.includes('spam');
// };

const checkForSpam = function (message) {
  message = message.toLowerCase();
  const checkWords = ['sale', 'spam'];
  let result = false;
  for (let words of checkWords) {
    if (message.includes(words)) result = true;
  }
  return message + ' // ' + result;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
