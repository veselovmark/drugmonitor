jQuery(document).ready(function ($) {

    var slideCount = $('.slider ul li').length;
    var slideWidth = $('.slider ul li').width();
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('ul.slider-list').css("width", slideCount * 100 + "%");
    $('li').css("width", Math.round(100 / slideCount * 100) / 100 + "%");

    setInterval(function () {
        moveRight();
    }, 10000);

    function moveLeft() {
        var s = $('.slider ul');

        $('.slider ul').animate({
            marginLeft: "0%"
        }, 300, function () {
                $('.slider ul li:last-child').prependTo('.slider ul');
                $('.slider ul').css('margin-left', '-100%');
            })
    }

    function moveRight() {
        var s = $('.slider ul');

        //console.log(s);

        $('.slider ul').animate({
            marginLeft: "-200%"
        }, 300, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('margin-left', '-100%');
        })
    }

    $('a.slider-prev').click(function () {
        moveLeft();
    });
    $('a.slider-next').click(function () {
        moveRight();
    });



});
