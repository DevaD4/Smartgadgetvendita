$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $('.nav-responsive').addClass('fix-nav');
    }
    else{
        $('.nav-responsive').removeClass('fix-nav');
    }
});