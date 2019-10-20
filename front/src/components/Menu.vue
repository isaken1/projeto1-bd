<template>
    <div>
      <b-navbar fixed="top" type="light" variant="light" toggleable="xl">
        <b-navbar-brand to="/">Empresa</b-navbar-brand>
        <b-navbar-nav> 
          <b-nav-item-dropdown text="Consultas">
            <b-dropdown-item to="/">Departamentos</b-dropdown-item>
            <b-dropdown-item to="/">Dependentes</b-dropdown-item>
            <b-dropdown-item to="/">Empregados</b-dropdown-item>
            <b-dropdown-item to="/">Locais</b-dropdown-item>
            <b-dropdown-item to="/">Projetos</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/">Relatórios</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>