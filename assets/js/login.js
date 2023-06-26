let btn = document.querySelector('#showPassword');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password');

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    }else {
        inputSenha.setAttribute('type', 'password');
    }
});

function entrar(event) {
    event.preventDefault();

    let usuario = document.querySelector("#user");
    let userLabel = document.querySelector("#userLabel");

    let senha = document.querySelector("#password");
    let senhaLabel = document.querySelector("#passwordLabel");

    let msgError = document.querySelector("#msgError");
    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value === item.userCad && senha.value === item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    if(usuario.value === userValid.user && senha.value === userValid.senha) {
        window.location.href = 'home.html';

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));
    }else {
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red'); 
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário ou senha incorretos';
        usuario.focus();
    }
}