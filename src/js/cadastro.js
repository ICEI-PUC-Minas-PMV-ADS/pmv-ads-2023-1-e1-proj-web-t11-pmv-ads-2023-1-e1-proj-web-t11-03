export function cadastrar(){
    var cadastroEmail = document.getElementById("cadastroEmail");
    var cadastroNome = document.getElementById("cadastroNome");
    var cadastroSenha = document.getElementById("cadastroSenha");
    var cadastroResenha = document.getElementById("cadastroResenha");
    

    cadastroEmail.classList.remove("is-invalid");
    cadastroNome.classList.remove("is-invalid");
    cadastroSenha.classList.remove("is-invalid");

    if(cadastroEmail.value == ""){
        cadastroEmail.classList.add("is-invalid");
        cadastroEmail.focus();
        return false;
    }

    if(cadastroNome.value == ""){
        cadastroNome.classList.add("is-invalid");
        cadastroNome.focus();
        return false;
    }

    if(cadastroSenha.value == ""){
        cadastroSenha.classList.add("is-invalid");
        cadastroSenha.focus();
        return false;
    }
    
    if(cadastroSenha.value === cadastroResenha.value){
        window.location.href = "cadastro/tipo-de-conta";
    }else{
        cadastroResenha.classList.add("is-invalid");
    }


}