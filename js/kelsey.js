
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
            console.log(dataFromJSONP);
       
        var data = new google.visualization.arrayToDataTable([
            ['Click bars for more details', 'Appreciations', 'Views', ],
            ['Project One',dataFromJSONP.projects[0].stats.appreciations, 
            dataFromJSONP.projects[0].stats.views ],
            ['Project Two',dataFromJSONP.projects[1].stats.appreciations, 
            dataFromJSONP.projects[1].stats.views ],
            ['Project Three',dataFromJSONP.projects[2].stats.appreciations, 
            dataFromJSONP.projects[2].stats.views ]
            
    
   ]);

   
       var options = {
          chart: {
            titlePosition: 'none',
          },
          legend: {
            position: 'none'
          },
          // chartArea:{
          //   height:400,
          //   width: 700
          // },
          
          fontName: 'sans-serif',
          fontSize: 14,
          bars: 'vertical',
          vAxis: {
            format: 'decimal',
            },
          colors: ['#1B2D47', '#1E3E75']
        };
 
         var classicChart = new google.charts.Bar(document.getElementById('chart1Location'));
         classicChart.draw(data, options);
       
        addDetails(dataFromJSONP);
        google.charts.setOnLoadCallback(drawPieChart(dataFromJSONP));
        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}

console.log('hello kelsey');


function drawPieChart(dataFromJSONP){
      var data = new google.visualization.DataTable();
        data.addColumn('string', 'Project Name');
        data.addColumn('number', 'Comments');
        data.addRows([
          [dataFromJSONP.projects[0].name, dataFromJSONP.projects[0].stats.comments],
          [dataFromJSONP.projects[1].name, dataFromJSONP.projects[1].stats.comments],
          [dataFromJSONP.projects[2].name, dataFromJSONP.projects[2].stats.comments],
         
        ]);

        var options = {
            slices: [
            {color: '#1B2D47'},
            {color: '#1E3E75'},
            {color: '#2F4C93'},
             ],
            chartArea:{
            height:400,
            width: 700
          },
         
            };

        var chart = new google.visualization.PieChart(document.getElementById('chart2Location'));
        chart.draw(data, options);
}

function addDetails(dataFromJSONP){

        $('#designerName3').empty();
        $('#viewStats3').empty();
        $('#commentStats3').empty();
        $('#designerName3').append(dataFromJSONP.projects[0].owners[0].display_name);
        $('#viewStats3').append(dataFromJSONP.projects[0].stats.views + 
        dataFromJSONP.projects[1].stats.views +
        dataFromJSONP.projects[2].stats.views);
        $('#apreciationStats3').append(dataFromJSONP.projects[0].stats.appreciations + 
        dataFromJSONP.projects[1].stats.appreciations + 
        dataFromJSONP.projects[2].stats.appreciations);
        $('#commentStats3').append(dataFromJSONP.projects[0].stats.comments +
        dataFromJSONP.projects[1].stats.comments  +
        dataFromJSONP.projects[2].stats.comments);
            
}