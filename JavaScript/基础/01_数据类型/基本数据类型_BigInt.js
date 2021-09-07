/**
 * BigInt（es10新增）
 * BigInt 是一种内置对象，它提供了一种方法来表示大于 253 - 1 的整数。这原本
 * 是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。
 */

// 声明方式
const theBiggestInt = 9007199254740991n;
// ↪ 9007199254740991n

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n

// 使用 typeof 测试时， BigInt 对象返回 "bigint" ：
typeof 1n === 'bigint'; // true
typeof BigInt('1') === 'bigint'; // true

