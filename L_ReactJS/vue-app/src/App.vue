<template>
  <div id="app">
    <Header />
    <main>
      <AsideLeft />
      <AppBody />
      <AsideRight />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AsideLeft from "./components/AsideLeft.vue";
import AppBody from "./components/AppBody.vue";
import AsideRight from "./components/AsideRight.vue";

export default {
  name: "App",
  components: {
    Header,
    AsideLeft,
    AppBody,
    AsideRight,
  },
};
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  color: #9ea0a4;
  font-family: "Roboto", sans-serif;
}
html{
  height: 100%;
}
body{
  min-width: 720px;
}

#app {
  display: grid;
  background-color: #9d9fa3;
  main {
    display: flex;
  }
}

/* Animated Vue */

/*Animated*/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
