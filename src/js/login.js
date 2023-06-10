export function logar(){
    var loginEmail = document.getElementById("loginEmail");
    var loginSenha = document.getElementById("loginSenha");
    var alerta = document.querySelector(".alert");

    loginEmail.classList.remove("is-invalid");
    loginSenha.classList.remove("is-invalid");
    alerta.classList.add("d-none");

    if(loginEmail.value == ""){
        loginEmail.classList.add("is-invalid");
        loginEmail.focus();
        return false;
    }

    if(loginSenha.value == ""){
        loginSenha.classList.add("is-invalid");
        loginSenha.focus();
        return false;
    }if(loginEmail.value == "adotante@pethub.com" && loginSenha.value == "adotante"){
        window.location.href = "/home?logado=true";
    } else if (loginEmail.value == "aca@pethub.com" && loginSenha.value == "aca"){
        window.location.href = "/home-aca";
    } else {
        alerta.classList.remove("d-none");    
    } 
    return false;
}