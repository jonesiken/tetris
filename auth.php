    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="login">
    <div class="container-fluid py-4 text-white background-size: cover;">
      <div class="col-sm-6 mx-auto p-4 text-background text-center">
        <button onclick="document.location='/reg'" type="button" class="btn btn-primary btn-lg col-6" data-bs-toggle="button" autocomplete="off">Регистрация</button>
        <button type="button" class="btn btn-primary active btn-lg col-4" data-bs-toggle="button" autocomplete="off" aria-pressed="true" href="/auth" >Войти</button>
        <p>
        </p>
          <h3>Войти в аккаунт</h3>
            <form onsubmit="sendForm(this); return false;">
            <div class="mb-3 col-6 mx-auto">
              <input name="email" type="email" class="form-control" placeholder="E-mail">
            </div>
            <div class="mb-3 col-6 mx-auto">
              <input name="pass" type="password" class="form-control" placeholder="Пароль">
                <p id="info" hidden>Логин или пароль введён неправильно</p>
            </div>
            <div class="mb-3 col-6 mx-auto">
              <input type="submit" class="form-control btn-primary" value="Войти">
            </div>
          </form>
        </div>
      </div>
    </div>

    <script>
     let info = document.getElementById("info");
      function sendForm(form){
        let formData = new FormData(form);
        fetch("/request/authUser", {
          method: "POST",
          body: formData
        }).then(response=>response.json())
          .then(function(result){
            if(result.result=="success") location.href = "/user"
            else if (result.result == "empty_input") alert("Не все поля заполнены");
            else info.hidden = false;
          })
      }   
    </script>
  </body>
</html>