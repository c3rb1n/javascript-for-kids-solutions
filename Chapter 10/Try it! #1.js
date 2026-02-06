let counter = 5;

const printMessage = () => {
    console.log(`Ты смотришь в консоль уже ${counter} сек`);
    counter += 5;
};

const intervalId = setInterval(printMessage, 5000);

clearInterval(intervalId);
