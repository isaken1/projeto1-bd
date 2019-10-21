const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'isaac',
    host: 'localhost',
    database: 'empresa_api',
    password: 'abcd1234',
    port: 5432
});

const getEmpregados = (request, response) => {
    pool.query('SELECT * FROM Empregado ORDER BY nome',
        (error, results) => {
            if (error) {
                response.status(500).send(error);
                console.log(error);
            }

            response.status(200).json(results.rows);
        }
    );
}

const createEmpregado = (request, response) => {
    const { nome, nomedomeio, sobrenome, codigo, dtnascimento, endereco,
        sexo, salario, gerente, departamento } = request.body;

    pool.query('INSERT INTO Empregado (nome, nomedomeio, sobrenome, ' +
        'codigo, dtNascimento, endereco, sexo, salario, gerente, ' +
        'departamento) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9, $10',
        [nome, nomedomeio, sobrenome, codigo, dtnascimento, endereco,
            sexo, salario, gerente, departamento],
        (error, result) => {
            if (error) {
                response.status(500).send(error);
                console.log(error);
            }

            response.status(201).send(`Empregado criado com o ID:
                ${result.insertId}`);
        }
    );
}

const deleteEmpregado = (request, response) => {
    const id = parseInt(request.params.id) 

    pool.query('DELETE FROM Empregado WHERE codigo = $1', [1],
        (error, result) => {
            if (error) {
                response.status(500).send(error)
                console.log(error)
            }

            response.status(200).send(`Empregado código ${id} deletado!`)
        }
    );
}

const updateEmpregado = (request, response) => {
    const id = parseInt(request.params.id)

    const { nome, nomeDoMeio, sobrenome, dtNascimento,
         endereco, sexo, salario, gerente, departamento } = request.body

    pool.query('UPDATE Empregado SET nome = $1, nomedomeio = $2, ' +
        'sobrenome = $3, dtNascimento = $4, endereco = $5, sexo = $6, ' +
        'salario = $7, gerente = $8, departamento = $9 WHERE codigo = $10',
        [nome, nomeDoMeio, sobrenome, dtNascimento, endereco,
            sexo, salario, gerente, departamento, id],
        (error, result) => {
            if (error) {
                response.status(500).json(error);
                console.log(error);
            }
              
        response.status(200).send(`Empregado código ${id} alterado!`)
        }
    );
}

const getDependentes = (request, response) => {
    pool.query('SELECT * FROM Dependente ORDER BY nome',
        (error, results) => {
            if (error) {
                response.status(500).json(error);
                console.log(error);
            }

            response.status(200).json(results.rows);
        }
    );
}

const createDependente = (request, response) => {
    const { empregado, nome, sexo, dtNascimento, parentesco } = request.body
    pool.query('INSERT INTO Dependente  (nome, dtNascimento, sexo, parentesco, empregado)' +
        ' VALUES $1, $2, $3, $4, $5', 
        [nome, dtNascimento, sexo, parentesco, empregado],
        (error, result) => {
            if (error) {
                response.status(500).send(error)
                console.log(error)
            }

            response.status(201).send(`Dependente criado com o ID:
                ${result.insertId}`)
        }
    );
}

const deleteDependente = (request, response) => {
    const idEmpregado = parseInt(request.params.id) 
    const nomeDependente = request.params.nomeDependente

    pool.query('DELETE FROM Dependente WHERE idEmpregado = $1 AND nomeDependente = $2', 
        [idEmpregado, nomeDependente],
        (error, result) => {
            if (error) {
                response.status(500).send(error);
                console.log(error);
            }

            response.status(200).send(`Dependente ${nomeDependente} deletado!`)
        }
    );
}

const updateDependente = (request, response) => {
    const idEmpregado = parseInt(request.params.idEmpregado)
    const nomeDependente = request.params.nomeDependente

    const { sexo, dtNascimento, parentesco } = request.body

    pool.query('UPDATE Dependente SET sexo = $1, parentesco = $2, dtNascimento = $3 ' +
        'WHERE nome = $4 AND empregado = $5',        
        [sexo, parentesco, dtNascimento, nomeDependente, idEmpregado],
        (error, result) => {
            if (error) {
                response.status(500).json(error);
                console.log(error);
            }
              
        response.status(200).send(`Dependente ${nomeDependente} alterado!`)
        }
    );
}

const getDepartamentos = (request, response) => {
    pool.query('SELECT * FROM Departamentos ORDER BY nome',
        (error, results) => {
            if (error) {
                response.status(500).json(error);
                console.log(error);
            }

            response.status(200).json(results.rows);
        }
    );
}

const getLocais = (request, response) => {
    pool.query('SELECT * FROM Local ORDER BY nome',
        (error, results) => {
            if (error) {
                response.status(500).json(error);
                console.log(error);
            }

            response.status(200).json(results.rows);
        }
    );
}

const getProjetos = (request, response) => {
    pool.query('SELECT * FROM Projeto ORDER BY nome',
        (error, results) => {
            if (error) {
                response.status(500).json(error).send()
                console.log(error);
            }

            response.status(200).json(results.rows)
        }
    );
}

module.exports = {
    createEmpregado,
    deleteEmpregado,
    getEmpregados,
    updateEmpregado,
    getDependentes,
    createDependente,
    deleteDependente,
    updateDependente,
    getDepartamentos,
    getLocais,
    getProjetos,
}