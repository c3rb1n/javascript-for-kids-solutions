let offsetX = 0;
let offsetY = 0;

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

const intervalId = setInterval(headingMove, 5);

$('h1').click(() => clearInterval(intervalId));
