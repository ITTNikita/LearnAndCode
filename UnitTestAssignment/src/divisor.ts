import * as readline from 'readline';

export function getPositiveDivisorCount(num: number): number {
  let divisorCount = 0;
  for (let index = 1; index * index <= num; index++) {
    if (num % index === 0) {
      divisorCount += (index * index === num) ? 1 : 2;
    }
  }
  return divisorCount;
}

export function countConsecutiveEqualDivisorPairs(limit: number): number {
  let matchingPairCount = 0;
  for (let startNumber = 2; startNumber < limit; startNumber++) {
    if (getPositiveDivisorCount(startNumber) === getPositiveDivisorCount(startNumber + 1)) {
      matchingPairCount++;
    }
  }
  return matchingPairCount;
}

const readUserInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testCaseCount = 0;
const testInputs: number[] = [];

readUserInput.on('line', (line) => {
  const value = parseInt(line.trim());

  if (isNaN(value)) {
    console.error('Invalid input, please enter an integer.');
    return;
  }

  if (testCaseCount === 0) {
    testCaseCount = value;
  } else {
    testInputs.push(value);
  }

  if (testInputs.length === testCaseCount) {
    readUserInput.close();
  }
});

readUserInput.on('close', () => {
  testInputs.forEach((limit) => {
    console.log(countConsecutiveEqualDivisorPairs(limit));
  });
});
