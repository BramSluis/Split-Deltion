<?php
include "main/signup.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css> "
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="text" name="username" id="username" placeholder="username">
        <input type="text" name="email" id="email" placeholder="email">
        <input type="password" name="password" id="password" placeholder="password">
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirmPassword">
        <input type="submit" value="submit">
    </form>
</body>
</html>