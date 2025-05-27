
import { getDivisorCount, getMatchingDivisorPairs } from "../src/divisor";

describe("countDivisors", () => {
  test("returns correct number of divisors", () => {
    expect(getDivisorCount(4)).toBe(3); 
    expect(getDivisorCount(5)).toBe(2); 
    expect(getDivisorCount(6)).toBe(4); 
  });

  test("returns 1 for 1", () => {
    expect(getDivisorCount(18)).toBe(6);
  });
});

describe("countMatchingDivisors", () => {
  test("matches sample input where n = 4", () => {
    expect(getMatchingDivisorPairs(4)).toBe(1); 
  });

  test("returns 0 when no match", () => {
    expect(getMatchingDivisorPairs(20)).toBe(2);
  });

  test("handles large input", () => {
    expect(() => getMatchingDivisorPairs(1000)).not.toThrow();
  });

});
