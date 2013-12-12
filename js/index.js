$(document).ready(function(){
  $(".btn-service").bind("click", function(e){
    $(this).css("display", "none");
    $(".ticket").css("display", "block");
    $(".ticket input[name='name']").focus();
    e.stopPropagation();
  });
  $(document).bind("click", function(){
    $(".ticket").css("display", "none");
    $(".btn-service").css("display", "block");
  });
  $(".ticket").bind("click", function(e){
    e.stopPropagation();
  });

  $("#carousel-top").carousel({
    interval: 5000
  });
  $("#carousel-top").carousel('cycle');
});
