<?php

  $userid = $_GET['userid'];
  $score = $_GET['score'];
 
  $mysqli = new mysqli("localhost","noradrzo_827","3&Uf&R2p","noradrzo_827");
  $mysqli->query("UPDATE `users` SET `score`='$score' WHERE `id`='$userid'");

?>