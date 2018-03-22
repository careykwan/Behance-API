careyjavascript();

function careyjavascript(){

	var apiKey = 'cPSHY669vPegbDmBas5ELAxsxAp6pigv';
	var userID = 'maryRabun';
	var projects = [58448623, 53585037, 53552369];

	behanceData();
	commentsData();
	commentsDataTwo();
	commentsDataThree();

	/**  this is the function for the button to be clicked to be taken back to the index page  **/
	 $('.button_one').click(function(){
    	window.location = 'index.html';
  	});

	/** This switch statement is the function to display the correct data once the name is selected  **/
	$('.dropdown-item').click(function(){
	 switch (this.id) {
	   case 'd1':
	   userID = 'claireHartley';
	   behanceData();
	   projects = [58087873, 55991459, 53275341];
	   $('.comment_box').empty();
	   commentsData();
	   commentsDataTwo();
	   commentsDataThree();
	   nameData();
	   document.getElementsByClassName('link_one')[0].setAttribute('href', 'https://www.behance.net/gallery/58087873/Jardiniere-Sauvage-Brand-identity-Packaging');
	   document.getElementsByClassName('link_one')[1].setAttribute('href', 'https://www.behance.net/gallery/55991459/Forest-Shore-Brand-identity-Packaging');
	   document.getElementsByClassName('link_one')[2].setAttribute('href', 'https://www.behance.net/gallery/53275341/Hogans-Cider-Brand-Identity-Packaging');
	   break;
	   case 'd2':
	   userID = 'rafaalvarez';
	   behanceData();
	   projects = [61898815, 61813935, 57438239];
	   $('.comment_box').empty();
	   commentsData();
	   commentsDataTwo();
	   commentsDataThree();
	   nameData();
	   document.getElementsByClassName('link_one')[0].setAttribute('href', 'https://www.behance.net/gallery/61898815/The-League-of-Extraordinary-Football-Players-(Video)');
	   document.getElementsByClassName('link_one')[1].setAttribute('href', 'https://www.behance.net/gallery/61813935/The-Exchange-Illustrated-Wisedom-for-the-Modern-Men');
	   document.getElementsByClassName('link_one')[2].setAttribute('href', 'https://www.behance.net/gallery/57438239/Berlin-Creative-Jam');
	   break;
	   case 'd3' :
	   userID = 'Doralice';
	   behanceData();
	   projects = [62422395, 61381731, 59461965];
	   $('.comment_box').empty();
	   commentsData();
	   commentsDataTwo();
	   commentsDataThree();
	   nameData();
	   document.getElementsByClassName('link_one')[0].setAttribute('href', 'https://www.behance.net/gallery/62422395/The-Atlantic-The-Possibility-Report');
	   document.getElementsByClassName('link_one')[1].setAttribute('href', 'https://www.behance.net/gallery/61381731/Anxious');
	   document.getElementsByClassName('link_one')[2].setAttribute('href', 'https://www.behance.net/gallery/59461965/Lush-Christmas-2017');
	   break;
	   case 'd4' :
	   userID = 'izutsu';
	   behanceData();
	   projects = [63145991, 62028201, 61987041];
	   $('.comment_box').empty();
	   commentsData();
	   commentsDataTwo();
	   commentsDataThree();
	   nameData();
	   document.getElementsByClassName('link_one')[0].setAttribute('href', 'https://www.behance.net/gallery/63145991/Adventure-over-the-sky20-2016-1012');
	   document.getElementsByClassName('link_one')[1].setAttribute('href', 'https://www.behance.net/gallery/62028201/AN-IMAGE-113-To-the-Lst');
	   document.getElementsByClassName('link_one')[2].setAttribute('href', 'https://www.behance.net/gallery/61987041/AN-IMAGE1112-');
	   break;
	   case 'd5' :
	   userID= 'nahuelsal';
	   behanceData();
	   projects = [51695529, 46618799, 25525849];
	   $('.comment_box').empty();
	   commentsData();
	   commentsDataTwo();
	   commentsDataThree();
	   nameData();
	   document.getElementsByClassName('link_one')[0].setAttribute('href', 'https://www.behance.net/gallery/51695529/Onesal-Showcase');
	   document.getElementsByClassName('link_one')[1].setAttribute('href', 'https://www.behance.net/gallery/46618799/Living-Interface-for-Discovery-Channel-Japan');
	   document.getElementsByClassName('link_one')[2].setAttribute('href', 'https://www.behance.net/gallery/25525849/Giro-dItalia');
	   break;
	   case 'd6' :
	   userID = 'maryRabun';
	   behanceData();
	   projects = [58448623, 53585037, 53552369];
	   $('.comment_box').empty();
	   commentsData();
	   commentsDataTwo();
	   commentsDataThree();
	   nameData();
	   document.getElementsByClassName('link_one')[0].setAttribute('href', 'https://www.behance.net/gallery/58448623/Poly-Co');
	   document.getElementsByClassName('link_one')[1].setAttribute('href', 'https://www.behance.net/gallery/53585037/Juniper-Square');
	   document.getElementsByClassName('link_one')[2].setAttribute('href', 'https://www.behance.net/gallery/53552369/Boll-Branch');
	   break;
	 	}
	});	

	/**  this is the ajax request to the pull designers name  **/
	function nameData(){

		$.ajax({
			url: 'http://www.behance.net/v2/users/' + userID + '?&api_key=' + apiKey,
			dataType: 'jsonp',
			success: function(dataNames){
			
				runNames(dataNames);

			},
			error:function(error){
				console.log(error);
			}		
		 });
	}

	function runNames (dataNames){
		$('.creator_name').empty();
		$('.creator_name').append(dataNames.user.first_name + ' ' + dataNames.user.last_name);
	}

	/**  This is a ajax request to grab users project details  **/
	function behanceData(){

		$.ajax({
			url: 'http://www.behance.net/v2/users/' + userID + '/projects?callback=?&api_key=' + apiKey,
			dataType: 'jsonp',
			success: function(dataFromServer){
			
				runApp(dataFromServer);	

			},
			error:function(error){
				console.log(error);
				$('.error_box').show();
			}		
		 });
	}

	/**  This is the ajax request to grab the comment data for the first project for each designer  **/
	function commentsData(){
		
		$.ajax({
			url: 'https://api.behance.net/v2/projects/' + projects[0] + '/comments?client_id=' + apiKey,
			dataType: 'jsonp',
			success: function(dataFromServerTwo){
				runAppTwo(dataFromServerTwo);
				
			},
			error:function(error){
				console.log(error);
			}
		});
	}

	/** this is the ajax request to pull comment data for the second project for each designer  **/
	function commentsDataTwo(){
		
		$.ajax({
			url: 'https://api.behance.net/v2/projects/' + projects[1] + '/comments?client_id=' + apiKey,
			dataType: 'jsonp',
			success: function(dataFromServerThree){
				runAppThree(dataFromServerThree);
			},
			error:function(error){
				console.log(error);
			}
		});
	}

	/** this is the ajax request comment data for the third project for each designer  **/
	function commentsDataThree(){
		
		$.ajax({
			url: 'https://api.behance.net/v2/projects/' + projects[2] + '/comments?client_id=' + apiKey,
			dataType: 'jsonp',
			success: function(dataFromServerFour){
				runAppFour(dataFromServerFour);
			},
			error:function(error){
				console.log(error);
			}
		});
	}
	
	/** This function displays the user data to the dom **/
	function runApp (dataFromServer) {
		var firstProject = dataFromServer.projects[0].covers.original;
		var secondProject = dataFromServer.projects[1].covers.original;
		var thirdProject = dataFromServer.projects[2].covers.original;
		var timeOne = timeFormatter(dataFromServer.projects[0].published_on);
		var timeTwo = timeFormatter(dataFromServer.projects[1].published_on);
		var timeThree = timeFormatter(dataFromServer.projects[2].published_on);

		/** this is the function to convert the time time stap to a readable format  **/
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

	/** This function loops through the comments data **/
	function runAppTwo (dataFromServerTwo) {

		for (var i = 0; i < dataFromServerTwo.comments.length; i++) {
	        appendCommentsCard(dataFromServerTwo.comments[i]);
	    }
	}

	/** this is the function to run the second lot of comments and show in column  **/
	function runAppThree (dataFromServerThree){

		for (var i = 0; i < dataFromServerThree.comments.length; i++) {
	        appendCommentsCardTwo(dataFromServerThree.comments[i]);
	    }
	}

	/** this is the function to run the third lot of comments**/
	function runAppFour (dataFromServerFour){
		for (var i = 0; i < dataFromServerFour.comments.length; i++) {
	        appendCommentsCardThree(dataFromServerFour.comments[i]);
	    }
	}

	/** This is a function append the comments to the div in html **/
	function appendCommentsCard(dataFromServerTwo) {
	    var output2 = document.getElementById('commentBox');
	    var profileImg = dataFromServerTwo.user.images['50']; 
	    var timesUp = commentsDate(dataFromServerTwo.created_on);
	    
	    /** This is the function to convert the date **/
	    function commentsDate(commentTimeBehance){
	    return moment.unix(commentTimeBehance).format('Do MMM YYYY'); 
		}

	    /** creating div for comment card **/
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

	    /** These are to show the data in the dom **/
	    var designer = document.createTextNode(dataFromServerTwo.user.display_name);
	    profileName.appendChild(designer);

	    var date = document.createTextNode('.' + ' ' + timesUp);
	    showDate.appendChild(date);

	    var comments = document.createTextNode(dataFromServerTwo.comment);
	    userComments.appendChild(comments);

	}

	/** This is a function to append the comments to the second card of divs in html **/
	function appendCommentsCardTwo(dataFromServerThree) {
	    var output3 = document.getElementById('commentBoxTwo');
	    var profileImgTwo = dataFromServerThree.user.images['50']; 
	    var timesUpTwo = commentsDateTwo(dataFromServerThree.created_on);
	    
	    /** This is the function to convert the date **/
	    function commentsDateTwo(commentTimeBehanceTwo){
	    return moment.unix(commentTimeBehanceTwo).format('Do MMM YYYY'); 
		}

	    /** creating div for comment card **/
	    var commentDiv = document.createElement('div');
	    commentDiv.className = 'main_comment';
	    output3.appendChild(commentDiv);

	    var photoDiv = document.createElement('div');
	    photoDiv.className = 'profile_pic';
	    commentDiv.appendChild(photoDiv);

	    var profilePic = document.createElement('img');
	    profilePic.className = 'profileImage';
	    profilePic.setAttribute('src', profileImgTwo);
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

	    /** These are to show the data in the dom **/
	    var designer = document.createTextNode(dataFromServerThree.user.display_name);
	    profileName.appendChild(designer);

	    var date = document.createTextNode('.' + ' ' + timesUpTwo);
	    showDate.appendChild(date);

	    var comments = document.createTextNode(dataFromServerThree.comment);
	    userComments.appendChild(comments);
	}

	/** This is a function append the comments to the second card of divs in html **/
	function appendCommentsCardThree(dataFromServerFour) {
	    var output4 = document.getElementById('commentBoxThree');
	    var profileImgThree = dataFromServerFour.user.images['50']; 
	    var timesUpThree = commentsDateThree(dataFromServerFour.created_on);
	    
	    /** This is the function to convert the date **/
	    function commentsDateThree(commentTimeBehanceTwo){
	    return moment.unix(commentTimeBehanceTwo).format('Do MMM YYYY'); 
		}

	    /** creating div for comment card  **/
	    var commentDiv = document.createElement('div');
	    commentDiv.className = 'main_comment';
	    output4.appendChild(commentDiv);

	    var photoDiv = document.createElement('div');
	    photoDiv.className = 'profile_pic';
	    commentDiv.appendChild(photoDiv);

	    var profilePic = document.createElement('img');
	    profilePic.className = 'profileImage';
	    profilePic.setAttribute('src', profileImgThree);
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

	    /** These are to show the data in the dom **/
	    var designer = document.createTextNode(dataFromServerFour.user.display_name);
	    profileName.appendChild(designer);

	    var date = document.createTextNode('.' + ' ' + timesUpThree);
	    showDate.appendChild(date);

	    var comments = document.createTextNode(dataFromServerFour.comment);
	    userComments.appendChild(comments);
	}
}

