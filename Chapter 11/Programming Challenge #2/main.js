const getRandomNumber = size => Math.floor(Math.random() * size);

const getDistance = (event, target) => {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;

    return Math.hypot(diffX, diffY);
};

const getDistanceHint = distance => {
    if (distance < 10) {
        return 'Обожжёшься!';
    } else if (distance < 20) {
        return 'Очень горячо.';
    } else if (distance < 40) {
        return 'Горячо.';
    } else if (distance < 80) {
        return 'Тепло.';
    } else if (distance < 160) {
        return 'Холодно.';
    } else if (distance < 320) {
        return 'Очень холодно.';
    } else if (distance < 640) {
        return 'Очень-очень холодно.';
    }

    return 'Замёрзнешь!';
};

const width = 800;
const height = 800;
let clicks = 0;

const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$('#map').click(event => {
    clicks++;

    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);

    $('#distance').text(distanceHint);

    if (distance < 8) {
        alert(`Клад найден! Сделано кликов: ${clicks}.`);
    }
});
