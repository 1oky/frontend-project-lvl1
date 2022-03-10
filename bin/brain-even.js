export const isEven = (num) => num % 2 === 0;

export const questionGenerate = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const result = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, result];
};
