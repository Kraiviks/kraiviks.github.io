<template>
  <div id="app">
    <Header/>
    <main>
      <AsideNav/>
      <AppBody/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AsideNav from './components/AsideNav.vue'
import AppBody from './components/AppBody.vue'

export default {
  name: 'App',
  components: {
    Header,
    AsideNav,
    AppBody
  }
}
</script>

<style lang='scss'>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    color: #9EA0A4;
    font-family: 'Roboto', sans-serif;
}

#app {
  display: grid;
  background-color: #9D9FA3;
  main{
    display: flex;
  }
}
</style>
