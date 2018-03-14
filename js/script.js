console.log('hello carey');

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawDashboard);

// var apiKey;
// var designerIdOne;
// var designerIdTwo;
// var designerIdThree;
// var designerIdFour;
// var designerIdFive;
// var designerIdSix;

// function getConfig(){
// 	    $.ajax({
//         url: "../config.json",
//         dataType: 'json',
//         success: function(configData){
//            apiKey = configData[0].apiKey;
//            console.log(apiKey);
         
//             // getBehance();
//         },
//         error: function(error){
//             console.log(error);
//             console.log("Something has gone wrong");
//         }
//     })
// }

// // function drawDashboard(){
// // 	console.log(apiKey);
// // 	    $.ajax({
// //         url: "https://api.behance.net/v2/users/matiascorea/projects?client_id=1234567890",
// //         dataType: 'jsonP',
// //         success: function(data){
// //           //where the function to create the charts wiill go
// //         },
// //         error: function(error){
// //             console.log(error);
// //             console.log("Something has gone wrong");
// //         }
// //     })
// // }

console.log('hello kelsey');



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

