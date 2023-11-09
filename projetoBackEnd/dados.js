const fs = require('fs');

const bd = {
    carregarDadosAlunos: function () {
        const dadosAlunos = String(fs.readFileSync(__dirname + '/dadosAlunos.csv'));
        const linhasAlunos = dadosAlunos.split('\n');
        const registrosAlunos = [];
        for (let index = 0; index < linhasAlunos.length; index++) {
            const reg = linhasAlunos[index];
            if (reg === '') {
                continue;
            }
            const campos = reg.split(';');
            registrosAlunos.push(
                {
                    idAluno: parseInt(campos[0]),
                    nomeAluno: campos[1],
                    turmaAluno: campos[2],
                    turnoAluno: campos[3]
                }
            );
        }
        return registrosAlunos;
    },

    salvarDadosAlunos: function (escola, callback) {

        callback();
    },

    carregarDadosTurmas: function () {
        const dadosTurmas = String(fs.readFileSync(__dirname + '/dadosTurmas.csv'));
        const linhasTurmas = dadosTurmas.split('\n');
        const registrosTurmas = [];
        for (let index = 0; index < linhasTurmas.length; index++) {
            const reg = linhasTurmas[index];
            if (reg === '') {
                continue;
            }
            const campos = reg.split(';');
            registrosTurmas.push(
                {
                    idTurma: parseInt(campos[0]),
                    idDisciplina: campos[1],
                    idProfessor: campos[2],
                    turnoProfessor: campos[3]
                }
            );
        }
        return registrosTurmas;
    },

    salvarDadosTurmas: function (escola, callback) {

        callback();
    }

}

module.exports = bd;