const express = require('express');
const { json, urlencoded } = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const swaggerDocument = require('./swagger.json');
const db = require('./queries');

const app = express();

const port = 3000;

app.use(json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Accept', 'application;json')
  next();
});

app.use(
  urlencoded({
    extended: false,
  }),
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Endpoints CRUD de Empregados.
app.get('/empregados', db.getEmpregados);
app.get('/empregados/:id', db.getEmpregadoById);
app.post('/empregados', db.createEmpregado);
app.delete('/empregados/:id', db.deleteEmpregado);
app.put('/empregados/:id', db.updateEmpregado);

// Endpoints CRUD de Dependentes.
app.get('/dependentes/:id', db.getDependentesByEmpregado);
app.get('/dependentes', db.getDependentes);
app.post('/dependentes', db.createDependente);
app.delete('/dependentes/:id/:nome', db.deleteDependente);
app.put('dependentes/:id/:nome', db.updateDependente);

// Endpoints CRUD de Departamentos.
app.get('/departamentos/:id', db.getDepartamentoById);
app.get('/departamentos', db.getDepartamentos);
app.post('/departamentos', db.createDepartamento);
app.delete('/departamentos/:id', db.deleteDepartamento);
app.put('/departamento/:id', db.updateDepartamento);

// Endpoints CRUD de Locais.
app.get('/locais/:id', db.getLocaisByDepartamento);
app.get('/locais', db.getLocais);
app.post('/locais', db.createLocal);
app.delete('/locais/:departamento/:nome', db.deleteLocal);

// Endpoints CRUD de Projetos.
app.get('/projetos/:id', db.getProjetoById);
app.get('/projetos', db.getProjetos);
app.post('/projetos', db.createProjeto);
app.put('/projetos/:id', db.updateProjeto);
app.delete('/projetos/:id', db.deleteProjeto);

// Endpoint para delegar um empregado a um projeto com determinada carga horária.
app.post('/delegar', db.delegarEmpregadoProjeto);

app.get('/', (request, response) => {
  response.json({ info: 'A API está funcionando!' });
});

app.listen(port, () => {
  console.log(`A API está rodando na porta ${port}`);
  console.log('Para ver a documentação da API, entre em localhost:3000/api-docs');
});
