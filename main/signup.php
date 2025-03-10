<?php
// $servername = "localhost";
// $username = "root";
// $pass = "";
// $dbname = "zwollemapproject";

// $conn = new mysqli($servername, $username, $pass, $dbname);

// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
include_once __DIR__ . "/../database/conn.php";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPass = $_POST["confirmPassword"];

    $checkEmail = $conn->prepare("SELECT email from users WHERE email = ?");
    $checkEmail->bind_param("s", $email);
    $checkEmail->execute();
    $checkEmail->store_result();

    if ($checkEmail->num_rows > 0) {
        echo "Email already exists";
    } else {
        if(preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $password)){
            if ($password === $confirmPass) {
                $checkUsername = $conn->prepare("SELECT username FROM users WHERE username = ?");
                $checkUsername->bind_param("s", $username);
                $checkUsername->execute();
                $checkUsername->store_result();
                if ($checkUsername->num_rows <=0) {
                    $hashPassword = password_hash($password, PASSWORD_DEFAULT);
                    $newUser = $conn->prepare("INSERT INTO users(username, email, password) VALUES(?, ?, ?)");
                    $newUser->bind_param("sss", $username, $email, $hashPassword);
    
                    if ($newUser->execute()) {
                        echo "User created successfully";
                    } else {
                        echo "Error";
                    }
                    $newUser->close();
                } else {
                    echo "This username already exists. Pls be more creative.";
                }
                $checkUsername->close();
            } else {
                echo "The passwords don't match :(";
            }
        }
        else{
            echo "Enter a more secure password plsssss.";
        }
        
    }
    $checkEmail->close();
    $conn->close();
}
?>
