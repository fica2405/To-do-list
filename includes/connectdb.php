<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo";

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
?>