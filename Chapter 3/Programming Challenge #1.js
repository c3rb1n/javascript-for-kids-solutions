// Инициализируем массивы randomBodyParts, randomAdjectives и randomAnimals
const randomBodyParts = ['рука', 'нога', 'шея', 'голова'];
const randomAdjectives = ['глупый', 'гнилой', 'мелкий', 'вялый'];
const randomAnimals = ['кот', 'волк', 'лев', 'жираф', 'лось'];

// Выбор случайной части тела из массива randomBodyParts:
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// Выбор случайного прилагательного из массива randomAdjectives:
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// Выбор случайного слова из массива randomAnimals:
const randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

// Соединяем случайные строки в предложение:
const randomInsult = `У тебя ${randomBodyPart} словно ${randomAdjective} ${randomAnimal}!!!`;

randomInsult; // "У тебя шея словно мелкий лев!!!"
