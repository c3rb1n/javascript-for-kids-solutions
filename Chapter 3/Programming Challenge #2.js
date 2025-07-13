// Инициализируем массивы randomHumanBodyParts, randomAdjectives, randomAnimalBodyParts и randomAnimals
const randomHumanBodyParts = ['рука', 'нога', 'шея', 'голова'];
const randomAdjectives = ['глупая', 'гнилая', 'мелкая', 'вялая'];
const randomAnimalBodyParts = ['лапа', 'шерсть', 'морда'];
const randomAnimals = ['кота', 'волка', 'льва', 'жирафа', 'лося'];

// Выбор случайной части тела человека из массива randomHumanBodyParts:
const randomHumanBodyPart = randomHumanBodyParts[Math.floor(Math.random() * randomHumanBodyParts.length)];

// Выбор случайного прилагательного из массива randomAdjectives:
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Выбор случайной части тела животного из массива randomAnimalBodyParts:
const randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

// Выбор случайного слова из массива randomAnimals:
const randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

// Соединяем случайные строки в предложение:
const randomInsult =
    `У тебя ${randomHumanBodyPart} ещё более ${randomAdjective}, чем ${randomAnimalBodyPart} у ${randomAnimal}.`;

randomInsult; // "У тебя шея ещё более мелкая, чем морда у кота."
