const areArraysSame = (a, b) => a.toString() === b.toString();

areArraysSame([1, 2, 3], [4, 5, 6]); // false
areArraysSame([1, 2, 3], [1, 2, 3]); // true
areArraysSame([1, 2, 3], [1, 2, 3, 4]); // false
