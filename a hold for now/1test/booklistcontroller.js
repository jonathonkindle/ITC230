$(document).ready( () => {
    
    $('form').on('submit', () => {
        var title = $('form input');
        var book = {title: title.val()};

        $.ajax({
            type: 'POST',
            url: '/',
            data: book,
            success: (data) => {
                location.reload();
            }
        });

        return false;
    });

    $('li').on('click', () => {
        var title = $(this).text().replace(/ /g, "-");

        $.ajax({
            type: 'GET',
            url: '/detail/' + title,
        });
    });

    $('').on('click', () => {
        var title = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/',
    });


});