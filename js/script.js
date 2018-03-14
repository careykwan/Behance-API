console.log('hello carey');
  
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
        ['Group', 'Appreciations', 'Views', ],
        ['Project One', dataFromJSONP.projects[0].stats.appreciations, 
        dataFromJSONP.projects[0].stats.views ],
        ['Project Two', dataFromJSONP.projects[1].stats.appreciations, 
        dataFromJSONP.projects[1].stats.views ],
        ['Project Three', dataFromJSONP.projects[2].stats.appreciations, 
        dataFromJSONP.projects[2].stats.views ]
        
    
   ]);

   
       var options = {
          chart: {
            title: 'Appreciations vs Views',
          },
          legend: false,
          fontName: 'Playfair Display, serif',
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 400,
          colors: ['#1B2D47', '#1E3E75']
        };
 
   var classicChart = new google.charts.Bar(document.getElementById('chart1'));
    classicChart.draw(data, options);
       
              

        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}

console.log('hello kelsey');


console.log('hello world');