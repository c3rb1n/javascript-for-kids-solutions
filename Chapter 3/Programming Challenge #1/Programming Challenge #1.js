const randomBodyParts = ['рука', 'нога', 'шея', 'голова'];
const randomAdjectives = ['глупый', 'гнилой', 'мелкий', 'вялый'];
const randomAnimals = ['кот', 'волк', 'лев', 'жираф', 'лось'];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
const randomInsult = `У тебя ${randomBodyPart} словно ${randomAdjective} ${randomAnimal}!!!`;

randomInsult;
