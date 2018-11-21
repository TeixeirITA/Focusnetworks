$('.js-link').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(0).offset().top
    }, 300);
});

$('.js-link').eq(1).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(1).offset().top
    }, 300);
});

$('.js-link').eq(2).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(2).offset().top
    }, 300);
});

$('.js-link').eq(3).click(() => {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(3).offset().top
    }, 300);
});


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
