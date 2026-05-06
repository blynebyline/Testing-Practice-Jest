import { capitalize } from "./capitalize.js";

test("Turn exquisite to Exquisite", () => {
    expect(capitalize("exquisite")).toBe("Exquisite");
});