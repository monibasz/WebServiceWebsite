$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    
         if($(window).scrollTop()>30){
  
  $('.header').css({'background':'#01105A','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
         }else{
           $('.header').css({'background':'none','box-shadow':'none'});
         }
      });
    //   $('.accordion-header').click(function(){
    //      $('.accordion .accordion-body').slideUp();
    //      $(this).next('.accordion-body').slideDown();
    //     $('.accordion .accordion-header span').text('+');
    //     $(this).children('span').text('-');
    //   });
    
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
    
    });
