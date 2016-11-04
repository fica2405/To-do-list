<?php
include 'includes/connectdb.php';


if (isset($_POST["username"]) && !empty($_POST["username"]) && isset($_POST["password"]) && !empty($_POST["password"])) {
$user = $_POST["username"];
$pass = $_POST["password"];
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT * FROM users WHERE username = :username AND password = :password"); 
$stmt->bindParam(':username', $user, PDO::PARAM_STR);
$stmt->bindParam(':password', $pass, PDO::PARAM_STR);
$stmt->execute();

          
$result = $stmt -> fetchAll();

/* foreach( $result as $row ) {
	
	echo $row['username']. "<br>";
	echo $row['password'] . "<br>";
	echo $row['role'] . "<br>";
		 
	 echo "OK";
} */


 } else {
	echo "Unesite podatke";
}


?>