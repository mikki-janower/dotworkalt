$(document).ready(function(){
 $('#fullindex').fadeIn(200);
 $('.firstfeature').find(".extender").delay(400).slideToggle(350);
 //$('.secondfeature').find(".extender").delay(700).slideToggle(250);
 /*$('.listing').each(function(){
    $('.extender').slideDown(350)
 });*/
 let index = true;
 let about = false;
 let extended= false;

 //function to get every listing to open up sequentially, .3s apart
/* $('.extender').each(function (i) {
         // store the item around for use in the 'timeout' function
      var $item = $(this); 
      // execute this function sometime later:
      setTimeout(function() { 
        $item.slideToggle(300)}, 300*i);
      // each element should animate half a second after the last one.
  }).delay(600); */
 
  $(".listing").css('position', 'relative').click(function () {
    if($(this).offset().top == -250) {
         $(this).animate({'top': '0px'}, 1000);
    }
    else {
         $(this).animate({'top': '-250px'}, 1000);
    }
});
    
//lozad is supposed to help with lazyloading, etc
var image = $('img');
image.addClass(lozad);

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//----------------------------make extender visible on click
var minilisting = $('.mini');
var fulllisting = $('.full');
var extender = $('.extender');
var listing = $('.listing')

/*$(listing).click(function(){
    //label all extenders "other" except for the selected one
    $(extender).removeClass('thisextender').addClass('otherextender');
    $(minilisting).removeClass('thislisting');
    $(this).find(extender).removeClass('otherextender').addClass('thisextender');

    //get rid of all "other" elements
  //  $('.otherextender').slideUp(250);
    //toggle selected element
    $('.thisextender').slideToggle(250);
}); */

$(listing).hover(function(){
    $(this).find('.extender');
});

//if there's a full case study, to go it on click
$('.listing').click(function(){
    let thisextender = $(this).find(extender);
    let dataLink = $(thisextender).data("link");
    if (dataLink == "0"){
    } else if ($(thisextender).data("target") == "_blank") {
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