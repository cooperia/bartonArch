<?php
switch($_GET['section']){
	case 'bio':
	?>
	<div class="textWrap">
		<p>I am a hard working, critical thinker who finds beauty in the complexity of architectural design. Although unaware of architecture as a profession until high school, I've been interested in the field since childhood. I grew up in rural eastern Washington, in a small university town surrounded by farmland extending to the horizon. The region's high-desert climate brings four distinct seasons and yearly temperature swings of up to 100 degrees. This is how I first came to appreciate man's ability to build. This fascination with buildings and the ways we live on the land and with the climates only grew as I traveled around North America, Europe, and Asia. A defining experience in a summer architecture program for high school students led me to the decision to pursue architecture as a career. The following year I designed a live/work artist's gallery for my high school senior project and enrolled in the University of Oregon's Bachelor of Architecture program.</p>

	<p>At Oregon, I tried to learn as much as I could about the wide-ranging aspects of architecture. I took several history, planning, and urban design classes, helped carry out a POE, and completed design studios that included a kinetic roof covering a pedestrian shopping alley, a small neighborhood community center, a nine-story urban museum, mid-rise urban schools, a three-screen cinema building that incorporated restaurants and student housing, and, in collaboration with landscape architecture students, the revitalization of a 26-acre capped landfill into a mixed-use neighborhood. I learned how buildings can (and should) respond to their climates to reduce energy use, and to their community contexts to promote social well-being.</p>

	<p>After graduating in the summer of 2011, I moved to a city rich with architectural history—Chicago. I seek employment where I can build upon my educational foundation, gain experience in the professional world of architecture, and continue to grow as a designer.</p>
	
	</div>
	<?
		break;
	case 'philo':
	?>
	<div class="textWrap">
		<p>In addition to meeting urban, social, and clients' functional needs, a building should provide an engaging environment that will never bore the user.</p>
		
		<p>A building's character should be easily recognizable and at the same time restrained through simplicity and clarity of organization. Good building design should allow artistic complexity, but the place must still be comprehendible by its inhabitants.</p>
		
		<p>We are in an age where sustainability on many fronts is very important. The longevity of a building is determined by its ability to continuously intrigue its users, provide positive social environments, perform its programmatic functions, and care for the environment. </p>
		<br/>
		<br/>
		<figure><img  id="philoImage" src="images/philoimage.jpg" ></figure>
	</div>
	<?
	//PCI
		break;
		case 'PCI':
		switch($_GET['id']){
			case '1':
	?>
	<div class="contentFull">
		<figure><img src="images/PCI1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/PCI2.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//VFS
		break;
		case 'VFS':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/VFS1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/VFS2.jpg" ></figure>
	</div>
	<?
		break;
		case '3':
	?>
	<div class="contentFull">
		<figure><img src="images/VFS3.jpg" ></figure>
	</div>
	<?
		break;
		case '4':
	?>
	<div class="contentFull">
		<figure><img src="images/VFS4.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//MUNE
		break;
		case 'MUNE':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/MUNE1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/MUNE2.jpg" ></figure>
	</div>
	<?
		break;
		case '3':
	?>
	<div class="contentFull">
		<figure><img src="images/MUNE3.jpg" ></figure>
	</div>
	<?
		break;
		case '4':
	?>
	<div class="contentFull">
		<figure><img src="images/MUNE4.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//LLC
		break;
		case 'LLC':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/LCC1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/LCC2.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//TERM
		break;
		case 'TERM':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/UBC1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/UBC2.jpg" ></figure>
	</div>
	<?
		break;
		case '3':
	?>
	<div class="contentFull">
		<figure><img src="images/UBC3.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//WSU
		break;
		case 'WSU':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/Revit_SolarDecathlon1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/Revit_SolarDecathlon2.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//HAUS
		break;
		case 'HAUS':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/MinimalDwelling1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/MinimalDwelling2.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//KIN
		break;
		case 'KIN':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/KineticRoof1.jpg" ></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/KineticRoof2.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
	//ENC
		break;
		case 'ENC':
		switch($_GET['id']){
			case '1':
	?>	
	<div class="contentFull">
		<figure><img src="images/Enclosures1.jpg"></figure>
	</div>
	<?
		break;
		case '2':
	?>
	<div class="contentFull">
		<figure><img src="images/Enclosures2.jpg" ></figure>
	</div>
	<?
		break;
	?>
	<?
}
?>
	<?
		break;
	?>
	<?
}
?>
	