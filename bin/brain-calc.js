// eslint-disable-next-line consistent-return
const calculateGame = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  if (randomNum1 % 2 === 0) {
    const calculating = `${randomNum1} + ${randomNum2}`;
    const result = `${randomNum1 + randomNum2}`;
    return [calculating, result];
  } if (randomNum1 > randomNum2 !== 0) {
    const calculating = `${randomNum1} - ${randomNum2}`;
    const result = `${randomNum1 - randomNum2}`;
    return [calculating, result];
  } if (randomNum2 > randomNum1) {
    const calculating = `${randomNum1} * ${randomNum2}`;
    const result = `${randomNum1 * randomNum2}`;
    return [calculating, result];
  }
};
export default calculateGame;
