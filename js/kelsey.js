  
google.charts.load('current', {'packages':['corechart' ,'bar']});
 google.charts.setOnLoadCallback(getApiData);


var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
var designerId = 'njenworks';



function getApiData(){
	    $.ajax({     
        url:'https://api.behance.net/v2/users/' + designerId + '/projects?client_id=' + apiKey,
        dataType: 'jsonP',
        success: function(dataFromJSONP){

  
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
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 300,
          width:700,
          colors: ['#1B2D47', '#1E3E75']
        };
 
   var classicChart = new google.charts.Bar(document.getElementById('chart1Location'));
    classicChart.draw(data, options);
       
              

        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}

console.log('hello kelsey');

