function logar(){
    var loginEmail = document.getElementById("loginEmail");
    var loginSenha = document.getElementById("loginSenha");

    if(loginEmail.value == "adotante@pethub.com" && loginSenha.value == "adotante"){
        window.location.href = "/home?logado=true";
    } else if (loginEmail.value == "aca@pethub.com" && loginSenha.value == "aca"){
        window.location.href = "/home-aca";
    } else {
        alert("Usuário ou senha inválidos!");
    }

}