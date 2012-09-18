$(function() {
	$(".resourceButton").mouseover(function(){
		$('ul li.imgBar',this).addClass("black").removeClass("tan");
	}).mouseout(function(){
		$('ul li.imgBar',this).addClass("tan").removeClass("black");
	});
	
	$(".upLink").mouseover(function(){
		$(this).addClass("whiteText").removeClass("tanText");
	}).mouseout(function(){
		$(this).addClass("tanText").removeClass("whiteText");
	});


});


