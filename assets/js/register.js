//Mostrar senha
let btn = document.querySelector('#showPassword');
let btnConfirm = document.querySelector('#confirmPassword');


let nome = document.querySelector("#name");
let labelNome = document.querySelector("#labelName");
let validNome = false;

let usuario = document.querySelector("#user");
let labelUsuario = document.querySelector("#labelUser");
let validUsuario = false;

let senha = document.querySelector("#password");
let labelSenha = document.querySelector("#labelPassword");
let validSenha = false;

let confirmarSenha = document.querySelector("#confirmpassword");
let labelConfirmaSenha = document.querySelector("#labelConfirmPassword");
let validConfirmarSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

//VALIDAR CAMPOS
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Name *Insira no minimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    }else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = 'Name';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
});

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'User *Insira no minimo 5 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario = false;
    }else {
        labelUsuario.setAttribute('style', 'color: green');
        labelUsuario.innerHTML = 'User';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
});

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Password *Insira no minimo 8 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    }else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Password';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
});

confirmarSenha.addEventListener('keyup', () => {
    if(senha.value !== confirmarSenha.value) {
        labelConfirmaSenha.setAttribute('style', 'color: red');
        labelConfirmaSenha.innerHTML = 'Confirm Password *As senhas não conferem';
        confirmarSenha.setAttribute('style', 'border-color: red');
        validConfirmarSenha = false;
    }else {
        labelConfirmaSenha.setAttribute('style', 'color: green');
        labelConfirmaSenha.innerHTML = 'Confirm Password';
        confirmarSenha.setAttribute('style', 'border-color: green');
        validConfirmarSenha = true;
    }
});

//Validar botão "register" p/ saber se todos os campos foram preenchidos
function cadastrar(event) {
    event.preventDefault();
    if(validNome && validUsuario && validSenha && validConfirmarSenha) {
        //local storage
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value,
            }
        );

        localStorage.setItem('listaUser', JSON.stringify(listaUser));


        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando Usuário...</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        setTimeout(()=> {
            window.location.href = 'login.html';
        }, 3000);
        
    }else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente.</strong>';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    }else {
        inputSenha.setAttribute('type', 'password');
    }
});

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmpassword');

    if(inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text');
    }else {
        inputConfirmSenha.setAttribute('type', 'password');
    }
});

