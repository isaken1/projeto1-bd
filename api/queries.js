import pool from './dbPool';

const getEmpregadoById = (request, response) => {
  const idEmpregado = request.params.id;

  pool.query('SELECT * FROM Empregado WHERE codigo = $1', [idEmpregado],
    (error, result) => {
      if (error) {
        response.status(500).send(error);
        console.log(error);
      }

      response.status(200).json(result.rows);
    });
};

const getEmpregados = (request, response) => {
  pool.query('SELECT * FROM Empregado ORDER BY nome',
    (error, results) => {
      if (error) {
        response.status(500).send(error);
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const createEmpregado = (request, response) => {
  const {
    nome, nomedomeio, sobrenome, codigo, dtnascimento, endereco,
    sexo, salario, gerente, departamento,
  } = request.body;

  pool.query('INSERT INTO Empregado (nome, nomedomeio, sobrenome, '
        + 'codigo, dtNascimento, endereco, sexo, salario, gerente, '
        + 'departamento) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9, $10',
  [nome, nomedomeio, sobrenome, codigo, dtnascimento, endereco,
    sexo, salario, gerente, departamento],
  (error, result) => {
    if (error) {
      response.status(500).send(error);
      console.log(error);
    }

    console.log(result);
    response.status(201).send(`Empregado criado com o ID:
                ${result.insertId}`);
  });
};

const deleteEmpregado = (request, response) => {
  const idEmpregado = parseInt(request.params.id, 10);

  pool.query('DELETE FROM Empregado WHERE codigo = $1', [idEmpregado],
    (error, result) => {
      if (error) {
        response.status(500).send(error);
        console.log(error);
      }

      console.log(result);
      response.status(200).send(`Empregado código ${idEmpregado} deletado!`);
    });
};

const updateEmpregado = (request, response) => {
  const id = parseInt(request.params.id, 10);

  const {
    nome, nomeDoMeio, sobrenome, dtNascimento,
    endereco, sexo, salario, gerente, departamento,
  } = request.body;

  pool.query('UPDATE Empregado SET nome = $1, nomedomeio = $2, '
        + 'sobrenome = $3, dtNascimento = $4, endereco = $5, sexo = $6, '
        + 'salario = $7, gerente = $8, departamento = $9 WHERE codigo = $10',
  [nome, nomeDoMeio, sobrenome, dtNascimento, endereco,
    sexo, salario, gerente, departamento, id],
  (error, result) => {
    if (error) {
      response.status(500).json(error);
      console.log(error);
    }

    console.log(result);
    response.status(200).send(`Empregado código ${id} alterado!`);
  });
};

const getDependentesByEmpregado = (request, response) => {
  const idEmpregado = request.params.id;

  pool.query('SELECT * FROM Dependente WHERE empregado = $1', [idEmpregado],
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const getDependentes = (request, response) => {
  pool.query('SELECT * FROM Dependente ORDER BY nome',
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const createDependente = (request, response) => {
  const {
    empregado, nome, sexo, dtNascimento, parentesco,
  } = request.body;

  pool.query('INSERT INTO Dependente  (nome, dtNascimento, sexo, parentesco, empregado)'
        + ' VALUES $1, $2, $3, $4, $5',
  [nome, dtNascimento, sexo, parentesco, empregado],
  (error, result) => {
    if (error) {
      response.status(500).send(error);
      console.log(error);
    }

    console.log(result);
    response.status(201).send(`Dependente criado com o ID:
                ${result.insertId}`);
  });
};

const deleteDependente = (request, response) => {
  const idEmpregado = parseInt(request.params.id, 10);
  const nomeDependente = request.params.nome;

  pool.query('DELETE FROM Dependente WHERE idEmpregado = $1 AND nomeDependente = $2',
    [idEmpregado, nomeDependente],
    (error, result) => {
      if (error) {
        response.status(500).send(error);
        console.log(error);
      }

      console.log(result);
      response.status(200).send(`Dependente ${nomeDependente} deletado!`);
    });
};

const updateDependente = (request, response) => {
  const idEmpregado = parseInt(request.params.id, 10);
  const nomeDependente = request.params.nome;

  const { sexo, dtNascimento, parentesco } = request.body;

  pool.query('UPDATE Dependente SET sexo = $1, parentesco = $2, dtNascimento = $3 '
        + 'WHERE nome = $4 AND empregado = $5',
  [sexo, parentesco, dtNascimento, nomeDependente, idEmpregado],
  (error, result) => {
    if (error) {
      response.status(500).json(error);
      console.log(error);
    }

    console.log(result);
    response.status(200).send(`Dependente ${nomeDependente} alterado!`);
  });
};

const getDepartamentoById = (request, response) => {
  const idDepartamento = request.params.id;

  pool.query('SELECT * FROM Departamento WHERE codigo = $1', [idDepartamento],
    (error, result) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      response.status(200).json(result.rows);
    });
};

const getDepartamentos = (request, response) => {
  pool.query('SELECT * FROM Departamento ORDER BY nome',
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const createDepartamento = (request, response) => {
  const {
    codigo, nome, gerente, inicioGerente,
  } = request.body;

  pool.query('INSERT INTO Departamento (codigo, nome, inicio, iniciogerente) '
        + 'VALUES ($1, $2, $3, $4)', [codigo, nome, gerente, inicioGerente],
  (error, result) => {
    if (error) {
      response.status(500).json(error);
      console.log(error);
    }

    console.log(result);
    response.status(201).send(`Departamento criado com o ID: ${result.insertId}`);
  });
};

const deleteDepartamento = (request, response) => {
  const idDepartamento = parseInt(request.params.id, 10);

  pool.query('DELETE FROM Departamento WHERE codigo = $1', [idDepartamento],
    (error, result) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      console.log(result);
      response.status(200).send(`Departamento com ID ${idDepartamento} excluído!`);
    });
};

const updateDepartamento = (request, response) => {
  const idDepartamento = parseInt(request.params.id, 10);

  const { nome, gerente, inicioGerente } = request.body;

  pool.query('UPDATE Departamento SET nome = $1, gerente = $2, iniciogerente = $3 '
        + 'WHERE codigo = $4', [nome, gerente, inicioGerente, idDepartamento],
  (error, result) => {
    if (error) {
      response.status(500).json(error);
      console.log(error);
    }

    console.log(result);
    response.status(200).send(`Departamento código ${idDepartamento} alterado!`);
  });
};

const getLocaisByDepartamento = (request, response) => {
  const idDepartamento = request.params.id;

  pool.query('SELECT * FROM Local WHERE departamento = $1', [idDepartamento],
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const getLocais = (request, response) => {
  pool.query('SELECT * FROM Local ORDER BY nome',
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const createLocal = (request, response) => {
  const { departamento, nome } = request.body;

  pool.query('INSERT INTO Local (nome, departamento) VALUES ($1, $2)',
    [nome, departamento],
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      console.log(results);
      response.status(201).send(`Local ${nome} criado!`);
    });
};

const deleteLocal = (request, response) => {
  const { nome, departamento } = request.params;

  pool.query('DELETE FROM Local WHERE nome = $1 AND departamento = $2',
    [nome, departamento],
    (error, results) => {
      if (error) {
        response.status(500).json(error);
        console.log(error);
      }

      console.log(results);
      response.status(200).send(`Local ${nome} deletado!`);
    });
};

const getProjetoById = (request, response) => {
  const idProjeto = request.params.id;

  pool.query('SELECT * FROM Projeto WHERE codigo = $1', [idProjeto],
    (error, result) => {
      if (error) {
        response.status(500).json(error).send();
        console.log(error);
      }

      response.status(200).json(result.rows);
    });
};

const getProjetos = (request, response) => {
  pool.query('SELECT * FROM Projeto ORDER BY nome',
    (error, results) => {
      if (error) {
        response.status(500).json(error).send();
        console.log(error);
      }

      response.status(200).json(results.rows);
    });
};

const createProjeto = (request, response) => {
  const {
    descricao, codigo, local, departamento,
  } = request.body;

  pool.query('INSERT INTO Projeto (codigo, local, descricao, departamento) '
    + 'VALUES ($1, $2, $3, $4)',
  [codigo, local, descricao, departamento],
  (error, results) => {
    if (error) {
      response.status(500).json(error).send();
      console.log(error);
    }

    console.log(results);
    response.status(201).send(`Projeto com ID ${results.insertId} criado!`);
  });
};

const updateProjeto = (request, response) => {
  const idProjeto = request.params.id;
  const { local, descricao, departamento } = request.body;

  pool.query('UPDATE Projeto SET local = $1, descricao = $2, departamento = $ '
    + 'WHERE codigo = $4',
  [local, descricao, departamento, idProjeto],
  (error, result) => {
    if (error) {
      response.status(500).json(error).send();
      console.log(error);
    }

    console.log(result);
    response.status(200).send(`Projeto com ID ${idProjeto} alterado!`);
  });
};

const deleteProjeto = (request, response) => {
  const idProjeto = request.params.id;

  pool.query('DELETE FROM Projeto WHERE codigo = $1', [idProjeto],
    (error, result) => {
      if (error) {
        response.status(500).json(error).send();
        console.log(error);
      }

      console.log(result);
      response.status(200).send(`Projeto com ID ${idProjeto} deletado!`);
    });
};

const delegarEmpregadoProjeto = (request, response) => {
  const { idEmpregado, idProjeto, horas } = request.body;

  pool.query('INSERT INTO Trabalhaem (empregado, projeto, horas) VALUES ($1, $2, $3)',
    [idEmpregado, idProjeto, horas],
    (error, result) => {
      if (error) {
        response.status(500).json(error).send();
        console.log(error);
      }

      console.log(result);
      response.status(200).send(`Empregado código ${idEmpregado} delegado ao projeto ${idProjeto}!`);
    });
};

export default {
  getEmpregadoById,
  createEmpregado,
  deleteEmpregado,
  getEmpregados,
  updateEmpregado,
  getDependentes,
  getDependentesByEmpregado,
  createDependente,
  deleteDependente,
  updateDependente,
  getDepartamentoById,
  getDepartamentos,
  createDepartamento,
  deleteDepartamento,
  updateDepartamento,
  getLocaisByDepartamento,
  getLocais,
  deleteLocal,
  createLocal,
  getProjetoById,
  getProjetos,
  createProjeto,
  updateProjeto,
  deleteProjeto,
  delegarEmpregadoProjeto,
};
