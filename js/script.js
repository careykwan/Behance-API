var apiKey = 'cPSHY669vPegbDmBas5ELAxsxAp6pigv';
var userID = 'maryRabun';
var maryRabun = 58448623;
// var claireHartley = this is ok
// var rafaalvarez = this is ok
// var Doralice = this is ok 
// var izutsu = this is ok
// var nahuelsal = this is ok
// var maryRabun =


behanceData();
commentsData();
nameData();

//this is to pull designers name
function nameData(){

	$.ajax({
		url: 'http://www.behance.net/v2/users/' + userID + '?&api_key=' + apiKey,
		dataType: 'jsonp',
		success: function(dataNames){
		
			runNames(dataNames);

		},
		error:function(error){
			console.log(error);
			console.log("something went wrong");
		}		
	 });
}

function runNames (dataNames){
	$('#creator').empty();
	$('#creator').append(dataNames.user.first_name + ' ' + dataNames.user.last_name);
}


// ajax request to grab user data
function behanceData(){

	$.ajax({
		url: 'http://www.behance.net/v2/users/' + userID + '/projects?callback=?&api_key=' + apiKey,
		dataType: 'jsonp',
		success: function(dataFromServer){
		
			runApp(dataFromServer);	

		},
		error:function(error){
			console.log(error);
			console.log("something went wrong");
		}		
	 });
}

// ajax request to grab comment data from the users
function commentsData(){
	
	$.ajax({
		url: 'https://api.behance.net/v2/projects/' + maryRabun + '/comments?client_id=' + apiKey,
		dataType: 'jsonp',
		success: function(dataFromServerTwo){
			runAppTwo(dataFromServerTwo);
			
		},
		error:function(error){
			console.log(error);
			console.log("something went wrong AGAIN");
		}
	});
}

// function to display the user data
function runApp (dataFromServer) {
	var firstProject = dataFromServer.projects[0].covers.original;
	var secondProject = dataFromServer.projects[1].covers.original;
	var thirdProject = dataFromServer.projects[2].covers.original;
	var timeOne = timeFormatter(dataFromServer.projects[0].published_on);
	var timeTwo = timeFormatter(dataFromServer.projects[1].published_on);
	var timeThree = timeFormatter(dataFromServer.projects[2].published_on);

			
	function timeFormatter(timeFromBehance) {
    return moment.unix(timeFromBehance).format('Do MMM YYYY');
	}
	
	$('#time').empty();
	$('#time').append('Published:' + ' ' + timeOne);	
	$('#photoOne').attr({src: firstProject });
	$('#titleOne').empty();
	$('#titleOne').append(dataFromServer.projects[0].name);
	$('#categoryOne').empty();
	$('#categoryOne').append(dataFromServer.projects[0].fields[2]);
	$('#viewsOne').empty();
	$('#viewsOne').append(dataFromServer.projects[0].stats.views);
	$('#likesOne').empty();
	$('#likesOne').append(dataFromServer.projects[0].stats.appreciations);
	$('#commentsOne').empty();
	$('#commentsOne').append(dataFromServer.projects[0].stats.comments);

	$('#timeTwo').empty();
	$('#timeTwo').append('Published:' + ' ' + timeTwo);	
	$('#photoTwo').attr({src: secondProject });
	$('#titleTwo').empty();
	$('#titleTwo').append(dataFromServer.projects[1].name);
	$('#categoryTwo').empty();
	$('#categoryTwo').append(dataFromServer.projects[1].fields[1]);
	$('#viewsTwo').empty();
	$('#viewsTwo').append(dataFromServer.projects[1].stats.views);
	$('#likesTwo').empty();
	$('#likesTwo').append(dataFromServer.projects[1].stats.appreciations);
	$('#commentsTwo').empty();
	$('#commentsTwo').append(dataFromServer.projects[1].stats.comments);

	$('#timeThree').empty();
	$('#timeThree').append('Published:' + ' ' + timeThree);	
	$('#photoThree').attr({src: thirdProject });
	$('#titleThree').empty();
	$('#titleThree').append(dataFromServer.projects[2].name);
	$('#categoryThree').empty();
	$('#categoryThree').append(dataFromServer.projects[2].fields[2]);
	$('#viewsThree').empty();
	$('#viewsThree').append(dataFromServer.projects[2].stats.views);
	$('#likesThree').empty();
	$('#likesThree').append(dataFromServer.projects[2].stats.appreciations);
	$('#commentsThree').empty();
	$('#commentsThree').append(dataFromServer.projects[2].stats.comments);
}


// function to display the comments data
function runAppTwo (dataFromServerTwo) {
	// console.log(dataFromServerTwo);
	// console.log(dataFromServerTwo.comments[0].comment);
	// console.log(dataFromServerTwo.comments[0].user.display_name);

	for (var i = 0; i < dataFromServerTwo.comments.length; i++) {
        appendCommentsCard(dataFromServerTwo.comments[i]);
    }
}


// This is a function append the comments to the div in html
function appendCommentsCard(dataFromServerTwo) {
    var output2 = document.getElementById('commentBox');
    var profileImg = dataFromServerTwo.user.images['50']; 

    // creating div for comment card
    var commentDiv = document.createElement('div');
    commentDiv.className = 'mainComment';
    output2.appendChild(commentDiv);

    var photoDiv = document.createElement('div');
    photoDiv.className = 'profile_pic';
    commentDiv.appendChild(photoDiv);

    var profilePic = document.createElement('img');
    profilePic.className = 'profileImage';
    profilePic.setAttribute('src', profileImg);
    photoDiv.appendChild(profilePic);

    var profileName = document.createElement('h3');
    profileName.className = 'profile_name';
    commentDiv.appendChild(profileName);

    var userComments = document.createElement('p');
    userComments.className = 'user_comments';
    commentDiv.appendChild(userComments);

    var designer = document.createTextNode(dataFromServerTwo.user.display_name);
    profileName.appendChild(designer);

    var comments = document.createTextNode(dataFromServerTwo.comment);
    userComments.appendChild(comments);

    // var img = document.createTextNode(profileImg);
    // profilePic.appendChild(img);

    // $('#pic').attr({src: profileImg });
    

    // console.log(dataFromServerTwo);

}


// appendCommentsCard();


kelseyJavascript();

function kelseyJavascript() {
    
$('#returnBtn').click(function(){
        window.location = 'index.html';
    });

google.charts.load('current', {'packages':['corechart' ,'bar']});
google.charts.setOnLoadCallback(getApiData);



var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
var designerId = 'MaryRabun';
var designer1 = 'rafaalvarez';
var designer2 = 'clairehartley';
var designer3 = 'Doralice';
var designer4 = 'izutsu';
var designer5 = 'MaryRabun';
var designer6 = 'nahuelsal';

getNameData();

function getApiData(){
	    $.ajax({     
        url:'https://api.behance.net/v2/users/' + designerId + '/projects?client_id=' + apiKey,
        dataType: 'jsonP',
        success: function(dataFromJSONP){
            // console.log(dataFromJSONP);
       
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
          fontName: 'sans-serif',
          fontSize: 14,
          bars: 'vertical',
          vAxis: {
            format: 'decimal',
            },
          colors: ['#1B2D47', '#1E3E75'],
          animation: {
            startup:true
        }
        };
 
         var classicChart = new google.charts.Bar(document.getElementById('chart1Location'));
         classicChart.draw(data, options);
       
        addDetails(dataFromJSONP);
        google.charts.setOnLoadCallback(drawPieChart(dataFromJSONP));

        $('#designerName3').click(function(){
            window.location = 'https://www.behance.net/' + designerId;
        });
         $('.nameDescription').click(function(){
            window.location = 'https://www.behance.net/' + designerId;
        });
        
       
        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}

console.log('hello kelsey');

function getNameData(){
    $.ajax({     
        url:'https://api.behance.net/v2/users/' + designerId + '?&api_key=' + apiKey,
        dataType: 'jsonP',
        success: function(dataFromJSONP2){
            console.log(dataFromJSONP2);

            $('#designerName3').empty();
             $('#designerName3').append(dataFromJSONP2.user.display_name);
             },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    });
}

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

        $('#viewStats3').empty();
        $('#commentStats3').empty();
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
}
console.log('hello world');