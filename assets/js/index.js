let button = document.querySelector(".button-exit");
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.querySelector("#logado");

logado.innerHTML = `Bem vindo, ${userLogado.nome}.`;

if(localStorage.getItem('token') == null) {
    alert('Voce precisa estar logado para acessar essa pagina');
    window.location.href = 'login.html';
}

button.addEventListener("click", ()=> {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = 'login.html';
});