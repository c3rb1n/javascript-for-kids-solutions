let counter = 5;

const printMessage = () => {
    console.log(`Ты смотришь в консоль уже ${counter} сек`);
    counter += 5;
};

const intervalId = setInterval(printMessage, 5000);

// Ты смотришь в консоль уже 5 сек.
// Ты смотришь в консоль уже 10 сек.
// Ты смотришь в консоль уже 15 сек.
// Ты смотришь в консоль уже 20 сек.
// Ты смотришь в консоль уже 25 сек.
// Ты смотришь в консоль уже 30 сек.

clearInterval(intervalId);
