<?php
$q = intval($_GET['q']);

$con = mysqli_connect("localhost","root","","baby");
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");

	$sql="SELECT * FROM babynames WHERE year ='".$q."'";
	$result = mysqli_query($con,$sql);

	$output = array();
	while($row = mysqli_fetch_array($result)) {
		
		array_push($output,$row);

	}
	echo json_encode($output);

	

	
	
   


mysqli_close($con);
?>