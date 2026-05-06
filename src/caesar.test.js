import { caesar } from "./caesar";

test("Turn 'abc' to 'bcd' ", () => {
    expect(caesar('abc', 1)).toBe('bcd');
});

test("Turn 'Hello, World!' to 'Khoor, Zruog!' ", () => {
    expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});