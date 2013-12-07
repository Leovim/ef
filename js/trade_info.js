$(document).ready(function(){
  var initTarget = $('.category .active').attr("href");
  $('div[id='+initTarget.substr(1)+']').css("display", "block");
  $('.category a').bind("click", function(){
    $('.category a').removeClass("active");
    $(this).addClass("active");
    var target = $(this).attr("href");
    $('.part').css("display", "none");
    $('div[id='+target.substr(1)+']').css("display", "block");
  })
});
