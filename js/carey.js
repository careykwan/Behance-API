careyjavascript();
function careyjavascript(){

	var apiKey = 'cPSHY669vPegbDmBas5ELAxsxAp6pigv';
	// var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
	var userID = 'maryRabun';
	var maryRabun = [58448623, 53585037, 53552369];
	var projects = [];
	// var claireHartley = this is ok
	// var rafaalvarez = this is ok
	// var Doralice = this is ok 
	// var izutsu = this is ok
	// var nahuelsal = this is ok
	// var maryRabun =

	behanceData();
	commentsData();
	nameData();
	commentsDataTwo();
	commentsDataThree();

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
	//this is a function to diplay names, will be deleted.
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
			url: 'https://api.behance.net/v2/projects/' + maryRabun[0] + '/comments?client_id=' + apiKey,
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

	//this is the ajax request for the second comments
	function commentsDataTwo(){
		
		$.ajax({
			url: 'https://api.behance.net/v2/projects/' + maryRabun[1] + '/comments?client_id=' + apiKey,
			dataType: 'jsonp',
			success: function(dataFromServerThree){
				runAppThree(dataFromServerThree);
			},
			error:function(error){
				console.log(error);
				console.log("something went wrong AGAIN");
			}
		});
	}
	//this is the function to run the second lot of comments and show in column
	function runAppThree (dataFromServerThree){
		console.log(dataFromServerThree);
	}

	//this is the ajax request for the third comments
	function commentsDataThree(){
		
		$.ajax({
			url: 'https://api.behance.net/v2/projects/' + maryRabun[2] + '/comments?client_id=' + apiKey,
			dataType: 'jsonp',
			success: function(dataFromServerFour){
				runAppFour(dataFromServerFour);
			},
			error:function(error){
				console.log(error);
				console.log("something went wrong AGAIN");
			}
		});
	}
	//this is the function to run the third lot of comments
	function runAppFour (dataFromServerFour){
		console.log(dataFromServerFour);
	}

	// function to display the user data
	function runApp (dataFromServer) {
		var firstProject = dataFromServer.projects[0].covers.original;
		var secondProject = dataFromServer.projects[1].covers.original;
		var thirdProject = dataFromServer.projects[2].covers.original;
		var timeOne = timeFormatter(dataFromServer.projects[0].published_on);
		var timeTwo = timeFormatter(dataFromServer.projects[1].published_on);
		var timeThree = timeFormatter(dataFromServer.projects[2].published_on);

		console.log(dataFromServer);
		//this is the function to convert the time to a readable format
		function timeFormatter(timeFromBehance) {
	    return moment.unix(timeFromBehance).format('Do MMM YYYY');
		}
		
		$('#timeOne').empty();
		$('#timeOne').append('Published:' + ' ' + timeOne);	
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

	// function to loop the comments data
	function runAppTwo (dataFromServerTwo) {

		for (var i = 0; i < dataFromServerTwo.comments.length; i++) {
	        appendCommentsCard(dataFromServerTwo.comments[i]);
	    }
	}

	// This is a function append the comments to the div in html
	function appendCommentsCard(dataFromServerTwo) {
	    var output2 = document.getElementById('commentBox');
	    var profileImg = dataFromServerTwo.user.images['50']; 
	    var timesUp = commentsDate(dataFromServerTwo.created_on);
	    
	    //This is the function to convert the date
	    function commentsDate(commentTimeBehance){
	    return moment.unix(commentTimeBehance).format('Do MMM YYYY'); 
		}
		console.log(timesUp);

	    // creating div for comment card
	    var commentDiv = document.createElement('div');
	    commentDiv.className = 'main_comment';
	    output2.appendChild(commentDiv);

	    var photoDiv = document.createElement('div');
	    photoDiv.className = 'profile_pic';
	    commentDiv.appendChild(photoDiv);

	    var profilePic = document.createElement('img');
	    profilePic.className = 'profileImage';
	    profilePic.setAttribute('src', profileImg);
	    photoDiv.appendChild(profilePic);

	    var nameTag = document.createElement('div');
	    nameTag.className = 'profile_tag';
	    commentDiv.appendChild(nameTag);

	    var profileName = document.createElement('h3');
	    profileName.className = 'profile_name';
	    nameTag.appendChild(profileName);

	    var showDate = document.createElement('p');
	    showDate.className = 'small_date';
	    nameTag.appendChild(showDate);

	    var userComments = document.createElement('p');
	    userComments.className = 'user_comments';
	    commentDiv.appendChild(userComments);

	    //These are to show the data in the dom
	    var designer = document.createTextNode(dataFromServerTwo.user.display_name);
	    profileName.appendChild(designer);

	    var date = document.createTextNode('.' + ' ' + timesUp);
	    showDate.appendChild(date);

	    var comments = document.createTextNode(dataFromServerTwo.comment);
	    userComments.appendChild(comments);

	}

}

