$(function() {
	$(".resourceButton").mouseover(function(){
		$(this).addClass("blackLeft").removeClass("tanLeft");
	}).mouseout(function(){
		$(this).addClass("tanLeft").removeClass("blackLeft");
	});
	
	$(".upLink").mouseover(function(){
		$(this).addClass("whiteText").removeClass("tanText");
	}).mouseout(function(){
		$(this).addClass("tanText").removeClass("whiteText");
	});


});


