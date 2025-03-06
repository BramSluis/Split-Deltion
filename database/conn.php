<?php
#make variables for the connection credentials
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'zwollemapproject';

#try catch to view if the connection was established correctly
try{
# variable for establishing the connection with the database using the credentials we made earlier
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
#setattribute to enable error reporting 
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    echo "connection failed: ". $e->getMessage(); 
}
?>
