$().ready(function(){
	//Checks to see if there is an anchor every so often. 
	setInterval("checkAnchor()", 300);
});
var currentAnchor = null;
function checkAnchor(){
	if(currentAnchor != document.location.hash){
		currentAnchor = document.location.hash;
		//If no anchor, bio
		if(!currentAnchor)
			query = "section=bio";
		else
		{
			//Some string handling
			var splits = currentAnchor.substring(1).split('&');
			var section = splits[0];
			delete splits[0];
			var params = splits.join('&');
			var query = "section=" + section + params;
		}
		//Request Content
		$.get("content.php", query, function(data){
			$('#contentWrapper').fadeOut(300, function(){
				//Show loading
				$('#loading').fadeIn(300);
				$("#contentWrapper").html(data);
				//Depending on what we are loading, handle differently but essentially hide loading after loading is done and display new content
				if(section == 'bio' || section == 'philo' || query == "section=bio"){
					$('#loading').fadeOut(300, function(){
						$('#contentWrapper').fadeIn(300);
					});
					
				}
				else{
					$("#contentWrapper img").bind('load', function(){
						$('#loading').fadeOut(300, function(){
							$('#contentWrapper').fadeIn(300);
						});
					});	
				}
				
			});
			
			
		});
	}
}