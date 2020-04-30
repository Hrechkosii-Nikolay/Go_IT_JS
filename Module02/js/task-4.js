const formatString = function (string) {
  let splitLine = string.slice(0, 40);
  let result = splitLine.length < string.length ? splitLine + '...' : string;

  return result;
  // }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
