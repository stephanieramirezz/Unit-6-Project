$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".part-three-yes").hide();
$(".Part-four-yes").hide();
$(".Last-yes").hide();

$(".yes-button").click(function() {
$(".Part-two-yes").show();
$(".start").hide();
});

$(".no-button").click(function() {
$(".Part-two-no").show();
$(".start").hide();
});

$("button").click(function() {
  $("lastImage").hide();
});

$("button").click(function() {
  $("lastImage").hide();
});

$(".choose-button1").click(function() {
$(".part-three-yes").show();
     $(".start").hide();
        $(".part-two-yes").hide();
});

$(".choose-button2").click(function() {
$(".part-three-yes").show();
     $(".start").hide();
        $(".part-two-yes").hide();
});

$(".choose-button3").click(function() {
$(".part-three-yes").show();
     $(".start").hide();
        $(".part-two-yes").hide();
});

$(".choose-button4").click(function() {
$(".part-three-yes").show();
        $(".start").hide();
        $(".part-two-yes").hide();

});

$(".choose-button5").click(function() {
$(".part-three-yes").show();
    $(".start").hide();
    $(".Part-two-yes").hide();
});

$(".Part-two-yes").click(function() {
$(".Part-four-yes").show();
    $(".start").hide();
        $(".Part-two-yes") .hide ();

});

$(".part-three-yes").click (function() {
    $(".lastImage") .hover (); 
    $(".start").hide ();
     $(".part-three-yes").hide();
    $(".Part-two-yes") .hide ();
      });

$(".part-three-yes").css("background-color","blue");
$(".Part-two-no").css("background-color","lightblue");
$(".lastImage").attr("src","https://www.alternateending.com/wp-content/uploads/2019/12/1DfcGAQ4EVIZFnveo1IzHFtgFTS-1024x575.jpg");


