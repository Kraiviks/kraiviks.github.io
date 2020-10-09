<template>
  <transition name="slide-fade">
    <aside class="aside-left" :class="{bgBlue: bgColor}" v-if="this.$store.state.asideLeftState">
      <ol class="aside-left-list">
        <li class="list-item">Viks 1</li>
        <li class="list-item">Viks 2</li>
        <li class="list-item">1234567</li>
        <li class="list-item">+</li>
      </ol>
    </aside>
  </transition>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "AsideLeft",
  computed: {
    ...mapState(["bgColor"])
  },
};
</script>

<style lang='scss' scoped>
.aside-left {
  position: absolute;
  z-index: 500;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  background-color: #54575f;
  box-shadow: 1px 3px 15px black;
  .list-item {
    color: white;
    background-color: rgba(228, 228, 228, 0.24);
    padding: 15px;
    width: 100px;
    margin: 3px 0;
    text-align: center;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.5s;
    &:hover {
      box-shadow: inset 0 0 30px #4fbeac;
    }
  }
}
</style>