export function getDivisorCount(number: number): number| undefined {
  try {
    let divisorCount = 0;
    for (let index = 1; index * index <= number; index++) {
      if (number % index === 0) {
        divisorCount += (index * index === number) ? 1 : 2;
      }
    }
    return divisorCount;
  } catch (error) {
    console.error(`Error in getDivisorCount(${number}):`, error);
    return undefined; 
  }
}

export function getMatchingDivisorPairs(limit: number): number| undefined {
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
    return undefined;
  }
}

console.log(getMatchingDivisorPairs(1));