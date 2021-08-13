<!doctype html>
<html lang="ru">
  <head>
    <!-- Обязательные метатеги -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/750282b7c8.js" crossorigin="anonymous"></script>    

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Online Tetris</title>
    <style>
        body {
            background: url(/img/логин.png);
    }
        .text-background{
            background: rgba(0,0,0,0.5);
    }
    </style>
  </head>
    <body>
        <nav class="navbar navbar-expand-lg" id="mainNav">
            <div class="container px-4 px-lg-5">
               <a class="navbar-brand fs-2 text-white" href="/">Online Tetris</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Меню
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item fs-5"><a class="nav-link px-lg-3 py-3 py-lg-4 text-white" href="/">Главная</a></li>
                        <li class="nav-item fs-5"><a class="nav-link px-lg-3 py-3 py-lg-4 text-white" href="/reg">Мой профиль</a></li>
                        <li class="nav-item fs-5"><a class="nav-link px-lg-3 py-3 py-lg-4 text-white" href="/request/logOut">Выход</a></li>                        
                    </ul>
                </div>
            </div>
        </nav>
    <?= $content; ?>
  </body>
</html>