// Вариант с использованием оператора "+"
    // Инициализируем массивы randomHumanBodyParts1, randomAdjectives1, randomAnimalBodyParts1 и randomAnimals1
    const randomHumanBodyParts1 = ['рука', 'нога', 'шея', 'голова'];
    const randomAdjectives1 = ['глупая', 'гнилая', 'мелкая', 'вялая'];
    const randomAnimalBodyParts1 = ['лапа', 'шерсть', 'морда'];
    const randomAnimals1 = ['кота', 'волка', 'льва', 'жирафа', 'лося'];

    // Выбор случайной части тела человека из массива randomHumanBodyParts1:
    const randomHumanBodyPart1 = randomHumanBodyParts1[Math.floor(Math.random() * randomHumanBodyParts1.length)];

    // Выбор случайного прилагательного из массива randomAdjectives1:
    const randomAdjective1 = randomAdjectives1[Math.floor(Math.random() * randomAdjectives1.length)];

    // Выбор случайной части тела животного из массива randomAnimalBodyParts1:
    const randomAnimalBodyPart1 = randomAnimalBodyParts1[Math.floor(Math.random() * randomAnimalBodyParts1.length)];

    // Выбор случайного слова из массива randomAnimals1:
    const randomAnimal1 = randomAnimals1[Math.floor(Math.random() * randomAnimals1.length)];

    // Соединяем случайные строки в предложение:
    const randomInsult1 = `У тебя ${randomHumanBodyPart1} ещё более ${randomAdjective1}, чем ${randomAnimalBodyPart1} у ${randomAnimal1}.`;

    randomInsult1; // "У тебя рука ещё более мелкая, чем морда у волка."

// Вариант с использованием оператора метода массива ".join"
    // Инициализируем массивы randomHumanBodyParts2, randomAdjectives2, randomAnimalBodyParts2 и randomAnimals2
    const randomHumanBodyParts2 = ['рука', 'нога', 'шея', 'голова'];
    const randomAdjectives2 = ['глупая', 'гнилая', 'мелкая', 'вялая'];
    const randomAnimalBodyParts2 = ['лапа', 'шерсть', 'морда'];
    const randomAnimals2 = ['кота', 'волка', 'льва', 'жирафа', 'лося'];

    // Выбор случайной части тела человека из массива randomHumanBodyParts2:
    const randomHumanBodyPart2 = randomHumanBodyParts2[Math.floor(Math.random() * randomHumanBodyParts2.length)];

    // Выбор случайного прилагательного из массива randomAdjectives2:
    const randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];

    // Выбор случайной части тела животного из массива randomAnimalBodyParts2:
    const randomAnimalBodyPart2 = randomAnimalBodyParts2[Math.floor(Math.random() * randomAnimalBodyParts2.length)];

    // Выбор случайного слова из массива randomAnimals2:
    const randomAnimal2 = randomAnimals2[Math.floor(Math.random() * randomAnimals2.length)];

    // Соединяем случайные строки в предложение:
    const randomInsult2 = [
        'У тебя',
        randomHumanBodyPart2,
        'ещё более',
        `${randomAdjective2}, чем`,
        randomAnimalBodyPart2,
        'у',
        `${randomAnimal2}.`
    ].join(' ');

    randomInsult2; // "У тебя голова ещё более вялая, чем морда у волка."
