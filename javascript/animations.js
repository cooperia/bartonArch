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
		if(!$(this).hasClass('selected')){
			$(this).addClass('tanText').removeClass('whiteText');
		}
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
		if($('.selected').length && !$(this).hasClass('selected') ){
			selectedKiller('selected');
			selectedKiller('mSelected');
		}
		if(!$(this).hasClass('selected') ){
			$('div:nth-child(1)', this).addClass('mSelected').removeClass('unselected');
		}
		
		$(this).addClass('selected');	
		$('.rightNavBtn', this).addClass('selected');
		$('.child', this).addClass('selected');
		$('.miniWrapper', this).slideDown('normal', function(){
			$(this).removeClass('hidden');
		});
	});
	
	$('.header a.tanText').click(function(){
		if($('.selected').length && !$(this).hasClass('selected') ){
			selectedKiller('selected');
		}
		$(this).addClass('selected');
		
	});
	
	
	$('.miniButton').click(function(){
		if($('.mSelected').length && !$(this).hasClass('mSelected') ){
			selectedKiller('mSelected');
		}
		$(this).addClass('mSelected').removeClass('unselected');
	});

	function selectedKiller (bin){
		if(bin == 'selected'){
			if($('.selected').hasClass('upLink')){
				$('.selected').removeClass('whiteText').addClass('tanText');
			}
			else{
				$('.selected.child').addClass('hidden');
				$('.selected .miniWrapper').slideUp('normal', function(){
					$(this).addClass('hidden');
				});
			}
			$('.selected').removeClass('selected');
		}
		else{
			$('.mSelected').removeClass('mSelected').addClass('unselected');
		}
	}


});


