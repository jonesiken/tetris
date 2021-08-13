<?php

  $mysqli = new mysqli("localhost","noradrzo_827","3&Uf&R2p","noradrzo_827");
  #$query = $mysqli->query("SELECT name, lastname, score FROM `users` WHERE `score`= (SELECT MAX(`score`) FROM `users`)");
  $query = $mysqli->query("SELECT name, lastname, score FROM `users` ORDER BY `score` DESC");
  $output = '';
  while ($res = $query->fetch_assoc()) {
  	$output .= '<p>'.$res['name'].' '.$res['lastname'].': '.$res['score'].'</p>';
  }
  echo $output;

?>