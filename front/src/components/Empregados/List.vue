<template>
  <b-container fluid>
      <b-table per-page="15" :current-page="currentPage" show-empty small striped hover
        bordered responsive :items="empregados" selectable select-mode="single"
        @row-selected="onRowClicked" :fields="fields">
          <template v-slot:cell(Excluir)="data">
            <b-button @click.stop="deleteEmpregado(data.item)"
             size="sm" variant="danger">Excluir</b-button>
        </template>
        </b-table>

       <b-pagination v-model="currentPage" :total-rows="totalRows"
        per-page="15" limit=7 align="fill" size="sm">
       </b-pagination>

       <update @empregadoAtualizado="$emit('empregadoAtualizado')"
        v-if="empregadoSelecionado" :empregado="empregadoSelecionado" />
  </b-container>
</template>

<script>
import Update from './Update.vue';

export default {
  components: {
    Update,
  },
  props: {
    empregados: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      empregadoSelecionado: null,
    };
  },
  computed: {
    totalRows() {
      return this.empregados.length;
    },
    fields() {
      const fields = Object.keys(this.empregados[0]);
      fields.push('Excluir');
      return fields;
    },
  },
  methods: {
    onRowClicked(selection) {
      [this.empregadoSelecionado] = selection;
    },
    deleteEmpregado(item) {
      this.$http.delete(`/empregados/${item.codigo}`).then((response) => {
        console.log(response);
        this.$emit('empregadoDeletado');
      });
    },
  },
};
</script>

<style>

</style>
