    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="login">
    <div class="container-fluid py-4 text-white background-size: cover;">
      <div class="col-sm-6 mx-auto p-4 text-background text-center">
        <button type="button" class="btn btn-primary btn-lg col-6" data-bs-toggle="button" autocomplete="off">Регистрация</button>
        <button onclick="document.location='/auth'" type="button" class="btn btn-primary active btn-lg col-4" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Войти</button>
          <h3>Регистрация</h3>
            <form onsubmit="sendForm(this); return false;">          
            <div class="mb-3">
              <input name="name" type="text" class="form-control" placeholder="Имя">
            </div>
            <div class="mb-3">
              <input name="lastname" type="text" class="form-control" placeholder="Фамилия">
            </div>
            <div class="mb-3">
              <input name="email" type="email" class="form-control" placeholder="E-mail">
            </div>
            <div class="mb-3">
              <input name="pass" type="password" class="form-control" placeholder="Пароль">
              <p id="info" hidden>Такой пользователь уже существует</p>              
            </div>
            <div class="mb-3">
              <input type="submit" class="form-control btn btn-primary" value="Зарегистрироваться">
            </div>
          </form>
        </div>
      </div>
    </div>

    <script>
    let info = document.getElementById("info");
      function sendForm(form){
        let formData = new FormData(form);
        fetch("/request/regUser", {
          method: "POST",
          body: formData
        }).then(response=>response.json())
          .then(function(result){
            if(result.result=="success") location.href = "/auth"
            else if (result.result == "empty_input") alert("Не все поля заполнены");
            else info.hidden = false;
        })
    }      
    </script>