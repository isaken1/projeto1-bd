<template>
  <b-card bg-variant="light">

    <b-form @submit.prevent="postData()">
      <b-form-group id="group-nome" label-cols-lg="1"
        label="Nome: " label-for="input-nome">
        <b-form-input id="input-nome" v-model="dependente.nome"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-nascimento" label-cols-lg="1"
        label="Data de nascimento: " label-for="input-nascimento">
        <b-form-input id="input-nascimento" v-model="dependente.dtnascimento"
          type="text" required />
      </b-form-group>

      <b-form-group id="group-sexo" label-cols-lg="1"
        label="Sexo: " label-for="input-sexo">
        <b-form-select id="input-sexo" v-model="dependente.sexo"
          required :options="options" />
      </b-form-group>

      <b-form-group id="group-empregado" label-cols-lg="1"
        label="Empregado: " label-for="input-empregado">
        <b-form-input id="input-empregado" v-model="dependente.empregado"
          type="text" />
      </b-form-group>

      <b-form-group id="group-parentesco" label-cols-lg="1"
        label="Parentesco: " label-for="input-parentesco">
        <b-form-input id="input-parentesco" v-model="dependente.parentesco"
          type="text" required />
      </b-form-group>

      <b-button type="submit" variant="primary">Inserir novo dependente</b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      dependente: {
        nome: null,
        dtnascimento: null,
        parentesco: null,
        sexo: null,
        empregado: null,
      },
      options: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
    };
  },
  methods: {
    postData() {
      if (this.dependente) {
        this.$http.post('/dependentes', this.dependente)
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
