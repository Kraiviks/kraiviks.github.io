<template>
  <header class="header">
    <Logo />
    <nav class="header-nav">
      <ol class="nav-list">
        <li class="nav-item">Home</li>
        <li class="nav-item">Viks</li>
        <li class="nav-item">***</li>
      </ol>
    </nav>
    <div class="user-profile">@</div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>

<style lang='scss'>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #54575f;
  box-shadow: 0 5px 10px black;
  height: 7vh;
  z-index: 1000;
  .logo {
    font-family: "Kaushan Script", cursive;
    color: #54575f;
    padding: 5px 15px;
    cursor: pointer;
    font-size: 1.5rem;
    animation: logoAnimated 1.5s infinite alternate-reverse;
  }
  .nav-list {
    display: flex;
    .nav-item {
      display: inline-block;
      text-align: center;
      padding: 5px 15px;
      width: 165px;
      margin: 0 5px;
      box-shadow: 0 3px 1px #00dcb4;
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
</style>