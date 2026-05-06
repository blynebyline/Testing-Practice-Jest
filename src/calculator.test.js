import { add, subtract, multiply, divide } from "./calculator.js";

test("add 5 and 5 equal to 10", () => {
    expect(add(5, 5)).toBe(10);
});

test("subtract 5 and 5 equal to 0", () => {
    expect(subtract(5, 5)).toBe(0);
});

test("multiply 5 and 5 equal to 25", () => {
    expect(multiply(5, 5)).toBe(25);
});

test("divide 5 and 5 equal to 1", () => {
    expect(divide(5, 5)).toBe(1);
});