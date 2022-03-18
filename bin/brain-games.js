#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { questionGenerate } from './brain-even.js';
import calculateGame from './brain-calc.js';
import gcd from './brain-gcd.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
greetings(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const question = questionGenerate();
  console.log(`Question: ${question[0]}`);
  const answer = readlineSync.question('Your answer:');
  if (answer === question[1]) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${question[1]}!`);
    console.log(`Let's try again, ${userName}`);
    break;
  }
  console.log(`Congratulations, ${userName}!`);
}
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const calculatingProcess = calculateGame();
  console.log(`Question: ${calculatingProcess[0]}`);
  const calcAnswer = readlineSync.question('Your answer:');
  if (calcAnswer === calculatingProcess[1]) {
    console.log('Correct!');
  } else {
    console.log(`${calcAnswer} is wrong answer ;(. Correct answer was ${calculatingProcess[1]}!`);
    console.log(`Let's try again, ${userName}`);
    break;
  }
  console.log(`Congratulations, ${userName}!`);
}

console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < 3; i += 1) {
  const greatestComDiv = gcd();
  const twoNumbers = [greatestComDiv[0], greatestComDiv[1]];
  console.log(`Question: ${twoNumbers}`);
}
