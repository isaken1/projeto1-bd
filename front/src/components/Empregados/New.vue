<template>
  <b-card bg-variant="light">
    <b-form @submit="postData()">
      <b-form-group id="group-primeiro-nome" label-cols-lg="1"
        label="Primeiro nome: " label-for="input-primeiro-nome">
        <b-form-input id="input-primeiro-nome" v-model="empregado.nome"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-nome-meio" label-cols-lg="1"
        label="Nome do meio: " label-for="input-nome-meio">
        <b-form-input id="input-nome-meio" v-model="empregado.nomedomeio"
          type="text" />
      </b-form-group>

      <b-form-group id="group-sobrenome" label-cols-lg="1"
        label="Sobrenome: " label-for="input-sobrenome">
        <b-form-input id="input-sobrenom" v-model="empregado.sobrenome"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-codigo" label-cols-lg="1"
        label="Código: " label-for="input-codigo">
        <b-form-input id="input-codigo" v-model="empregado.codigo"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-nascimento" label-cols-lg="1"
        label="Data de nascimento: " label-for="input-nascimento">
        <b-form-input id="input-nascimento" v-model="empregado.dtnascimento"
          type="date" required />
      </b-form-group>

      <b-form-group id="group-endereco" label-cols-lg="1"
        label="Endereço: " label-for="input-endereco">
        <b-form-input id="input-endereço" v-model="empregado.endereco"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-sexo" label-cols-lg="1"
        label="Sexo: " label-for="input-sexo">
        <b-form-select id="input-sexo" v-model="empregado.sexo"
          required :options="options" />
      </b-form-group>

      <b-form-group id="group-salario" label-cols-lg="1"
        label="Salário: " label-for="input-salario">
        <b-form-input id="input-salario" v-model="empregado.salario"
          type="number" required />
      </b-form-group>

      <b-form-group id="group-gerente" label-cols-lg="1"
        label="Gerente: " label-for="input-gerente">
        <b-form-input id="input-endereço" v-model="empregado.gerente"
          type="number" />
      </b-form-group>

      <b-form-group id="group-departamento" label-cols-lg="1"
        label="Departamento: " label-for="input-departamento">
        <b-form-input id="input-departamento" v-model="empregado.departamento"
          type="number" required />
      </b-form-group>

      <b-button type="submit" variant="primary">Inserir novo empregado</b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      empregado: {},
      options: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
    };
  },
  methods: {
    postData() {
      if (this.empregado) {
        this.$http.post('/empregados', this.empregado)
          .then((response) => {
            console.log(response);
          });
      }
    },
  },
};
</script>

<style>

</style>
