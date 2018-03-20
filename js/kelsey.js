function kelseyJavascript() {
  //click function on return button to go back to desingers page
  $('#returnBtn').click(function (){
    window.location = 'index.html';
  });
  //click function that links behance logo to behance 
  //homepage
  $('#secondLogo3').click(function (){
    window.location = 'https://www.behance.net/';
  });

  google.charts.load('current', {'packages':['corechart' ,'bar']});
  google.charts.setOnLoadCallback(getApiData);

// var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
  var apiKey = '9GZKv2mtTMZwnLXjV4lOWIQONW7Xq2ip';
  var designerId = 'MaryRabun';

  getNameData();

// function to change desinger user id to get new desinger data from api
  $('.dropdown-item').click(function(){
    switch (this.id) {
    case 'designerOne3':
    designerId = 'rafaalvarez';
    google.charts.setOnLoadCallback(getApiData);
    getNameData();
    break;
    case 'designerTwo3':
    designerId = 'clairehartley';
    google.charts.setOnLoadCallback(getApiData);
    getNameData();
    break;
    case 'designerThree3' :
    designerId = 'Doralice';
    google.charts.setOnLoadCallback(getApiData);
    getNameData();
    break;
    case 'designerFour3' :
    designerId = 'izutsu';
    google.charts.setOnLoadCallback(getApiData);
    getNameData();
    break;
    case 'designerFive3' :
    designerId = 'MaryRabun';
    google.charts.setOnLoadCallback(getApiData);
    getNameData();
    break;
    case 'designerSix3' :
    designerId = 'nahuelsal';
    google.charts.setOnLoadCallback(getApiData);
    getNameData();
    break;
    }
  });

//initial ajax request to get data from api
//also includes functions to create bar graph and invokes
//add details and drawpiechart functions
  function getApiData(){

    $.ajax({     
      url:'https://api.behance.net/v2/users/' + designerId + '/projects?client_id=' + apiKey,
      dataType: 'jsonP',
      success: function(dataFromJSONP){

      var data = new google.visualization.arrayToDataTable([
        ['', 'Appreciations', 'Views', ],
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
        position: 'bottom'
      },
      bars: 'vertical',
      vAxis: {
        format: 'decimal',
        },
      colors: ['#1B2D47', '#1E3E75'],

      };

      var classicChart = new google.charts.Bar(document.getElementById('chart1Location'));
      classicChart.draw(data, options);

      addDetails(dataFromJSONP);
      google.charts.setOnLoadCallback(drawPieChart(dataFromJSONP));

      },
      error: function(error){
        $('#errorMessage').empty();
        $('#errorMessage').css('display','inline');
       $('#errorMessage').append('Unable To Connect To Server!');
      }
      });
    }


  // function to get the names of each designer and to display them
  function getNameData(){
    $.ajax({     
        url:'https://api.behance.net/v2/users/' + designerId + '?&api_key=' + apiKey,
        dataType: 'jsonP',
        success: function(dataFromJSONP2){
            console.log(dataFromJSONP2);

            $('.designerName3').empty();
             $('.designerName3').append(dataFromJSONP2.user.display_name);
             },
        error: function(error){
         $('#errorMessage').empty();
        $('#errorMessage').css('display','inline');
       $('#errorMessage').append('Unable To Connect To Server!');
       $('.designerName3').css('display', 'none');
        }
    });
  }
  //function to create the pice chart, data from inital ajax function is passed through as paramter
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
  //function to display data in the DOM
  //data from ajax passed through as paramater
  function addDetails(dataFromJSONP){

    $('#viewStats3').empty();
    $('#commentStats3').empty();
    $('#appreciationStats3').empty();
    $('#viewStats3').append(dataFromJSONP.projects[0].stats.views + 
    dataFromJSONP.projects[1].stats.views +
    dataFromJSONP.projects[2].stats.views);
    $('#appreciationStats3').append(dataFromJSONP.projects[0].stats.appreciations + 
    dataFromJSONP.projects[1].stats.appreciations + 
    dataFromJSONP.projects[2].stats.appreciations);
    $('#commentStats3').append(dataFromJSONP.projects[0].stats.comments +
    dataFromJSONP.projects[1].stats.comments  +
    dataFromJSONP.projects[2].stats.comments);
              
  }
}
//everything is wrapped inside a funciton 
//this invokes that fucnction
kelseyJavascript();
