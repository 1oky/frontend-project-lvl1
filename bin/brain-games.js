#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';
import { questionGenerate } from './brain-even.js';

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
