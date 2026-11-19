const assert = require('assert');
const { sum } = require('./math');

// Проверяем, что 2 + 3 = 5
assert.strictEqual(sum(2, 3), 5);
// Проверяем, что -1 + 1 = 0
assert.strictEqual(sum(-1, 1), 0);

console.log('All tests passed');