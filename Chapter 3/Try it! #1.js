const randomBodyParts = ['глаз', 'нос', 'череп'];
const randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
const randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
const randomInsult = ['У тебя', randomBodyPart, 'словно', randomAdjective, `${randomWord}!!!`].join(' ');

randomInsult;
