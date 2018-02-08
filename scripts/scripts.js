$(document).ready(function(){
    // Nav-Icon Animation
  $('#nav-icon').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 400);
    $(this).toggleClass('open');
  });

});