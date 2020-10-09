<template>
  <header class="header" :class="{bgBlue: bgColor}">
    <Logo />
    <nav class="header-nav">
      <ol class="nav-list">
        <li @click='showAsideLeft'  class="nav-item">Viks</li>
        <li @click="changeBgColor" class="nav-item">Backgroung</li>
      </ol>
    </nav>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import {mapState} from "vuex"
export default {
  name: "Header",
  components: {
    Logo
  },
  computed: {
    ...mapState(["bgColor"])
  },
  methods: {
    showAsideLeft() {
      this.$store.commit('toggleL')
    },
    changeBgColor() {
      this.$store.commit('changeBgColor')
    }
  }
};
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #54575f;
  box-shadow: 0 5px 10px black;
  min-height: 40px;
  height: 5vh;
  z-index: 1000;
  .logo {
    font-family: "Kaushan Script", cursive;
    color: #54575f;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 1.5rem;
    animation: logoAnimated 1.5s infinite alternate-reverse;
    user-select: none;
  }
  .nav-list {
    display: flex;
    margin: 0;
    .nav-item {
      display: inline-block;
      text-align: center;
      padding: 8px 15px;
      margin: 0 5px;
      box-shadow: 0 3px 1px #00dcb4;
      user-select: none;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        color: #4fbeac;
        transform: scale(1.3);
        animation: navItemAnimated 1s infinite ease-in alternate-reverse;
      }
    }
  }
}

/*Animated*/
@keyframes logoAnimated {
  0% {
    color: #54575f;
    text-shadow: 0 0 15px #54575f;
  }
  50% {
    text-shadow: 0 0 15px #6060bd;
  }
  100% {
    color: #00dcb3b8;
    text-shadow: 0 0 15px #00dcb3b8;
  }
}
@keyframes navItemAnimated {
  0% {
    box-shadow: 0 -10px 10px #54575f;
    box-shadow: inset 0 0 10px #54575f;
  }
  50% {
    box-shadow: 0 0px 10px #6060bd;
    box-shadow: inset 5px 5px 10px #6060bd;
  }
  100% {
    box-shadow: 0 5px 10px #00dcb3b8;
    box-shadow: inset -10 -10px 10px #00dcb3b8;
  }
}

/* ==========================Media requests - start========================== */

@media (max-width: 575.98px) {
  .header {
    flex-direction: column;
    height: 10vh;
    .logo{
      padding: 0;
    }
    nav{
      width: 80%;
    }
    .nav-item{
      width:80%;
      padding: 2px 15px !important;
    }
  }
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