<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin : *");
$username = $_POST["username"];
$password = $_POST["password"];
$host = "localhost";
$user = "root";
$pas = "";
$conn = new mysqli($host,$user,$pas);
$conn->select_db("liqun");
$sql = "select * from users where username = '$username'";
$result = $conn->query($sql);
if($result->num_rows == 0){
	echo "1";
	$sql="insert into  users(username,password)
		values('$username','$password')";
		$conn->query($sql);
}else{
	echo "0";
}

?>