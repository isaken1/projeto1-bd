<template>
  <b-container fluid>
      <b-table per-page="15" :current-page="currentPage" show-empty small striped hover
       bordered responsive :items="empregados"></b-table>

       <b-pagination v-model="currentPage" :total-rows="totalRows"
        per-page="15" limit=7 align="fill" size="sm">
       </b-pagination>
  </b-container>
</template>

<script>
export default {
  props: {
    empregados: {
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
      return this.empregados.length;
    },
  },
};
</script>

<style>

</style>
