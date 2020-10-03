<template>
  <article class="app-body">
    <section class="body-item">
      <ToDoItem />
      <form class="input-group mt-3 mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add tasks"
          aria-label="Add tasks"
          aria-describedby="button-addon2"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  </article>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
export default {
  name: "AppBody",
  components: {
    ToDoItem,
  },
  data() {
    return{
      title: ''
    }
  }
};
</script>
<style lang='scss'>
.app-body {
  height: 93vh;
  width: 70%;
  z-index: 999;
  .body-item {
    background-color: #4fbeac;
    height: 100%;
    margin: 0 50px;
    padding: 50px;
    box-shadow: 10px 10px 25px #41454d;
    .form-control{
      background-color: rgba(255, 255, 255, 0.151);
    }
  }
}
</style>