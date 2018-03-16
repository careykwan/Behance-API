careyjavascript();
function careyjavascript(){

	// var apiKey = 'cPSHY669vPegbDmBas5ELAxsxAp6pigv';
	var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
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

}


kelseyJavascript();

function kelseyJavascript() {
    
$('#returnBtn').click(function(){
        window.location = 'index.html';
    });

google.charts.load('current', {'packages':['corechart' ,'bar']});
google.charts.setOnLoadCallback(getApiData);



var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
var designerId = 'izutsu';
var designer1 = 'rafaalvarez';
var designer2 = 'clairehartley';
var designer3 = 'Doralice';
var designer4 = 'izutsu';
var designer5 = 'MaryRabun';
var designer6 = 'nahuelsal';

// getNameData();


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

// function getNameData(){
//     $.ajax({     
//         url:'https://api.behance.net/v2/users/' + designerId + '?&api_key=' + apiKey,
//         dataType: 'jsonP',
//         success: function(dataFromJSONP2){
//             console.log(dataFromJSONP2);

//             $('#designerName3').empty();
//              $('#designerName3').append(dataFromJSONP2.user.display_name);
//              },
//         error: function(error){
//             console.log(error);
//             console.log("Something has gone wrong");
//         }
//     });
// }

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

// init function invokations
florenceJavaScript();

function florenceJavaScript() {

    multipleAJAXRequestFunction();
    changeModalInfo();

    function changeModalInfo() {
        grabUserID();
        var apiKey = 'cUrZsmxKrahZRfyjKoZIY6XtbecnuEH5';
        // var apiKey = 'x5dUkwcodDRG0Nf0uz0ht0EMrA4sLOco';
        // var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
        var userIDArray = [];

        // @grabUserID is a switch statement to push and empty certain UserIDs depending on what div has been clicked has been clicked.
        function grabUserID() {
            $('div').click(function () {
                switch (this.id) {
                    case 'designerOne2':
                        userIDArray.splice(0, 1);
                        userIDArray.push('rafaalvarez');
                        AJAXBehanceRequest2();
                        break;
                    case 'designerTwo2':
                        userIDArray.splice(0, 1);
                        userIDArray.push('clairehartley');
                        AJAXBehanceRequest2();
                        break;
                    case 'designerThree2':
                        userIDArray.splice(0, 1);
                        userIDArray.push('Doralice');
                        AJAXBehanceRequest2();
                        break;
                    case 'designerFour2':
                        userIDArray.splice(0, 1);
                        userIDArray.push('izutsu');
                        AJAXBehanceRequest2();
                        break;
                    case 'designerFive2':
                        userIDArray.splice(0, 1);
                        userIDArray.push('MaryRabun');
                        AJAXBehanceRequest2();
                        break;
                    case 'designerSix2':
                        userIDArray.splice(0, 1);
                        userIDArray.push('nahuelsal');
                        AJAXBehanceRequest2();
                        break;
                }
            });
        }

        // @AJAXBehanceRequest2 Runs a AJAX request to Behance API to grab data, if successful it will run showDesignerDetails function.
        function AJAXBehanceRequest2() {
            $.ajax({
                url: 'http://behance.net/v2/users/' + userIDArray[0] + '?api_key=' + apiKey,
                dataType: 'jsonp',
                // beforeSend: function (e) {
                //     console.log(e);
                // },
                success: function (data) {
                    showDesignerDetails(data);
                },
                error: function (error) {
                    console.log(error);
                    console.log('Something has gone wrong');
                }
            });
        }

        // @showDesignerDetails that changes the data in the modal depending on what user is clicked
        function showDesignerDetails(data) {
            $('#modalProfileImg2').attr("src", data.user.images['276']);
            $('#designerName2').text(data.user.first_name + ' ' + data.user.last_name);
            $('#locationInfo2').text(data.user.location);

            var designerFocus = data.user.fields.join(', ');
            $('#focusInfo2').text(designerFocus);

            var designerWebsite;
            if (data.user.website === '') {
                designerWebsite = data.user.url;
            }
            else {
                designerWebsite = data.user.website;
            }

            var parsedDesignerWebsite = designerWebsite.replace(/(^\w+:|^)\/\//, '');
            $('#designerWebsiteLink2').text(parsedDesignerWebsite);
            $('#designerWebsiteLink2').attr("href", data.user.website);

            $('#viewsValue2').text(data.user.stats.views);
            $('#appreciationValue2').text(data.user.stats.appreciations);
            $('#followersValue2').text(data.user.stats.followers);
            $('#followingValue2').text(data.user.stats.following);

            $('.designer-name-2').text(data.user.first_name + ' ' + data.user.last_name);
        }
    }
    
// This code is unnecessary but I wanted to use a AJAX request to append all the info possible for my site. 
// I could have made multiple AJAX request from the start but decided to try a way to replace the UserID in the request instead. 

    function multipleAJAXRequestFunction() {
        seconeAJAXBehanceRequest2();

        // @AJAXBehanceRequest2 Runs a AJAX request to Behance API to grab data, if successful it will run showDesignerDetails function.
        function seconeAJAXBehanceRequest2() {

            var apiKey = 'cUrZsmxKrahZRfyjKoZIY6XtbecnuEH5';
            // var apiKey = 'x5dUkwcodDRG0Nf0uz0ht0EMrA4sLOco';
            // var apiKey = 's2I0yUtgNQA70LjwEMBJfy3TWu2MGOsG';
            
            var designer1 = 'rafaalvarez';
            var designer2 = 'clairehartley';
            var designer3 = 'Doralice';
            var designer4 = 'izutsu';
            var designer5 = 'MaryRabun';
            var designer6 = 'nahuelsal';

            // AJAX Request Designer 1
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer1 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#loaderGIF1').show();
                },
                success: function (data2) {
                    requestingDesigner1Data(data2);
                    $('#loaderGIF1').hide();
                },
                error: function (error2) {
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner1Data(data2) {
                $('#profileImg1').attr("src", data2.projects[0].owners[0].images['276']);
                $('.designer1-name-2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
                $('#slide-6').attr("src", data2.projects[0].covers.original);
                $('#slideProjectName1').text(data2.projects[0].name);
                $('#slideDesignerName1').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);

            }
           
            // // AJAX Request Designer 2
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer2 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#loaderGIF2').show();
                },
                success: function (data2) {
                    requestingDesigner2Data(data2);
                    $('#loaderGIF2').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner2Data(data2) {
                $('#profileImg2').attr("src", data2.projects[0].owners[0].images['276']);
                $('.designer2-name-2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
                $('#slide-2').attr("src", data2.projects[0].covers.original);
                $('#slideProjectName2').text(data2.projects[0].name);
                $('#slideDesignerName2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
            }

            // // AJAX Request Designer 3
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer3 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#loaderGIF3').show();
                },
                success: function (data2) {
                    requestingDesigner3Data(data2);
                    $('#loaderGIF3').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner3Data(data2) {
                $('#profileImg3').attr("src", data2.projects[0].owners[0].images['276']);
                $('.designer3-name-2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
                $('#slide-1').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName3').text(data2.projects[1].name);
                $('#slideDesignerName3').text(data2.projects[1].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
            }

            // // AJAX Request Designer 4
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer4 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#loaderGIF4').show();
                },
                success: function (data2) {
                    requestingDesigner4Data(data2);
                    $('#loaderGIF4').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner4Data(data2) {
                $('#profileImg4').attr("src", data2.projects[0].owners[0].images['276']);
                $('.designer4-name-2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
                $('#slide-4').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName4').text(data2.projects[1].name);
                $('#slideDesignerName4').text(data2.projects[1].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
            }

            // // AJAX Request Designer 5
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer5 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#loaderGIF5').show();
                },
                success: function (data2) {
                    requestingDesigner5Data(data2);
                    $('#loaderGIF5').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner5Data(data2) {
                $('#profileImg5').attr("src", data2.projects[0].owners[1].images['276']);
                $('.designer5-name-2').text(data2.projects[0].owners[1].first_name + ' ' + data2.projects[1].owners[1].last_name);
                $('#slide-5').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName5').text(data2.projects[1].name);
                $('#slideDesignerName5').text(data2.projects[1].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
            }

            // // AJAX Request Designer 6
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer6 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#loaderGIF6').show();
                },
                success: function (data2) {
                    requestingDesigner6Data(data2);
                    $('#loaderGIF6').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner6Data(data2) {
                $('#profileImg6').attr("src", data2.projects[0].owners[1].images['276']);
                $('.designer6-name-2').text(data2.projects[0].owners[1].first_name + ' ' + data2.projects[1].owners[1].last_name);
                $('#slide-3').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName6').text(data2.projects[1].name);
                $('#slideDesignerName6').text(data2.projects[1].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
            } 
        }
    }

    // Homepage JavaScript 
    // Slick JS (slideshow jQuery)
    $('.slick-designer-slideshow-2').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2500
    });

    // About and contact Open and close
    $('button').click(function () {
        switch (this.id) {
            case 'aboutLink':
                if ($('.about-overlay-container-2').css('display') !== 'none'){
                    $('.about-overlay-container-2').css('display', 'none');
                    $('.contact-overlay-container-2').css('display', 'none');
                }
                else{
                    $('.about-overlay-container-2').css('display', 'block');
                    $('.contact-overlay-container-2').css('display', 'none');
                }
                break;
            case 'contactLink':
                if ($('.contact-overlay-container-2').css('display') !== 'none') {
                    $('.contact-overlay-container-2').css('display', 'none');
                    $('.about-overlay-container-2').css('display', 'none');
                }
                else {
                    $('.contact-overlay-container-2').css('display', 'block');
                    $('.about-overlay-container-2').css('display', 'none');
                }
                break;
            case 'closeContact':
                $('.contact-overlay-container-2').css('display', 'none');
                break;
        }
    });

    $('#contactBackground').click(function () {
        $('.contact-overlay-container-2').css('display', 'none');
    });
}


