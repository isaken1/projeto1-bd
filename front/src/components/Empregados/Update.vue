<template>
  <b-card bg-variant="light">

    <b-form @submit.prevent="putData()">
      <b-form-group id="group-primeiro-nome" label-cols-lg="1"
        label="Primeiro nome: " label-for="input-primeiro-nome">
        <b-form-input id="input-primeiro-nome" v-model="newEmpregado.nome"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-nome-meio" label-cols-lg="1"
        label="Nome do meio: " label-for="input-nome-meio">
        <b-form-input id="input-nome-meio" maxlength="1" v-model="newEmpregado.nomedomeio"
          type="text" />
      </b-form-group>

      <b-form-group id="group-sobrenome" label-cols-lg="1"
        label="Sobrenome: " label-for="input-sobrenome">
        <b-form-input id="input-sobrenom" v-model="newEmpregado.sobrenome"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-nascimento" label-cols-lg="1"
        label="Data de nascimento: " label-for="input-nascimento">
        <b-form-input id="input-nascimento" v-model="newEmpregado.dtnascimento"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-endereco" label-cols-lg="1"
        label="Endereço: " label-for="input-endereco">
        <b-form-input id="input-endereco" v-model="newEmpregado.endereco"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-sexo" label-cols-lg="1"
        label="Sexo: " label-for="input-sexo">
        <b-form-select id="input-sexo" v-model="newEmpregado.sexo"
          required :options="options" />
      </b-form-group>

      <b-form-group id="group-salario" label-cols-lg="1"
        label="Salário: " label-for="input-salario">
        <b-form-input id="input-salario" v-model="newEmpregado.salario"
          type="number" number required />
      </b-form-group>

      <b-form-group id="group-gerente" label-cols-lg="1"
        label="Gerente: " label-for="input-gerente">
        <b-form-input id="input-gerente" v-model="newEmpregado.gerente"
          type="number" number />
      </b-form-group>

      <b-form-group id="group-departamento" label-cols-lg="1"
        label="Departamento: " label-for="input-departamento">
        <b-form-input id="input-departamento" v-model="newEmpregado.departamento"
          type="number" number required />
      </b-form-group>

      <b-button type="submit" variant="primary">Atualizar empregado</b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  props: {
    empregado: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newEmpregado: Object.assign({}, this.empregado),
      options: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
    };
  },
  methods: {
    putData() {
      this.$http.put(`/empregados/${this.newEmpregado.codigo}`, this.newEmpregado)
        .then((response) => {
          console.log(response);
          this.$emit('empregadoAtualizado');
        });
    },
  },
  watch: {
    empregado(newEmpregado) {
      this.newEmpregado = Object.assign({}, newEmpregado);
    },
  },
};
</script>

<style>

</style>
