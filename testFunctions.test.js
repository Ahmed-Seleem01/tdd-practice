import capitalize from "./capitalize";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caeserCipher from "./caeserCipher";
import analyzeArray from "./analyzeArray";

test("Make first letter capital", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Make the string reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("check calculator operations", () => {
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("check caesar cipher", () => {
  expect(caeserCipher("Abc65-/", 2)).toBe("Cde65-/");
});

test("check analyze array", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    length: 4,
    min: 1,
    max: 4,
  });
});
