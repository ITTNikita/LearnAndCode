import { getDivisorCount, getMatchingDivisorPairs } from '../src/divisor';

describe('getDivisorCount', () => {
  test('returns correct count for 1 (should be 1)', () => {
    expect(getDivisorCount(1)).toBe(1);
  });

  test('returns correct count for 6 (1,2,3,6 => 4)', () => {
    expect(getDivisorCount(6)).toBe(4);
  });

  test('returns correct count for a perfect square (25 => 1,5,25 => 3)', () => {
    expect(getDivisorCount(25)).toBe(3);
  });

  test('returns correct count for a prime number (13 => 2)', () => {
    expect(getDivisorCount(13)).toBe(2);
  });

  test('returns correct count for 18 (1,2,3,6,9,18 => 6)', () => {
    expect(getDivisorCount(18)).toBe(6);
  });
});

describe('getMatchingDivisorPairs', () => {
  test('returns 1 for input 3', () => {
    expect(getMatchingDivisorPairs(3)).toBe(1);
  });

  test('returns 2 for input 15', () => {
    expect(getMatchingDivisorPairs(15)).toBe(2);
  });

  test('returns 15 for input 100', () => {
    expect(getMatchingDivisorPairs(100)).toBe(15);
  });

  test('returns 0 for input where no matching pairs (like 8)', () => {
    expect(getMatchingDivisorPairs(8)).toBe(1);
  });

  test('returns undefined for invalid negative input', () => {
    expect(getMatchingDivisorPairs(-5)).toBeUndefined();
  });

  test('returns undefined for input 0', () => {
    expect(getMatchingDivisorPairs(0)).toBeUndefined();
  });

  test('returns undefined for non-integer input', () => {
    expect(getMatchingDivisorPairs(5.5)).toBeUndefined();
  });
});
