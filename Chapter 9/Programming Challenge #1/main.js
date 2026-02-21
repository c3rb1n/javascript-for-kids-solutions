const friends = ['Виталий', 'Сергей', 'Святослав'];

for (const friend of friends) {
    $('body').append(`<p>${friend}</p>`);
}

$('h1').text('Мои друзья');
$(`p`).hide(0).fadeIn(2000);
$(`p`).append(' лучший!');
