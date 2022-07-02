$(document).ready(function(){
     $("a").click(function (event) {
         event.preventDefault();
         var id  = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500);
     });
     $('.rev_slider').slick({
      
     });
 });
