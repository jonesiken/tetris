<?php

class User{
  static function authUser($email, $pass){
    global $mysqli;
    if(empty($email) or empty($pass)){
      return json_encode(['result'=>'empty_input']);
    }
    $result = $mysqli->query("SELECT * FROM `users` WHERE email='$email'");
    if(!$result->num_rows) return json_encode(['result'=>"not_found"]);
    $row = $result->fetch_assoc(); 
    if(password_verify($pass, $row['pass'])){ 
      $_SESSION['name'] = $row['name'];
      $_SESSION['lastname'] = $row['lastname'];
      $_SESSION['email'] = $row['email'];
      $_SESSION['id'] = $row['id'];
      return json_encode(['result'=>"success"]);
    }else{
      return json_encode(['result'=>"error"]);
    }
  }
  static function getUserById($id){
    global $mysqli;
    $result = $mysqli->query("SELECT name, lastname, email FROM `users` WHERE id='$id'");
    $row = $result->fetch_assoc();
    $user = [];
    $user["name"] = $row['name'];
    $user["lastname"] = $row['lastname'];
    $user["email"] = $row['email'];
    $user["id"] = $id;
    return json_encode($user);
  }
  static function regUser($name, $lastname, $email, $pass){
    global $mysqli;
    if(empty($name) or empty($lastname) or empty($email) or empty($pass)){
      return json_encode(['result'=>'empty_input']);
    }
    $pass = password_hash($pass, PASSWORD_DEFAULT);
    $result = $mysqli->query("SELECT id FROM `users` WHERE `email`='$email'");
    if ($result->num_rows){ 
      return json_encode(['result'=>"exist"]);
    }else{
      $mysqli->query("INSERT INTO users (`name`, `lastname`, `email`, `pass`) VALUES ('$name','$lastname','$email','$pass')");
      return json_encode(['result'=>"success"]);
    }
  }
}

?>