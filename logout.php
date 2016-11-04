<?php
session_start();

if(!isset($_SESSION['user']))
{
 header("Location: index.php");
}
else if(isset($_SESSION['user'])!="")
{
 header("Location: menu.php?sve&podatumu1");
}

if(isset($_POST['logout']))
{
 session_destroy();
 unset($_SESSION['user']);
  unset($_SESSION['role']);
 header("Location: index.php");
}

if(isset($_GET['logout']))
{
 session_destroy();
 unset($_SESSION['user']);
  unset($_SESSION['role']);
 header("Location: index.php");
}
?>