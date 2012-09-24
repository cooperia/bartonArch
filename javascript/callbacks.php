<?php
//Captures the petition and load the suitable section
switch($_GET['section']){
	case 'home':
	//used to simulate more waiting for load the content, remove on yor projects!
	sleep(1);
	?>
	<h1>You are at home</h1>
	<p>Wellcome to the new tutorial from <a href="http://www.yensdesign.com">yensdesign.com</a>. Enjoy it!! :)</p>
	<p><strong>Look at the URL! It changes but page doesn't reload!!</strong></p>
	<?
		break;
	case 'tutorials':
	//used to simulate more waiting for load the content, remove on yor projects!
	sleep(1);
	?>
	<h1>The tutorials section is good for your brain</h1>
	<p>This tutorial can be very very interesting in dynamic projects, play with it ;)</p>
	<?
		break;
	case 'webdesign':
		//used to simulate more waiting for load the content, remove on yor projects!
		sleep(1);
		?>
		<h1>Web design at yensdesign.com</h1>
		<p>And remember: Visit us!!! <a href="http://www.yensdesign.com">yensdesign.com</a></p>
		<?
		break;
	case 'coding':
		//used to simulate more waiting for load the content, remove on yor projects!
		sleep(1);
		?>
		<h1>Coding</h1>
		<p>Hellow World!</p>
		<?
		break;
	default:
	?>
	<h1>Unknown section</h1>
	<p>You are in an unknown section!</p>
	<?
}
?>