const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let result = '';

while (result.length < 6) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(result);
