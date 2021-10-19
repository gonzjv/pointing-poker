const getFiboRow = (count, type) => {
  const fiboRow = [];

  function fibonacci(num) {
    var a = 1,
      b = 0,
      temp;

    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  }

  let i = 1;
  while (i < count) {
    fiboRow.push({ value: fibonacci(i), type: type });
    i++;
  }
  return fiboRow;
};

export default getFiboRow;
