<template>
  <b-container id="app" fluid>
    <Menu />
    <b-row no-gutters>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';

export default {
  name: 'app',
  components: {
    Menu,
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  height: 100vh;
}
</style>
