<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "test";


$conn = mysqli_connect($server, $username, $password, $dbname);

if(isset($_POST['submit'])){


 if(!empty($_POST['firstname']) && !empty($_POST['lastname']) && !empty($POST['male']) && !empty($_POST['female']) && !empty($_POST['other']) && !empty($_POST['useremail']) && !empty($_POST['password']))
 {
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $male = $_POST['male'];
  $female = $_POST['female'];
  $other = $_POST['other'];
  $useremail = $_POST['useremail'];
  $password = $_POST['password'];


  $query = "insert into register(Firstname,Lastname,Male,Female,Other,Useremail,Password) values ('$firstname','$lastname','$male','$female','$other','$useremail','$password')";

  $run = mysqli_query($conn,$query) or die (mysqli_error());

  if($run){
   echo "Form submitted successfully";
  }
  else{
   echo"form not submitted";	
  }
 }
else{
 echo"all fields are required";
}

}




?> 