$('html').click(event => {
    $('#heading').offset({
        left: event.pageX,
        top: event.pageY
    });
});
