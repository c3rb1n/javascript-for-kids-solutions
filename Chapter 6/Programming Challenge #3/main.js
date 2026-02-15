const input = 'javascript is awesome';
let output = '';

for (let index = 0; index < input.length; index++) {
    const currentElement = input[index];

    switch (currentElement) {
        case 'a': {
            output += '4';
            break;
        }
        case 'e': {
            output += '3';
            break;
        }
        case 'i': {
            output += '1';
            break;
        }
        case 'o': {
            output += '0';
            break;
        }
        default: {
            output += currentElement;
        }
    }
}

console.log(output);
