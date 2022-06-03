import { total } from "./App";

const add = jest.fn((x, y) => x + y);

// Unit test
// It only tests one thing
test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);

  expect(add(5, 2)).toBe(7);
});

// Integartion tests
// Tests things working together
/* test("total", () => {
  expect(total(5, 20)).toBe("$25");
}); */
