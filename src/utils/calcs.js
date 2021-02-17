export const elemSumTotal = (elem) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = elem.reduce(reducer, 0);

  return sum;
};
