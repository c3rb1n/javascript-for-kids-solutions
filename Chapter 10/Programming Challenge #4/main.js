let offsetX = 0;
let offsetY = 0;
let headingValue = 0;
let speed = 30;

const headingMove = () => {
    if (offsetY === 0 && offsetX < 200) {
        $('#heading').offset({left: offsetX, top: offsetY});
        offsetX++;
    } else if (offsetY < 200 && offsetX === 200) {
        $('#heading').offset({left: offsetX, top: offsetY});
        offsetY++;
    } else if (offsetY === 200 && offsetX > 0) {
        $('#heading').offset({left: offsetX, top: offsetY});
        offsetX--;
    } else if (offsetY > 0 && offsetX === 0) {
        $('#heading').offset({left: offsetX, top: offsetY});
        offsetY--;
    }
};

let intervalId = setInterval(headingMove, speed);

$('h1').click(() => {
    clearInterval(intervalId);

    if (headingValue < 10) {
        speed /= 2;
        $('h1').text(headingValue);
        intervalId = setInterval(headingMove, speed);
        headingValue++;
    } else {
        $('h1').text('Вы победили!');
    }
});
