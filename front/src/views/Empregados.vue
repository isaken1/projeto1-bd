<template>
  <b-card title="Empregados" no-body>
      <b-card-header>
         <b-nav card-header tabs align="center">
            <b-nav-item exact exact-active-class="active"
             to="/empregados/list">Listar</b-nav-item>
            <b-nav-item exact exact-active-class="active"
             to="/empregados/novo">Novo</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view @empregadoDeletado="fetchData" @empregadoAtualizado="fetchData"
         :empregados="empregado_list" />
      </b-card-body>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      empregado_list: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchData());
  },
  methods: {
    fetchData() {
      this.$http.get('/empregados').then((response) => {
        if (response.status === 200) {
          this.empregado_list = response.data;
          this.empregado_list.map((empregado) => {
            const newEmpregado = Object.assign({}, empregado);
            newEmpregado.dtnascimento = empregado.dtnascimento.slice(0, empregado.dtnascimento.indexOf('T'));
            return newEmpregado;
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
