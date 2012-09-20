$(function() {
	//Hover Animations
	
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
	
	$(".downLink").mouseover(function(){
		$(this).addClass("whiteText").removeClass("blackText");
	}).mouseout(function(){
		$(this).removeClass("whiteText").addClass("blackText");
	});
	
	$(".rightNavBtn").mouseover(function(){
		$(this).addClass("hover");
		$('div.child', this).removeClass("hidden");
	}).mouseout(function(){
		$(this).removeClass("hover");
		$('div.child', this).addClass("hidden");
	});


});


