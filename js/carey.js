behanceData();

function behanceData(){

	var apiKey = 'cPSHY669vPegbDmBas5ELAxsxAp6pigv';
	var userID = 'MaryRabun';

	$.ajax({
		url: 'http://www.behance.net/v2/users/' + userID + '/projects?callback=?&api_key=' + apiKey,
		dataType: 'jsonp',
		success: function(dataFromServer){
			var firstProject = dataFromServer.projects[0].covers.original;
			var secondProject = dataFromServer.projects[1].covers.original;
			var thirdProject = dataFromServer.projects[2].covers.original;
			var timeDisplay = dataFromServer.projects[0].published_on;
			var realTime = new date ("2013-08-22T00:35:00");
			
			// document.getElementById("time").innerHTML = timeDisplay.getDateFromFormat();

			
			runApp(realTime);

			$('#creator').empty();
			$('#creator').append(dataFromServer.projects[0].owners[1].display_name);
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

			$('#creator').empty();
			$('#creator').append(dataFromServer.projects[1].owners[2].display_name);
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

			$('#creator').empty();
			$('#creator').append(dataFromServer.projects[2].owners[2].display_name);
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
		},
		error:function(error){
			console.log(error);
			console.log("something went wrong");
		}		
	 });
}

function runApp (dataFromServer) {
	console.log(dataFromServer);
}



