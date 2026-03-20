const randomHumanBodyParts = ['рука', 'нога', 'шея', 'голова'];
const randomAdjectives = ['глупая', 'гнилая', 'мелкая', 'вялая'];
const randomAnimalBodyParts = ['лапа', 'шерсть', 'морда'];
const randomAnimals = ['кота', 'волка', 'льва', 'жирафа', 'лося'];

const randomHumanBodyPart = randomHumanBodyParts[Math.floor(Math.random() * randomHumanBodyParts.length)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];
const randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
const randomInsult =
    `У тебя ${randomHumanBodyPart} ещё более ${randomAdjective}, чем ${randomAnimalBodyPart} у ${randomAnimal}.`;

randomInsult;
