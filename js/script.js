
// init function invokations
florenceJavaScript();

function florenceJavaScript() {

    multipleAJAXRequestFunction();
    changeModalInfo();

    function changeModalInfo() {
        grabUserID();
        // var apiKey = 'cUrZsmxKrahZRfyjKoZIY6XtbecnuEH5';
        var apiKey = 'x5dUkwcodDRG0Nf0uz0ht0EMrA4sLOco';

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

        // @AJAXBehanceRequest2 Runs a AJAX request to Behance API to grab data for the designer details modal, if successful it will run showDesignerDetails function .
        function AJAXBehanceRequest2() {
            $.ajax({
                url: 'http://behance.net/v2/users/' + userIDArray[0] + '?api_key=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function (e) {
                    $(".modal-body-content-wrapper-2").css("display", "none");
                    $("#loaderDiv2").css("display", "flex");
                },
                success: function (data) {
                    showDesignerDetails(data);
                    $("#loaderDiv2").css("display", "none");
                    $(".modal-body-content-wrapper-2").css("display", "flex");
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

            // var apiKey = 'cUrZsmxKrahZRfyjKoZIY6XtbecnuEH5';
            var apiKey = 'x5dUkwcodDRG0Nf0uz0ht0EMrA4sLOco';

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
                    $('#slide-1').hide();
                    $('#slideProjectName1').hide();
                    $('#slideDesignerName1').hide();

                    $('#profileImg1').attr('src', 'img/loader.gif');
                },
                success: function (data2) {
                    requestingDesigner1Data(data2);
                    $('#slide-1').fadeIn(400);
                    $('#slideProjectName1').show();
                    $('#slideDesignerName1').show();
                },
                error: function (error2) {
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner1Data(data2) {
                $('#profileImg1').attr("src", data2.projects[0].owners[0].images['276']);
                $('.designer1-name-2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
                $('#slide-1').attr("src", data2.projects[0].covers.original);
                $('#slideProjectName1').text(data2.projects[0].name);
                $('#slideDesignerName1').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);

            }

            // // AJAX Request Designer 2
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer2 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#slide-2').hide();
                    $('#slideProjectName2').hide();
                    $('#slideDesignerName2').hide();

                    // $('#loaderGIF2').show();
                    $('#profileImg2').attr('src', 'img/loader.gif');
                },
                success: function (data2) {
                    requestingDesigner2Data(data2);
                    $('#slide-2').show();
                    $('#slideProjectName2').show();
                    $('#slideDesignerName2').show();

                    // $('#loaderGIF2').hide();
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
                    $('#slide-3').hide();
                    $('#slideProjectName3').hide();
                    $('#slideDesignerName3').hide();

                    // $('#loaderGIF3').show();
                    $('#profileImg3').attr('src', 'img/loader.gif');
                },
                success: function (data2) {
                    requestingDesigner3Data(data2);
                    $('#slide-3').show();
                    $('#slideProjectName3').show();
                    $('#slideDesignerName3').show();

                    // $('#loaderGIF3').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner3Data(data2) {
                $('#profileImg3').attr("src", data2.projects[0].owners[0].images['276']);
                $('.designer3-name-2').text(data2.projects[0].owners[0].first_name + ' ' + data2.projects[0].owners[0].last_name);
                $('#slide-3').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName3').text(data2.projects[1].name);
                $('#slideDesignerName3').text(data2.projects[1].owners[0].first_name + ' ' + data2.projects[1].owners[0].last_name);
            }

            // // AJAX Request Designer 4
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer4 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#slide-4').hide();
                    $('#slideProjectName4').hide();
                    $('#slideDesignerName4').hide();

                    // $('#loaderGIF4').show();
                    $('#profileImg4').attr('src', 'img/loader.gif');
                },
                success: function (data2) {
                    requestingDesigner4Data(data2);
                    $('#slide-4').show();
                    $('#slideProjectName4').show();
                    $('#slideDesignerName4').show();

                    // $('#loaderGIF4').hide();
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
                $('#slideDesignerName4').text(data2.projects[1].owners[0].first_name + ' ' + data2.projects[1].owners[0].last_name);
            }

            // // AJAX Request Designer 5
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer5 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#slide-5').hide();
                    $('#slideProjectName5').hide();
                    $('#slideDesignerName5').hide();

                    // $('#loaderGIF5').show();
                    $('#profileImg5').attr('src', 'img/loader.gif');
                },
                success: function (data2) {
                    requestingDesigner5Data(data2);
                    $('#slide-5').show();
                    $('#slideProjectName5').show();
                    $('#slideDesignerName5').show();

                    // $('#loaderGIF5').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner5Data(data2) {
                $('#profileImg5').attr("src", data2.projects[0].owners[1].images['276']);
                $('.designer5-name-2').text(data2.projects[0].owners[1].first_name + ' ' + data2.projects[0].owners[1].last_name);
                $('#slide-5').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName5').text(data2.projects[1].name);
                $('#slideDesignerName5').text(data2.projects[0].owners[1].first_name + ' ' + data2.projects[0].owners[1].last_name);
            }

            // // AJAX Request Designer 6
            $.ajax({
                url: 'https://api.behance.net/v2/users/' + designer6 + '/projects?client_id=' + apiKey,
                dataType: 'jsonp',
                beforeSend: function () {
                    $('#slide-6').hide();
                    $('#slideProjectName6').hide();
                    $('#slideDesignerName6').hide();

                    // $('#loaderGIF6').show();
                    $('#profileImg6').attr('src', 'img/loader.gif');
                },
                success: function (data2) {
                    requestingDesigner6Data(data2);
                    $('#slide-6').show();
                    $('#slideProjectName6').show();
                    $('#slideDesignerName6').show();

                    // $('#loaderGIF6').hide();
                },
                error: function (error2) {
                    console.log(error2);
                    console.log('Something has gone wrong');
                }
            });

            function requestingDesigner6Data(data2) {
                $('#profileImg6').attr("src", data2.projects[0].owners[1].images['276']);
                $('.designer6-name-2').text(data2.projects[0].owners[1].first_name + ' ' + data2.projects[0].owners[1].last_name);
                $('#slide-6').attr("src", data2.projects[1].covers.original);
                $('#slideProjectName6').text(data2.projects[1].name);
                $('#slideDesignerName6').text(data2.projects[0].owners[1].first_name + ' ' + data2.projects[0].owners[1].last_name);
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
                if ($('.about-overlay-container-2').css('display') !== 'none') {
                    $('.about-overlay-container-2').fadeOut(250);
                    $('.contact-overlay-container-2').css('display', 'none');
                    
                }
                else {
                    $('.about-overlay-container-2').fadeIn(250);
                    $('.about-overlay-container-2').css('display', 'block');
                    $('.contact-overlay-container-2').fadeIn(250);
                    $('.contact-overlay-container-2').css('display', 'none');
                }
                break;
            case 'contactLink':
                if ($('.contact-overlay-container-2').css('display') !== 'none') {
                    $('.contact-overlay-container-2').fadeOut(250);
                    $('.about-overlay-container-2').css('display', 'none');
                }
                else {
                    $('.contact-overlay-container-2').fadeIn(250);
                    $('.contact-overlay-container-2').css('display', 'block');
                    $('.about-overlay-container-2').fadeIn(250);
                    $('.about-overlay-container-2').css('display', 'none');
                }
                break;
            case 'closeContact':
                $('.contact-overlay-container-2').fadeOut(250);
                break;
        }
    });

    $('#contactBackground').click(function () {
        $('.contact-overlay-container-2').css('display', 'none');
    });
}

