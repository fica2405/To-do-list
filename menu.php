<?php

session_start();
$role=$_SESSION['role'];
$user=$_SESSION['user'];
if($role=="admin") {
	
	 header("Location: admin.php?sve&podatumu1"); 
}

include 'includes/connectdb.php';
 $user = $_SESSION['user'];
 $sortiranje;
 
 if(isset($_GET['podatumu1'])) { 
	$sortiranje="datum";
 
 }
 
  if(isset($_GET['podatumu2'])) { 
	$sortiranje="datum DESC";
 
 }
 
  if(isset($_GET['potekstu1'])) { 
	$sortiranje="tekst";
 
 }
 
  if(isset($_GET['potekstu2'])) { 
	$sortiranje="tekst DESC";
 
 }
 
 if(isset($_GET['licno'])) { 
  $v = 1;
  $stmt = $conn->prepare("SELECT * FROM todolista WHERE username = :username AND vrsta= :vrsta ORDER BY " . $sortiranje); 
  $stmt->bindParam(':username', $user, PDO::PARAM_STR);
  $stmt->bindParam(':vrsta', $v, PDO::PARAM_INT);
 } else if(isset($_GET['posao'])) { 
 $v = 2;
  $stmt = $conn->prepare("SELECT * FROM todolista WHERE username = :username AND vrsta= :vrsta ORDER BY " . $sortiranje); 
  $stmt->bindParam(':username', $user, PDO::PARAM_STR);
  $stmt->bindParam(':vrsta', $v, PDO::PARAM_INT);
 
 } else if(isset($_GET['skola'])) { 
 $v = 3;
  $stmt = $conn->prepare("SELECT * FROM todolista WHERE username = :username AND vrsta= :vrsta ORDER BY " . $sortiranje); 
  $stmt->bindParam(':username', $user, PDO::PARAM_STR);
  $stmt->bindParam(':vrsta', $v, PDO::PARAM_INT);
 
 } else {
 $stmt = $conn->prepare("SELECT * FROM todolista WHERE username = :username ORDER BY " . $sortiranje); 
 $stmt->bindParam(':username', $user, PDO::PARAM_STR);
 }
 $stmt->execute();
 
 $result = $stmt -> fetchAll();
echo "<select id='rezultati' width=0 height=0>";
 
 foreach( $result as $row ) {
	echo " <option>". "tekst=" . $row['tekst'] . ", vrsta=" . $row['vrsta'] . ", datum=" . $row['datum'] . ", id=" . $row['id'] . "krajtekstavalue" . "</option>";
	
	 	
}

echo "</select>";

$conn = null;

$logovan=false;
if(isset($_GET['id'])) {

include 'includes/connectdb.php';
$id=$_GET['id'];
 $stmt = $conn->prepare("SELECT * FROM todolista WHERE id = :id"); 
 $stmt->bindParam(':id', $id, PDO::PARAM_STR);
 $stmt->execute(); 
 $result = $stmt -> fetchAll();
foreach( $result as $row ) {
	if($user==$row['username']) {
		$logovan=true;
	} else {   
		$logovan=false;
	}
	
	 	
}
$conn=null;
}

if($logovan) {
	$id=$_GET['id'];
	
	include 'includes/connectdb.php';
	
	 $stmt = $conn->prepare("DELETE FROM todolista WHERE id = :id"); 
	 $stmt->bindParam(':id', $_GET['id'] , PDO::PARAM_INT);
	 $stmt->execute(); 
	 $conn=null;
	 header("Location: menu.php?sve&podatumu1"); 
	 
}

if(isset($_GET['tekst'])) {
	
$id=$_GET['idbroj'];
$tekst=$_GET['tekst'];

echo "id= " . $id . "</br>";
echo "tekst= " . $tekst . "</br>";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo";

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

$sql = "UPDATE `todolista` SET `tekst` = :tekst WHERE id = :id"; 

$statement = $conn->prepare($sql); 

$statement->bindValue(':id', $id);

 $statement->bindValue(':tekst', $tekst);

$update = $statement->execute();

$conn=null;
header("Location: menu.php?sve&podatumu1"); 
}

if(isset($_POST['tekstboks'])) {
	$tekst = $_POST["tekstboks"];
	$datum = $_POST["godina"] . "-" . $_POST["mesec"] . "-" . $_POST["dan"];
	$vrsta = $_POST["radios"];
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "todo";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    
    $stmt = $conn->prepare("INSERT INTO todolista (username, vrsta, tekst, datum) 
    VALUES (:username, :vrsta, :tekst , :datum)");
    $stmt->bindParam(':username', $user);
    $stmt->bindParam(':vrsta', $vrsta);
    $stmt->bindParam(':tekst', $_POST['tekstboks']);
	$stmt->bindParam(':datum', $datum);
    
   
    $stmt->execute();
	   }
catch(PDOException $e)
    {
    echo "Greska: " . $e->getMessage();
    }
	$conn=null;
	header("Location: menu.php?sve&podatumu1"); 

}

?>

<html>
<head>
	<meta charset="utf-8">
	<title>projektni zadatak</title>
	<link rel="stylesheet" href="css/stylehome.css">
	<link rel="stylesheet" href="css/style1.css">
	<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<script src="js/resolution.js"></script>
	<script src="js/homescript.js"></script>
	<script src="js/script2.js"></script>
	
</head>
<body bgcolor="#E9E9E9">

<div class="fixedNav" id="fixedNav">
<div class="nav">

	<div class="navtop" id="navtop"> 
		<div class="dan" id="dannn">
		<label id="dant" name="dant"></label>
		</div>
		<label id="mesec" name="mesec"></label>
		<label id="dat" name="dat"></label>
		<label id="godina" name="godina"></label>

	
	</div>

<ul>
 <li><a class="material-icons">menu</a></li>
  <li><a id="sve"href="?sve">Sve</a></a></li>
  <li><a id="licno"href="?licno">Lično</a></a></li>
  <li><a id="posao"href="?posao">Posao</a></a></li>
  <li><a id="skola"href="?skola">Škola</a></a></li>
  
  <li><a class="material-icons" >sort</a></li>
  <li><a id="podatumu1">Po datumu od najstarijeg</a></a></li>
  <li><a id="podatumu2">Po datumu od najnovijeg</a></a></li>
  <li><a id="potekstu1">Po tekstu A -> Z</a></a></li>
  <li><a id="potekstu2">Po tekstu Z -> A</a></a></li>
<li><a class="material-icons">&nbsp;</a></li>
   <div id="cal" name="cal" class="calen">

</div>

</ul>


</div>
</div>
<div class="fixedBar">
<div class="bar" id="gornjibar">
<a class="material-icons" id="addbtn" onclick="dodaj();">add</a>
<label id="pozdrav"><?php echo $user; ?></label>
<form method="post" action="logout.php">
<a href="logout.php?logout=1" class="material-icons" id="logout">person</a>
</form>
</div>

<div class="bar1" id="dodavanje">
<form method="post" action="" name="forma1">

<textarea rows="4" cols="50" id="tekstboks" name="tekstboks" ></textarea>
<label id="danDodaj" ></label>
<input type="hidden" name="dan" id="hiddenDan" value="" />
<label class="material-icons" id="danDodajv" onclick="promeniDatum(1);">expand_less</label>
<label class="material-icons" id="danDodajm" onclick="promeniDatum(2);">expand_more</label>

<label id="mesecDodaj" name="mesecDodaj">12</label>
<input type="hidden" name="mesec" id="hiddenMesec" value="" />
<label class="material-icons" id="mesecDodajv" onclick="promeniDatum(3);">expand_less</label>
<label class="material-icons" id="mesecDodajm" onclick="promeniDatum(4);">expand_more</label>

<label id="godinaDodaj" name="godinaDodaj">2016</label>
<input type="hidden" name="godina" id="hiddenGodina" value="" />
<label class="material-icons" id="godinaDodajv" onclick="promeniDatum(5);">expand_less</label>
<label class="material-icons" id="godinaDodajm" onclick="promeniDatum(6);">expand_more</label>

<input type="radio" id="radio1" name="radios" value="1" checked>
   <label for="radio1" id="r1">Lično</label>
<input type="radio" id="radio2" name="radios"value="2">
   <label for="radio2" id="r2">Posao</label>
<input type="radio" id="radio3" name="radios" value="3">
   <label for="radio3" id="r3">Škola</label> 
<input type="submit" id="sub" class="material-icons" value="check"> 

</form>

</div>

</div>

<div class="content" id="sadrzajk">

</div>


</body>


</html>


<script>

datum();
calendar();

dodajsve();
linkovi();
rezolucija();

window.addEventListener("resize", rezolucija);
</script>



