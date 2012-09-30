$().ready(function(){
	setInterval("checkAnchor()", 300);
});
var currentAnchor = null;
function checkAnchor(){
	if(currentAnchor != document.location.hash){
		currentAnchor = document.location.hash;
		if(!currentAnchor)
			query = "section=bio";
		else
		{
			var splits = currentAnchor.substring(1).split('&');
			var section = splits[0];
			delete splits[0];
			var params = splits.join('&');
			var query = "section=" + section + params;
		}
		//Send the petition
		$.get("content.php", query, function(data){
			$('#contentWrapper').fadeOut(300, function(){
				$('#loading').fadeIn(300);
				$("#contentWrapper").html(data);
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