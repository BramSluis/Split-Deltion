<?php
#make variables for the connection credentials
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'zwollemapproject';


# variable for establishing the connection with the database using the credentials we made earlier
$conn = new mysqli($servername, $username, $password, $dbname);

if($conn ->connect_errno){
    echo "failed to connect to mysql: " . $conn ->connect_error;
    exit();
}
?>
