<template>
  <article class="app-body">
      <section class="body-item"></section>
  </article>
</template>

<script>
export default {
    name: 'AppBody'
}
</script>
<style lang='scss'>
  .app-body{
    height: 93vh;
    width: 100%;
    z-index: 999;
    .body-item{
      background-color: #4FBEAC;
      height: 100%;
      margin: 0 50px;
      box-shadow: 10px 10px 25px #41454d;
    }
}
</style>