<?php 

$data = json_decode(file_get_contents("php://input"),true);

if($data){
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    global $connection;
    $connection = mysqli_connect('localhost', 'root', '', 'trevor-beats');
    $name = mysqli_real_escape_string($connection, $name);
    $message = mysqli_real_escape_string($connection, $message);
    $email = mysqli_real_escape_string($connection, $email);
    if($connection){
        $query = "INSERT INTO messages(name, email, message) VALUES ('$name','$email', '$message')";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Failed');
        }
    }
    else {
        die('Query Failed');
    }
}
   
 


?>