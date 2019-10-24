<template>
  <b-container fluid>
      <b-table :fields="fields" per-page="15" :current-page="currentPage"
        show-empty small striped hover bordered responsive :items="dependentes">
        <template v-slot:cell(Excluir)="data">
            <b-button @click.stop="deleteDependente(data.item)"
             size="sm" variant="danger">Excluir</b-button>
        </template>
    </b-table>

        <b-pagination v-model="currentPage" :total-rows="totalRows"
        per-page="15" limit=7 align="fill" size="sm">
        </b-pagination>
  </b-container>
</template>

<script>
export default {
  props: {
    dependentes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalRows() {
      return this.dependentes.length;
    },
    fields() {
      const fields = Object.keys(this.dependentes[0]);
      fields.push('Excluir');
      return fields;
    },
  },
  methods: {
    deleteDependente(item) {
      this.$http.delete(`/dependentes/${item.empregado}/${item.nome}`).then((response) => {
        console.log(response);
        this.$emit('dependenteDeletado');
      });
    },
  },
};
</script>

<style>

</style>
