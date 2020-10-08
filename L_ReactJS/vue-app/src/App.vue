<template>
  <div id="app">
    <Header />
    <main>
      <AsideLeft />
      <AppBody />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AsideLeft from "./components/AsideLeft.vue";
import AppBody from "./components/AppBody.vue";

export default {
  name: "App",
  components: {
    Header,
    AsideLeft,
    AppBody
  },
};
</script>

<style lang='scss'>
* {
  //border: 1px solid red;
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
  background-color: #9d9fa3;
}

#app {
  display: flex;
  flex-direction: column;
  background-color: #9d9fa3;
  main {
    display: flex;
    position: relative;
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

/* ==========================Media requests - start========================== */

@media (max-width: 575.98px) {
}
// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
}
// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
}
// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
}
</style>
