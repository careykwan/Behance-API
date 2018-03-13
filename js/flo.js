getConfig();
var apiKey;

function getConfig() {
	    $.ajax({
            url: "../config.json",
            dataType: 'json',
            success: function(configData){
                apiKey = configData[0].apiKey;
               
                runApp();
                
            },
            error: function(error){
                console.log(error);
                console.log("Something has gone wrong");
            }
    });
}

function runApp() {
    console.log(apiKey);
}