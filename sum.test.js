// sum.test.js
const sum = require('./sum');  // Adjust path as necessary

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// Additional tests
test('adds -1 + 2 to equal 1', () => {
    expect(sum(-1, 2)).toBe(1);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('handles non-integer inputs', () => {
    expect(sum(1.5, 2.3)).toBeCloseTo(3.8);
});
