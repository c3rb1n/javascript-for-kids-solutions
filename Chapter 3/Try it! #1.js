// Инициализируем массивы randomBodyParts, randomAdjectives и randomWords
const randomBodyParts = ['глаз', 'нос', 'череп'];
const randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
const randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];

// Выбор случайной части тела из массива randomBodyParts и замена "3" на "randomBodyParts.length":
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// Выбор случайного прилагательного из массива randomAdjectives и замена "3" на "randomAdjectives.length":
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Выбор случайного слова из массива randomWords и замена "5" на "randomWords.length":
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

/*
    Соединяем случайные строки в предложение и заменяем выражения после оператора присваивания
    на массив элементов с методом ".join(" ")" и шаблонной строкой в последнем элементе
*/
const randomInsult = ['У тебя', randomBodyPart, 'словно', randomAdjective, `${randomWord}!!!`].join(' ');

randomInsult; // "У тебя нос словно дурацкая выдра!!!"
