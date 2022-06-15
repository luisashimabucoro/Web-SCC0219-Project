$(document).ready(function(){
    $('#login-trigger').click(function(){
        $(this).next('.login-content').slideToggle(0);
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
        else $(this).find('span').html('&#x25BC;')
    })
});