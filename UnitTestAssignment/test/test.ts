import { getPositiveDivisorCount, countConsecutiveEqualDivisorPairs } from '../src/divisor';

describe('getPositiveDivisorCount', () => {
  it('should return 2 for prime number 3', () => {
    expect(getPositiveDivisorCount(3)).toBe(2); 
  });

  it('should return 4 for 6', () => {
    expect(getPositiveDivisorCount(6)).toBe(4); 
  });

  it('should return 3 for perfect square 9', () => {
    expect(getPositiveDivisorCount(9)).toBe(3);
  });
});

describe('countConsecutiveEqualDivisorPairs', () => {
  it('should return 1 for limit 3', () => {
    expect(countConsecutiveEqualDivisorPairs(3)).toBe(1);
  });

  it('should return 2 for limit 15', () => {
    expect(countConsecutiveEqualDivisorPairs(15)).toBe(2);
  });

  it('should return 15 for limit 100', () => {
    expect(countConsecutiveEqualDivisorPairs(100)).toBe(15);
  });
});
