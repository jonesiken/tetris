<?php
  session_start(); 
  $uri = $_SERVER['REQUEST_URI'];
  $uri = explode('/', $uri);
  $mysqli = new mysqli("localhost","noradrzo_827","3&Uf&R2p","noradrzo_827");
  require_once("php/classes/simple_html_dom.php");  
  require_once("php/classes/User.php");
  
  $requests = [
      "authUser"=>function(){return (User::authUser($_POST['email'],$_POST['pass']));},
      "getUserById"=>function(){
        if(empty($_POST['id'])) $id = $_SESSION['id']; 
        else $id = $_POST['id']; 
        return (User::getUserById($id));
      },
      "regUser"=>function(){return (User::regUser($_POST['name'],$_POST['lastname'],$_POST['email'],$_POST['pass']));
      },
      "logOut"=>function(){session_destroy(); header('Location: /auth');}
      
    ];
  
  if($uri[1] == "request"){
    foreach($requests as $request=>$handler){
      if($uri[2] == $request)
        exit($handler());
    }
  }

  if($uri[1] == ""){
    $content = file_get_contents("view/tetris.php");     
  }else if($uri[1] == "auth"){
    $content = file_get_contents("view/auth.php");
  }else if($uri[1] == "user"){
    $content = file_get_contents("view/cabinet.php");
  }else if($uri[1] == "reg")
    $content = file_get_contents("view/reg.php");
  require_once("view/template.php");    
?>