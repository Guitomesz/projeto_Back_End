function enterAdmin() {
    // let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
    // alert("Este é o seu token: " + token);
    window.location.href = "homeAdmin.html";
}

function enterAluno() {
    // let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
    // alert("Este é o seu token: " + token);
    window.location.href = "homeAluno.html";
}

function logon() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    const userLogged = localStorage.setItem("currentUser", id);
    localStorage.getItem("currentUser").value = userLogged;

    if (id == data.login[0].id && password == data.login[0].password) {
        enterAdmin();
        alert("Seja bem-vindo, administrador " + localStorage.getItem("currentUser") + "!");
    } else if (id == data.login[1].id && password == data.login[1].password) {
        enterAluno();
        alert("Seja bem-vindo, aluno " + localStorage.getItem("currentUser") + "!");
    } else if (id == null || password == null ||
        id != data.login[0].id || password != data.login[0].password ||
        id != data.login[1].id || password != data.login[1].password ||
        id != data.login[2].id || password != data.login[2].password) {
        alert("Seu login e/ou senha não estão corretos.\nTente novamente.");
    }
}

function logout() {
    if (localStorage.getItem("currentUser") !== "") {
        alert("Você saiu, " + localStorage.getItem("currentUser"));
        window.location.href = "index.html";
        localStorage.removeItem("currentUser");
    }
}

function init() {
}

window.onload = init;
