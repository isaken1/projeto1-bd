const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

const db = require('./queries')

//Endpoints CRUD de Empregados
app.get('/empregados', db.getEmpregados)
app.post('/empregados', db.createEmpregado)
app.delete('/empregados/:id', db.deleteEmpregado)
app.put('/empregados/:id', db.updateEmpregado)

//Endpoints CRUD de Dependentes
app.get('/dependentes', db.getDependentes)

//Endpoints CRUD de Departamentos
app.get('/departamentos', db.getDepartamentos)

//Endpoints CRUD de Locais
app.get('/locais', db.getLocais)

//Endpoints CRUD de Projetos
app.get('/projetos', db.getProjetos)

app.get('/', (request, response) => {
    response.json({ info: 'A api está funcionando!' })
});

app.listen(port, () => {
    console.log(`A API está rodando na porta ${port}`)
});