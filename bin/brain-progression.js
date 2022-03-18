const brainProgression = () => {
  const startNum = Math.floor(Math.random() * 100);
  const numOfProgression = Math.floor(Math.random() * 10);
  const progression = [startNum];
  let b = startNum;
  for (let i = 0; i < 10; i += 1) {
    b += numOfProgression;
    progression.push(b);
  }
  return progression;
};
export default brainProgression;
