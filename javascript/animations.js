$(function() {
	//Hover Animations
	
	$('.resourceButton').mouseover(function(){
		$(this).addClass('blackLeft').removeClass('tanLeft');
	}).mouseout(function(){
		$(this).addClass('tanLeft').removeClass('blackLeft');
	});
	
	$('.upLink').mouseover(function(){
		$(this).addClass('whiteText').removeClass('tanText');
	}).mouseout(function(){
		$(this).addClass('tanText').removeClass('whiteText');
	});
	
	$('.downLink').mouseover(function(){
		$(this).addClass('whiteText').removeClass('blackText');
	}).mouseout(function(){
		$(this).removeClass('whiteText').addClass('blackText');
	});
	
	$('.rightNavBox').mouseover(function(){
		$('.rightNavBtn', this).addClass('hover');
		$('.child', this).removeClass('hidden');
	}).mouseout(function(){
		$('.rightNavBtn', this).removeClass('hover');
		if(!$('.child', this).hasClass('selected')){
			$('.child', this).addClass('hidden');
		}
	});
	
	//Click Animations
	
	$('.rightNavBox').click(function(){
		if($('.selected').length){
			$('.selected.child').addClass('hidden');
			$('.selected .miniWrapper').slideUp('normal', function(){
				$(this).addClass('hidden');
			});
			$('.selected').removeClass('selected');
			
		}
		$(this).addClass('selected');
		$('.rightNavBtn', this).addClass('selected');
		$('.child', this).addClass('selected');
		$('.miniWrapper', this).slideDown('normal', function(){
			$(this).removeClass('hidden');
		});
	});


});


