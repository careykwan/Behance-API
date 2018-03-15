console.log('hello carey');

google.charts.load('current', {'packages':['corechart' ,'bar']});
google.charts.setOnLoadCallback(getApiData);


var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
var designerId = 'clairehartley';
var designer1 = 'angushyland';
var designer2 = 'clairehartley';
var designer3 = 'Doralice';
var designer4 = 'izutsu';
var designer5 = 'MaryRabun';
var designer6 = 'nahuelsal';

function getApiData(){
	    $.ajax({     
        url:'https://api.behance.net/v2/users/' + designerId + '/projects?client_id=' + apiKey,
        dataType: 'jsonP',
        success: function(dataFromJSONP){
        var totalAppreciations =  dataFromJSONP.projects[0].stats.appreciations + 
        dataFromJSONP.projects[1].stats.appreciations + 
        dataFromJSONP.projects[2].stats.appreciations;
        var totalViews = dataFromJSONP.projects[0].stats.views + 
        dataFromJSONP.projects[1].stats.views +
        dataFromJSONP.projects[2].stats.views;
        var totalComments = dataFromJSONP.projects[0].stats.comments +
        dataFromJSONP.projects[1].stats.comments  +
        dataFromJSONP.projects[2].stats.comments;
        var designerName = dataFromJSONP.projects[0].owners[0].display_name;


  console.log(totalViews);
    console.log(dataFromJSONP);
    console.log(dataFromJSONP.projects[0].stats.appreciations);
    
    var data = new google.visualization.arrayToDataTable([
        ['Project Name', 'Appreciations', 'Views', ],
        [dataFromJSONP.projects[0].name, dataFromJSONP.projects[0].stats.appreciations, 
        dataFromJSONP.projects[0].stats.views ],
        [dataFromJSONP.projects[1].name, dataFromJSONP.projects[1].stats.appreciations, 
        dataFromJSONP.projects[1].stats.views ],
        [dataFromJSONP.projects[2].name, dataFromJSONP.projects[2].stats.appreciations, 
        dataFromJSONP.projects[2].stats.views ]
        
    
   ]);

   
       var options = {
          chart: {
            titlePosition: 'none',
          },
          legend: {
            position: 'none'
          },
          bar: {
            groupWidth: '100%'
          },
        
          fontName: 'Playfair Display, serif',
          fontSize: 14,
          bars: 'vertical',
          vAxis: {
            format: 'decimal',
            },
          colors: ['#1B2D47', '#1E3E75']
        };
 
   var classicChart = new google.charts.Bar(document.getElementById('chart1Location'));
    classicChart.draw(data, options);
       
       // $('#designerName3').append(designerName);
       // $('#viewStats3').append(totalViews);
       // $('#apreciationStats3').append(totalAppreciations);
       // $('#commentStats3').append(totalComments);
            

        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}
  $(window).resize(function(){
        getApiData();
        }) ;
console.log('hello kelsey');


console.log('hello world');