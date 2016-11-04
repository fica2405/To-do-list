<!DOCTYPE HTML>
<html>

<head>
	<meta charset="utf-8">
	<title>>projektni zadatak</title>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/script.js"></script>
		

</head>

<body>
  <div class="login" id="loginForma">
	<form method="post">
		
		<h1 class="title">PRIJAVA</h1>
		<label id="lbl">Korisničko ime</label>
		<input type="text" id="usern" name="username" onfocus="BarUserColor();" onfocusout="BarUserColorOut();" value="">
		<div class="baruser" id="baru"></div>
		<label id="lbl1">Lozinka</label>
		<input type="password" id="passw" name="password" onfocus="BarPassColor();" onfocusout="BarPassColorOut();"value="">
		<div class="barpass" id="barp"></div>
		
		<input type="submit" value="Prijavi se" id="loginbtn" name="loginbtn">
		<div class="registracija"> 
		
		<label id="register" onclick="Registracija();">Registruj se </label> &nbsp &bull; 
		<label id="forgot" onclick="Forgot();"> &nbsp Zaboravili ste lozinku?</label>
		</div>
	</form>
	
	<div class="registerForm"  id="regform">
	<form method="post" action="register.php">
		
		<h1 class="title">REGISTRACIJA</h1>
		<label id="lbl2">Korisničko ime</label>
		<input type="text" id="usern1" name="username" onfocus="BarRegUserColor();" onfocusout="BarRegUserColorOut();" value="">
		<div class="baruser" id="baru1"></div>
		<label id="lbl12">Lozinka</label>
		<input type="password" id="passw1" name="password" onfocus="BarRegPassColor();" onfocusout="BarRegPassColorOut();"value="">
		<div class="barpass" id="barp1"></div>
		<input type="submit" value="Registruj se" id="loginbtn" name="regisracija1">
		<div class="prijava"> 
		<label id="register" onclick="Nazad();">Nazad</label> 
		
		</div>
	</form>
	
  </div>
  
  	<div class="forgotForm" id="forgotForm">
	<form method="post">
		
		<h1 class="titleForgot">ZABORAVILI STE LOZINKU?</h1>
		<label id="lbl3">Korisničko ime</label>
		<input type="text" id="usern2" name="username2" onfocus="BarRegUserColor();" onfocusout="BarRegUserColorOut();" value="">
		<div class="baruserForgot" id="baru2"></div>
		<input type="submit" value="Pošalji" id="loginbtn">
		<div class="prijava"> 
		<label id="register" onclick="Nazad1();">Nazad</label> 
		
		</div>
	</form>
	
  </div>
  


  
  
  
</body>


</html>

<?php
session_start();
include_once 'includes/connectdb.php';

$admin="admin";

if(isset($_SESSION['user'])!="")
{	

 header("Location: menu.php?sve&podatumu1");
}
 

if(isset($_POST['loginbtn']))
{
 $user = $_POST['username'];
 $pass = $_POST['password'];
 $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username"); 
 $stmt->bindParam(':username', $user, PDO::PARAM_STR);
 $stmt->execute();
 
 $result = $stmt -> fetchAll();
 $logged=false;
 foreach( $result as $row ) {
	
	 if ($row['password']== $pass)
	 { 
		$logged=true;
		 $_SESSION['user'] = $row['username'];
		  $_SESSION['role'] = $row['role'];
		 
			 header("Location: menu.php?sve&podatumu1"); 
		 }
		 
		 
	 	else {
		 
		
	 }	 
	
}

if($logged==false)
{
	echo "Neipravni podaci";
	
}

 
}
?>

