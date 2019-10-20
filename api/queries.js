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

    pool.query('INSERT INTO empregado  (nome, nomedomeio, sobrenome, ' +
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

    pool.query('UPDATE Empregados SET nome = $1, nomedomeio = $2, ' +
        'sobrenome = $3, dtNascimento = $4, endereco = $5, sexo = $6, ' +
        'salario = $7, gerente = $8, departamento = $9 WHERE codigo = $10',
        [nome, nomedomeio, sobrenome, dtnascimento, endereco,
            sexo, salario, gerente, departamento, codigo],
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
    getDepartamentos,
    getLocais,
    getProjetos,
}