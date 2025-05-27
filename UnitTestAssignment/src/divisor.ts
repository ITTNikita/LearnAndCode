export function getDivisorCount(number: number): number {
  try {
    if (!Number.isInteger(number) || number < 1) {
      throw new Error("Input must be a positive integer.");
    }
    let divisorCount = 0;
    for (let i = 1; i * i <= number; i++) {
      if (number % i === 0) {
        divisorCount += (i * i === number) ? 1 : 2;
      }
    }
    return divisorCount;
  } catch (error) {
    console.error(`Error in getDivisorCount(${number}):`, error);
    return -1; 
  }
}

export function getMatchingDivisorPairs(limit: number): number {
  try {
    if (!Number.isInteger(limit) || limit < 2) {
      throw new Error("Input must be an integer greater than or equal to 2.");
    }
    let matchCount = 0;
    for (let current = 1; current < limit; current++) {
      const currentDivisorCount = getDivisorCount(current);
      const nextDivisorCount = getDivisorCount(current + 1);
      if (currentDivisorCount === -1 || nextDivisorCount === -1) continue;
      if (currentDivisorCount === nextDivisorCount) {
        matchCount++;
      }
    }
    return matchCount;
  } catch (error) {
    console.error(`Error in getMatchingDivisorPairs(${limit}):`, error);
    return -1;
  }
}

console.log(getDivisorCount(18));