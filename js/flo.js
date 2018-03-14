
getBehanceData();

var designer1 = 'angushyland';
var designer2 = 'clairehartley';
var designer3 = 'Doralice';
var designer4 = 'izutsu';
var designer5 = 'MaryRabun';
var designer6 = 'nahuelsal';


function getBehanceData () {
    var apiKey = 'x5dUkwcodDRG0Nf0uz0ht0EMrA4sLOco';
    var userID = 'angushyland';

        $.ajax({
            url: 'http://behance.net/v2/users/' + userID + '?api_key=' + apiKey + '&callback=myCallbackFunction',
            dataType: 'jsonp',
            success: function (data) {
                myCallbackFunction(data);

            },
            error: function (error) {
                console.log(error);
                console.log('Something has gone wrong');
            }
        });
    }

function myCallbackFunction(data) {
    console.log(data);
}


// Slick JS
$(document).ready(function () {
    $('.slick-designer-slideshow-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2500
    });
});

