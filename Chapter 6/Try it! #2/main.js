for (let index = 3; index < 10000; index *= 3) {
    console.log(index);
}

let indexJ = 3;

while (indexJ < 10000) {
    console.log(indexJ);

    indexJ *= 3;
}

let index = 3;

do {
    console.log(index);

    index *= 3;
} while (index < 10000);
