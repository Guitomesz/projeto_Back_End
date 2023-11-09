const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cisca1998!",
    database: "bancoBackEnd"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("A conexão foi um sucesso!");
    const tabelaAluno = "CREATE TABLE aluno (idAluno INT AUTO_INCREMENT PRIMARY KEY, nomeAluno VARCHAR(255), turmaAluno VARCHAR(255), turnoAluno VARCHAR(255))";
    const tabelaProfessor = "CREATE TABLE professor (idProfessor INT AUTO_INCREMENT PRIMARY KEY, nomeProfessor VARCHAR(255),disciplinaProfessor VARCHAR(255), turmaProfessor VARCHAR(255), turnoProfessor VARCHAR(255))";
    const tabelaTurma = "CREATE TABLE turma (idTurma INT AUTO_INCREMENT PRIMARY KEY, idAluno INT, idProfessor INT, FOREIGN KEY (idAluno) REFERENCES aluno(idAluno), FOREIGN KEY (idProfessor) REFERENCES professor(idProfessor))";
    con.query(tabelaAluno, function (err, result) {
        if (err) {
            console.error("Erro na criação da tabela de aluno\n" + err);
        } else {
            console.log("A tabelaAluno foi criada com sucesso!");
        }
    });

    con.query(tabelaProfessor, function (err, result) {
        if (err) {
            console.error("Erro na criação da tabela de professor\n" + err);
        } else {
            console.log("A tabelaProfessor foi criada com sucesso!");
        }
    });
    con.query(tabelaTurma, function (err, result) {
        if (err) {
            console.error("Erro na criação da tabela de turma\n" + err);
        } else {
            console.log("A tabelaTurma foi criada com sucesso!");
        }
    });
});