<?php 

	echo "ok";
	$user = $_POST['username'];
	$pass = $_POST['password'];
	
	echo $user;
	echo $pass;
	$role = "user";
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "todo";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    
    $stmt = $conn->prepare("INSERT INTO users (username, password, role) 
    VALUES (:username, :password, :role)");
    $stmt->bindParam(':username', $user);
    $stmt->bindParam(':password', $pass);
    $stmt->bindParam(':role', $role);
	
    
   
    $stmt->execute();
	   }
catch(PDOException $e)
    {
    echo "Greska: " . $e->getMessage();
    }
	$conn=null;
	header("Location: index.php"); 




?>