const words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'строка',
    'число',
    'массив',
    'объект',
    'оператор',
    'инкремент',
    'декремент',
    'условие',
    'цикл',
    'переменная',
    'данные'
];

const word = words[Math.floor(Math.random() * words.length)];
const wordLength = word.length;
const answerArray = Array.from({length: wordLength}, () => '_');
let remainingLetters = wordLength;
let triesCounter = 5;

while (remainingLetters > 0 && triesCounter > 0) {
    alert(answerArray.join(' '));

    const guess = prompt('Угадайте букву, или нажмите "Отмена" для выхода из игры.', '');

    if (guess === null) {
        break;
    } else if (guess.length === 1) {
        if (word.includes(guess)) {
            for (const [index, letter] of [...word].entries()) {
                if (letter === guess.toLowerCase()) {
                    answerArray[index] = letter;
                    remainingLetters--;
                }
            }
        } else {
            alert('В загаданном слове нет такой буквы.');

            triesCounter--;
            continue;
        }
    } else {
        alert('Пожалуйста, введите одиночную букву.');
    }
}

alert(answerArray.join(' '));
alert(`Отлично! Было загадано слово ${word}.`);
