const randomHumanBodyParts1 = ['рука', 'нога', 'шея', 'голова'];
const randomAdjectives1 = ['глупая', 'гнилая', 'мелкая', 'вялая'];
const randomAnimalBodyParts1 = ['лапа', 'шерсть', 'морда'];
const randomAnimals1 = ['кота', 'волка', 'льва', 'жирафа', 'лося'];

const randomHumanBodyPart1 = randomHumanBodyParts1[Math.floor(Math.random() * randomHumanBodyParts1.length)];
const randomAdjective1 = randomAdjectives1[Math.floor(Math.random() * randomAdjectives1.length)];
const randomAnimalBodyPart1 = randomAnimalBodyParts1[Math.floor(Math.random() * randomAnimalBodyParts1.length)];
const randomAnimal1 = randomAnimals1[Math.floor(Math.random() * randomAnimals1.length)];

const randomInsult1 = `У тебя ${randomHumanBodyPart1} ещё более ${randomAdjective1}, чем ${randomAnimalBodyPart1} у ${randomAnimal1}.`;

randomInsult1;

const randomHumanBodyParts2 = ['рука', 'нога', 'шея', 'голова'];
const randomAdjectives2 = ['глупая', 'гнилая', 'мелкая', 'вялая'];
const randomAnimalBodyParts2 = ['лапа', 'шерсть', 'морда'];
const randomAnimals2 = ['кота', 'волка', 'льва', 'жирафа', 'лося'];

const randomHumanBodyPart2 = randomHumanBodyParts2[Math.floor(Math.random() * randomHumanBodyParts2.length)];
const randomAdjective2 = randomAdjectives2[Math.floor(Math.random() * randomAdjectives2.length)];
const randomAnimalBodyPart2 = randomAnimalBodyParts2[Math.floor(Math.random() * randomAnimalBodyParts2.length)];
const randomAnimal2 = randomAnimals2[Math.floor(Math.random() * randomAnimals2.length)];

const randomInsult2 = [
    'У тебя',
    randomHumanBodyPart2,
    'ещё более',
    `${randomAdjective2}, чем`,
    randomAnimalBodyPart2,
    'у',
    `${randomAnimal2}.`
].join(' ');

randomInsult2;
