<?php

  $userid = $_GET['userid'];
  $score = $_GET['score'];
 
  $mysqli = new mysqli("localhost","");
  $mysqli->query("UPDATE `users` SET `score`='$score' WHERE `id`='$userid'");

?>
