import { fibo } from "./fibo";

test("Get the array of fibonacci 4 ", () => {
    expect(fibo(4)).toEqual([0, 1, 1, 2]);
});

test("Get the array of fibonacci 3 ", () => {
    expect(fibo(3)).toEqual([0, 1, 1]);
});

test("Get the array of fibonacci 2 ", () => {
    expect(fibo(2)).toEqual([0, 1]);
});

test("Error", () => {
    expect(fibo(0)).toBe("ERROR");
});