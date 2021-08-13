<?php

  $name = $_GET['name'];
 
  if(empty($name)){
    exit("error");
  }
  
  $mysqli = new mysqli("localhost","noradrzo_827","3&Uf&R2p","noradrzo_827");
  $result = $mysqli->query("SELECT id FROM `users` WHERE `name`='$name'");
  if ($result->num_rows) { /*Если записи есть, то говорим, что уже существует*/
    $res = $result->fetch_assoc();
    echo $res['id'];
  } else {
    $mysqli->query("INSERT INTO users (`name`) VALUES ('$name')");
    echo $mysqli->insert_id;
  }

?>