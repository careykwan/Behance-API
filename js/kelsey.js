
// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawDashboard);

var apiKey;
// var designerIdOne;
// var designerIdTwo;
// var designerIdThree;
// var designerIdFour;
// var designerIdFive;
// var designerIdSix;

function getConfig(){
	    $.ajax({
        url: "../config.json",
        dataType: 'json',
        success: function(configData){
           apiKey = configData[0].apiKey;
           console.log(apiKey);
         
            // getBehance();
        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}
getConfig();
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

