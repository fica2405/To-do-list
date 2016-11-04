
<html>
<head>
	<meta charset="utf-8">
	<title>>projektni zadatak</title>
	<link rel="stylesheet" href="css/style1.css">
	<script src="js/homescript.js"></script>
</head>
<body>
 
<ul class="navigation">
    <li class="nav-item"><a href="#">Home</a></li>
  
</ul>


<input type="checkbox" id="nav-trigger" class="nav-trigger" />
<label for="nav-trigger"></label>
<button class="logoutbtn">Odjavi se</button>

<div class="sadrzaj">
   
 
</div>

	 


  
 <!-- 
<div class="novi"> 
<form method="post">
	<textarea cols="40" rows="5" name="tekst" id="tekst"> </textarea>
	<input type="date" name="datum" id="datum">
	<input type="submit" value="Dodaj" name="add">
	</form>
</div>-->
 


     
</body>




</html>


<?php
session_start();
$role=$_SESSION['role'];

if($role=="admin") {
	
	 header("Location: admin.php"); 
}

include 'includes/connectdb.php';
 $user = $_SESSION['user'];
 $stmt = $conn->prepare("SELECT * FROM todolista WHERE username = :username"); 
 $stmt->bindParam(':username', $user, PDO::PARAM_STR);
 $stmt->execute();
 
 $result = $stmt -> fetchAll();
 $logged=false;
 foreach( $result as $row ) {
	
/* 	echo "<label id='task'>" . $row['tekst'] . " - " . $row['datum'] . "</label> </br>";
 */	 	
}

$conn = null;

if(isset($_POST['add'])) {

$tekst = $_POST["tekst"];
$datum = $_POST["datum"];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    
    $stmt = $conn->prepare("INSERT INTO todolista (username, tekst, datum) 
    VALUES (:ime, :prezime, :starost)");
    $stmt->bindParam(':ime', $user);
    $stmt->bindParam(':prezime', $tekst);
    $stmt->bindParam(':starost', $datum);

    
   
    $stmt->execute();

    

    echo "Novi zaposlen je dodat";
    }
catch(PDOException $e)
    {
    echo "Greska: " . $e->getMessage();
    }
$conn = null;




}

?>