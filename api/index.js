import express from 'express';
import { json, urlencoded } from 'body-parser';

import db from './queries';

const app = express();

const port = 3000;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  }),
);

// Endpoints CRUD de Empregados
app.get('/empregados', db.getEmpregados);
app.post('/empregados', db.createEmpregado);
app.delete('/empregados/:id', db.deleteEmpregado);
app.put('/empregados/:id', db.updateEmpregado);

// Endpoints CRUD de Dependentes
app.get('/dependentes', db.getDependentes);
app.post('/dependentes', db.createDependente);
app.delete('/dependentes/:id/:nome', db.deleteDependente);
app.put('dependentes/:id/:nome', db.updateDependente);

// Endpoints CRUD de Departamentos
app.get('/departamentos', db.getDepartamentos);
app.post('/departamentos', db.createDepartamento);
app.delete('/departamento/:id', db.deleteDepartamento);
app.put('/departamento/:id', db.updateDepartamento);

// Endpoints CRUD de Locais
app.get('/locais', db.getLocais);
app.post('/locais', db.createLocal);
app.delete('/locais/:departamento/:nome', db.deleteLocal);

// Endpoints CRUD de Projetos
app.get('/projetos', db.getProjetos);
app.post('/projetos', db.createProjeto);
app.put('/projetos/:id', db.updateProjeto);
app.delete('/projetos/:id', db.deleteProjeto);

app.get('/', (request, response) => {
  response.json({ info: 'A API está funcionando!' });
});

app.listen(port, () => {
  console.log(`A API está rodando na porta ${port}`);
});
