
/*$(document).ready(function(){

var token = "203265594.1677ed0.5eed8a60856d4e7eaa55311e230f523e",
    access_parameters = {
        access_token: token
};

$("#clickText").click(function(event) {
	console.log("Yay! Someone clicked on the text!");
    if (event.which == 13) {
        	event.preventDefault();
        	var p = $("#clickText").id();
        	if(p.length) {
            	console.log(p);
            	grabImages(p, 5, access_parameters);
        	}
    	}
});

function grabImages(kenya, count, access_parameters) {
    var instagramUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
    $.getJSON(instagramUrl, access_parameters, onDataLoaded);
}

function onDataLoaded(instagram_data) {
    var boxPictures = $("#boxPictures");
    if (instagram_data.meta.code == 200) {
        var photos = instagram_data.data;
        if (photos.length > 0) {
            boxPictures.empty();
            for (var key in photos) {
                var photo = photos[key];
                boxPictures.append('<img src="' + photo.images.standard_resolution.url + '">')
            }
        } else {
            console.log("no images with this tag!");
        }
    } else {
        var error = instagram_data.meta.error_message;
        console.log(error);
    }
}

});
*/

// Instafeed.js code
/*
var feed = new Instafeed({
	get: 'tagged',
	tagName: 'dadaab',
	clientId: '30b0164c057b4e798cd3948965310b87'
});


feed.run();
*/
/*
$("#clickText").click(function(event) {
    console.log("Yay! Someone clicked on the text!");
    if (event.which == 13) {
            event.preventDefault();
            var p = $("#clickText").id();
            if(p.length) {
                console.log(p);
                grabImages(p, 5, access_parameters);
            }
        }
});

// run each instance
for(var i=0, len=myTags.length; i < len; i++) {
    myTags[i].run();
}
*/

// Get multiple tags
var myTags = getMultipleTags(['kenya', 'jordan', 'ethiopia']);

function getMultipleTags (tags) {
    console.log("The function getMultipleTags was executed");
    var feeds = [];
    for (var i=0, len=tags.length; i < len; i++) {
        feeds.push(new Instafeed({
            get: 'tagged',
            tagName: tags[i],
            clientId: '30b0164c057b4e798cd3948965310b87'
        }));
    }
    return feeds;
}

function kenya(){
    console.log("The function Kenya was executed");
    myTags[0].run();
}
