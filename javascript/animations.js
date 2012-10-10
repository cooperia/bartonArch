$(function() {
	
	//Hover Animations
	//Resource hovers
	$('.resourceButton div.tan').mouseover(function(){
		$(this).parent().parent().addClass('blackLeft').removeClass('tanLeft');
	}).mouseout(function(){
		$(this).parent().parent().addClass('tanLeft').removeClass('blackLeft');
	});
	
	$('.upLink').mouseover(function(){
		$(this).addClass('whiteText').removeClass('tanText');
	}).mouseout(function(){
		if(!$(this).hasClass('selected')){
			$(this).addClass('tanText').removeClass('whiteText');
		}
	});
	
	//Header hovers
	$('.downLink').mouseover(function(){
		$(this).addClass('whiteText').removeClass('blackText');
	}).mouseout(function(){
		$(this).removeClass('whiteText').addClass('blackText');
	});
	
	//Footer hovers
	$('#ianCooper p').mouseover(function(){
		$(this).addClass('whiteText').removeClass('blackText');
	}).mouseout(function(){
		$(this).removeClass('whiteText').addClass('blackText');
	});
	
	//Nav Box Hover Popup
	$('.rightNavBox').mouseover(function(){
		$('.rightNavBtn', this).addClass('hover');
		$('.child', this).removeClass('hidden');
	}).mouseout(function(){
		$('.rightNavBtn', this).removeClass('hover');
		if(!$('.child', this).hasClass('selected')){
			$('.child', this).addClass('hidden');
		}
	});
	
	//Minibutton Hover Black
	$('.miniButton').mouseover(function(){
		$(this).addClass('hover').removeClass('unselected');
		
	}).mouseout(function(){
		$(this).removeClass('hover');
		if(!$(this).hasClass('mSelected')){
			$(this).addClass('unselected');
		}
	});
	
	//Click Animations
	//Right Nav Click lock popup
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
	
	//Header lock white on click
	$('.header a.tanText').click(function(){
		if($('.selected').length && !$(this).hasClass('selected') ){
			selectedKiller('selected');
		}
		$(this).addClass('selected');
		
	});
	
	//Minibutton lock black on click
	$('.miniButton').click(function(){
		if($('.mSelected').length && !$(this).hasClass('mSelected') ){
			selectedKiller('mSelected');
		}
		$(this).addClass('mSelected').removeClass('unselected');
	});


	//Does what it says. Kills Selected stuff so that you can assign a new selected item.
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


