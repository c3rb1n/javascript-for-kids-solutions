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

const pickWord = () => words[Math.floor(Math.random() * words.length)];
const setupAnswerArray = arrayLength => Array.from({length: arrayLength}, () => '_');
const showPlayerProgress = answerArray => alert(answerArray.join(' '));
const getGuess = () => prompt('Угадайте букву, или нажмите "Отмена" для выхода из игры.', '');
const word = pickWord();
const wordLength = word.length;
const answerArray = setupAnswerArray(wordLength);
let remainingLetters = wordLength;
let triesCounter = 5;

const updateGameState = (guess, word, answerArray) => {
    for (const [index, letter] of [...word].entries()) {
        if (letter === guess.toLowerCase() && answerArray[index] === '_') {
            answerArray[index] = letter;
        }
    }
};

const updateRemainingLetters = answerArray => {
    remainingLetters = answerArray.filter(element => element === '_').length;
};

const showAnswerAndCongratulatePlayer = answerArray => {
    alert(answerArray.join(' '));
    alert(`Отлично! Было загадано слово ${word}.`);
};

while (remainingLetters > 0 && triesCounter > 0) {
    showPlayerProgress(answerArray);

    const guess = getGuess();

    if (guess === null) {
        break;
    } else if (guess.length === 1) {
        if (word.includes(guess)) {
            updateGameState(guess, word, answerArray);
            updateRemainingLetters(answerArray);
        } else {
            alert('В загаданном слове нет такой буквы.');

            triesCounter--;
            continue;
        }
    } else {
        alert('Пожалуйста, введите одиночную букву.');
    }
}

showAnswerAndCongratulatePlayer(answerArray);
