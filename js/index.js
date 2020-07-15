$(document).ready(function(){
 $('#fullindex').fadeIn(200);
 $('.firstfeature').find(".extender").delay(350).slideToggle(250);
 //$('.secondfeature').find(".extender").delay(700).slideToggle(250);
 let index = true;
 let about = false;
 
    
//lozad is supposed to help with lazyloading, etc
var image = $('img');
image.addClass(lozad);

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//----------------------------make extender visible on click
var listing = $('.listing');
var extender = $('.extender');

$(listing).click(function(){
    //label all extenders "other" except for the selected one
    $(extender).removeClass('thisextender').addClass('otherextender');
    $(listing).removeClass('thislisting');
    $(this).find(extender).removeClass('otherextender').addClass('thisextender');

    //get rid of all "other" elements
  //  $('.otherextender').slideUp(250);
    //toggle selected element
    $('.thisextender').slideToggle(250);
});

//if there's a full case study, to go it on click
$(extender).click(function(){
    let dataLink = $(this).data("link");
    if (dataLink == "0"){
    } else if ($(this).data("target") == "_blank") {
        window.open(dataLink);
    } else {
        window.location.href = dataLink;
    }
}); 
//-----------------------------------------button hover effect

$('.listing a, .more a').hover(function(){
            $(this).css({
                "background-color": "yellow",
               "-webkit-box-shadow": "0px -1px 5px 5px yellow",
               "-moz-box-shadow": "0px -1px 5px 5px yellow",
               "box-shadow" : "0px -1px 5px 5px yellow"
            });
        });
$('.listing a, .more a').mouseout(function() {
        $(this).css({
            "background-color": "transparent",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            "box-shadow" : "none"
        });
    });
//--------------------------------------------------------------------------------index page turns
//----------------------------------------index appear

$(".about").click(function () {
    if (about == false) {
        //---------------show about
         $("#about").slideToggle(250).find('img').css("height", $("#about p").height());
         $("#about img").slideDown(250);
         $('html,body').animate({
            scrollTop: $("#about").offset().top - 80
         });

        about = true;

    } else {
        $("#about").slideUp(250);
        about = false;
    }
});

$(window).resize(function(){
    let w = $(window).innerWidth();
    if (w > 700){
        let imgheight = $('#about p').height();
        $("#about img").css("height", imgheight);
    }
});

//---------------------------------.name homepage turn
$(".name").click(function () {

    //---------------hide index
    if (index == true) {
        $("#fullindex").slideUp("200");
        index = false;
    }
    //---------------bring back homepage
    $(document).delay(300).queue(function (next) {
        window.location.href = "index.html";
        next();
    });

return false;
});

//---------------------------closing bracket don't touch bby
});