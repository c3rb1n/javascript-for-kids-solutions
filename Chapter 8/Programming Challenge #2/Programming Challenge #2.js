const areArraysSame = (a, b) => a.toString() === b.toString();

areArraysSame([1, 2, 3], [4, 5, 6]);
areArraysSame([1, 2, 3], [1, 2, 3]);
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
