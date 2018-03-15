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



// init function invokations
AJAXBehanceRequest2();

function AJAXBehanceRequest2() {

    grabUserID();

    var apiKey = 'x5dUkwcodDRG0Nf0uz0ht0EMrA4sLOco';
    userIDArray = ['clairehartley'];
    var userID = userIDArray[0];

    var designer1 = 'angushyland';
    var designer2 = 'clairehartley';
    var designer3 = 'Doralice';
    var designer4 = 'izutsu';
    var designer5 = 'MaryRabun';
    var designer6 = 'nahuelsal';

    // @grabUserID is a switch statement to push and empty certain UserIDs depending on what div has been clicked has been clicked.
    function grabUserID() {
        $('div').click(function () {
            switch (this.id) {
                case 'designerOne2': 
                    userIDArray.splice(0, 1);
                    userIDArray.push('angushyland');
                    break; 
                case 'designerTwo2': 
                    userIDArray.splice(0, 1);
                    userIDArray.push('clairehartley');
                    break;
                case 'designerThree2':
                    userIDArray.splice(0, 1);
                    userIDArray.push('Doralice');
                    break;
                case 'designerFour2':
                    userIDArray.splice(0, 1);
                    userIDArray.push('izutsu');
                    break;
                case 'designerFive2':
                    userIDArray.splice(0, 1);
                    userIDArray.push('MaryRabun');
                    break;
                case 'designerSix2':
                    userIDArray.splice(0, 1);
                    userIDArray.push('nahuelsal');
                    break;
            }
        });
    }

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

