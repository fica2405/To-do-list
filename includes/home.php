
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
