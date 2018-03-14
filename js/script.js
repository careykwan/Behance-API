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
        ['Label', 'Value'],
        ['appreciations', dataFromJSONP.projects[0].stats.appreciations ],
        ['views',  dataFromJSONP.projects[0].stats.views],
        ['appreciations', dataFromJSONP.projects[1].stats.appreciations ],
        ['views',  dataFromJSONP.projects[1].stats.views],
        ['appreciations', dataFromJSONP.projects[2].stats.appreciations ],
        ['views',  dataFromJSONP.projects[2].stats.views]
    
   ]);

   
       var options = {
          chart: {
            title: 'Appreciations vs Views',
          },
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 400,
          colors: ['#1b9e77', '#d95f02', '#7570b3']
        };
 
   var classicChart = new google.charts.Bar(document.getElementById('chart1'));
    classicChart.draw(data, google.charts.Bar.convertOptions(options) );
       
              

        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}

console.log('hello kelsey');


console.log('hello world');