// Get multiple tags
var myTags = getMultipleTags(['dadaabrefugeecamp', 'kakumarefugeecamp', 'refugeesingermany', 'danskflygtningehjælp', 'syrianrefugees', 'kosrefugees', 'zaatari']);

function getMultipleTags (tags) {
    console.log("The function getMultipleTags was executed");
    var feeds = [];
    for (var i=0, len=tags.length; i < len; i++) {
        feeds.push(new Instafeed({
            get: 'tagged',
            tagName: tags[i],
            limit: 20,
            sortBy: 'most-liked',
            clientId: '30b0164c057b4e798cd3948965310b87',
            after: function () {
                var images = $("#instafeed").find('a');
                $.each(images, function(index, image) {
                var delay = (index * 75) + 'ms';
                $(image).css('-webkit-animation-delay', delay);
                $(image).css('-moz-animation-delay', delay);
                $(image).css('-ms-animation-delay', delay);
                $(image).css('-o-animation-delay', delay);
                $(image).css('animation-delay', delay);
                $(image).addClass('animated flipInX');
            });
    },
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>'
        }));
    }
    return feeds;
}

var div = document.getElementById('instafeed');

function dadaabrefugeecamp(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function dadaabrefugeecamp was executed");
    myTags[0].run();
}

function kakumarefugeecamp(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function kakumarefugeecamp was executed");
    myTags[1].run();
}

function refugeesingermany(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function refugeesingermany was executed");
    myTags[2].run();
}

function DFH(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function DFH was executed");
    myTags[3].run();
}

function syria(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function Syria was executed");
    myTags[4].run();
}

function kos(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function kos was executed");
    myTags[5].run();
}

function zaatari(){
    document.getElementById("instafeed").innerHTML = '';
    console.log("The function Zaatari was executed");
    myTags[6].run();
}