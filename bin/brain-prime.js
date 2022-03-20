const brainPrimeGame = () => {
  const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
  const randomNum = Math.floor(Math.random() * 40);
  return [primeNums, randomNum];
};
export default brainPrimeGame;
