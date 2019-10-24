# Projeto Empresa

## **Scripts**

### Antes de rodar o projeto, é necessário instalar as dependências dos dois módulos presentes (a API e o Front). Para tanto, estando na pasta raiz do projeto, execute o comando:
```
npm run install // Instala as dependências de ambos os módulos.
```

### Depois de instalados as dependências, pode-se executar os script de incialização do servidor Express (API) e do hot-reloader do Vue.js (Front):
```
npm run empresa
```

### Além desse __script__ de instalação e do script de execução, também está configurado o seguinte scripts:
```
npm run api // Roda apenas a API.
```

## **Configurações**

### As configurações de conexão do servidor PostgreSQL se encontram em **api/dbPool.js**, e por padrão temos:
```
user: 'isaac',
  host: 'localhost',
  database: 'empresa_api',
  password: 'abcd1234',
  port: 5432
```
### Por padrão, o serviço da API roda na porta 3000. Caso seja necessário alterar, essa configuração se encontra em **api/index.js**. Vale salientar que por motivos de evitar problemas de CORS, o servidor do Vue.js está configurado com um proxy, portanto, se a porta da API for alterada, deve-se alterar também o endereço configurado em **front/vue.config.js**.