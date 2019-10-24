<template>
  <b-card title="Dependentes" no-body>
      <b-card-header>
         <b-nav card-header tabs align="center">
            <b-nav-item exact exact-active-class="active"
             to="/dependentes/list">Listar</b-nav-item>
            <b-nav-item exact exact-active-class="active"
             to="/dependentes/novo">Novo</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view @dependenteDeletado="fetchData" :dependentes="dependente_list" />
      </b-card-body>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      dependente_list: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchData());
  },
  methods: {
    fetchData() {
      this.$http.get('/dependentes').then((response) => {
        if (response.status === 200) {
          this.dependente_list = response.data;
          this.dependente_list.map((dependente) => {
            const newDependente = Object.assign({}, dependente);
            newDependente.dtnascimento = dependente.dtnascimento.slice(0, dependente.dtnascimento.indexOf('T'));
            return newDependente;
          });
        }
      });
    },
  },
};
</script>

<style>
.container {
    padding-top: 10px;
    background-color: gray;
}
</style>
