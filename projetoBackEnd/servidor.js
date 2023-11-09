const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const bd = require('./dados');

app.use(express.static('public'));
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

let alunos = [];
let turmas = [];


app.get('/alunos', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (alunos.length === 0) {
        alunos = bd.carregarDadosAlunos();
    }
    const resp = JSON.stringify(alunos);
    res.end(resp);
});

app.post('/alunos', function (req, res) {
    console.log(req.body);
    alunos.push(req.body);

    bd.salvarDadosAlunos(alunos, function () {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('{ "Mensagem": "Alunos carregados com sucesso!" }');
    });
});

app.get('/turmas', function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    if (turmas.length === 0) {
        turmas = bd.carregarDadosTurmas();
    }
    const resp2 = JSON.stringify(turmas);
    res.end(resp2);
});

app.post('/turmas', function (req, res) {
    console.log(req.body);
    turmas.push(req.body);

    bd.salvarDadosTurmas(turmas, function () {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('{ "Mensagem": "Turmas carregadas com sucesso!" }');
    });
});

const server = app.listen(3000, function () {

    // const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://localhost:%s", port);

});

