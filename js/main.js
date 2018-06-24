$(document).ready(function() {

// #5 
$("#hide").click(function() {
 $("img").hide();
});
  
$("#show").click(function() {
 $("img").show();
});

// #6
$("#toggle").click(function () {
	$("img").toggle();
});

// #9
$("#fade").click(function() {
	$("img").toggleClass("fade");
});

// #10
$("img").hover(function() {
	$("img").attr("src", "img/superpower.jpg");
}, //Bonus #3
function () {
$("img").attr("src", "img/coding.png");
});

// #12
$("#clickMe").click(function() {
 	$("#list").append("<li>Sup</li>");
});

// #14
$("#final").click(function() {
	$("body").append("<div id='overlay'></div>");
});

});