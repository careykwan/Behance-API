console.log('hello carey');

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawDashboard);

var apiKey;
var desingerId = ['njenworks', 'RomaNaim', "stefanocolferai"];
var url1 = "https://api.behance.net/v2/users/njenworks/projects?client_id=s2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG";
var url2 = "https://api.behance.net/v2/users/RomanNaim/projects?client_id=s2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG";
// var designerIdTwo;
// var designerIdThree;
// var designerIdFour;
// var designerIdFive;
// var designerIdSix;


function drawDashboard(){
	    $.ajax({     
        url: url1, 
        dataType: 'jsonP',
        success: function(data){
            console.log(data);
          //where the function to create the charts will go

        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}
drawDashboard();
console.log('hello kelsey');


console.log('hello world');