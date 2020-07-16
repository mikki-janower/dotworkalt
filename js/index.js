$(document).ready(function(){

let listing = $('.listing');
let extender= $('.extender');

 $('#fullindex').fadeIn(200);

 $('.firstfeature').find(extender).delay(400).slideToggle(350);

 let index = true;
 let about = false;


 //function to get every listing to open up sequentially, .3s apart
/* $('.extender').each(function (i) {
         // store the item around for use in the 'timeout' function
      var $item = $(this); 
      // execute this function sometime later:
      setTimeout(function() { 
        $item.slideToggle(300)}, 300*i);
      // each element should animate half a second after the last one.
  }).delay(600); */
    
//----------------lozad is supposed to help with lazyloading, etc
var image = $('img');
image.addClass(lozad);
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

//----------------------------make extender visible on click


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

//go to case study / link when you click a listing on the index
/*var extender = $('.extender');
$('.listing').click(function(){
    let thisextender = $(this).find(extender);
    let dataLink = $(thisextender).data("link");
    if (dataLink == "0"){
    } else if ($(thisextender).data("target") == "_blank") {
        window.open(dataLink);
    } else {
        window.location.href = dataLink;
    }
}); */

//--------------------------------------------------------------------------------index page turns
//----------------------------------------about

$(".about").click(function () {

    if (about == false) {
        //---------------show about
        $("#about").slideToggle(250);
        $("#about img").css("display", "block");
        about = true;

    } else {
        $("#about").slideUp(250);
        about = false;
    }

    $('html,body').animate({
        scrollTop: $("#about").offset().top - 80
     });
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