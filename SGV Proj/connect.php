<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "ecom";
 
$con = mysqli_connect($server,$username,$password,$dbname);

if(isset($_POST['submit']))
   {
       if(!empty($_POST['firstName']) && !empty($_POST['lastName']) && !empty($_POST['email']) && !empty($_POST['number']) && !empty($_POST['feedBack']))
       {
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $feedBack = $_POST['feedBack'];

        $query =  "insert into feedback(firstName,lastName,email,number,feedBack) values('$firstName','$lastName','$email','$number','$feedBack')";

        $run = mysqli_query($con,$query) or die(mysqli_error());

        if($run){
            echo "Form Submitted Successfully";
        }
        else{
            echo "Form not Submitted";
        }

       }
       else{
           echo "all fields required";
       }
}

?>