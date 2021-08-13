    <div class="login">
        <div class="container py-4  background-size: cover;">
            <div class="p-4 text-background">
                <div class="col-sm-3 text-center"></div>
                    <h2 class="text-center text-white ">Мой профиль</h2><br>
                    <p class="fs-4 text-center text-white">Имя: <span id="userName"></span><br>
                    Фамилия: <span id="lastname"></span><br>
                    ID: <span id="userId"></span> <br>
                    E-mail: <span id="email"></span></p>
            </div>
        </div>
    </div>

    <script>
      function getUserData(){
        fetch("/request/getUserById")
        .then(response=>response.json())
        .then(result=>{
          userName.innerText = result.name;
          lastname.innerText = result.lastname;
          userId.innerText = result.id;
          email.innerText = result.email;
        })
      }
      getUserData();
    </script>   