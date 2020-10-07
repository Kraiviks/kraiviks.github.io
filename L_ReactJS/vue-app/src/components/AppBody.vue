 <template>
  <article class="app-body">
    <section class="body-item">
      <div class="body-header">
        <FilterTasks/>
        <div class="counter">{{this.$store.state.arrayTask.length}} task left</div>
      </div>
      <form class="input-group mt-3 mb-3" @submit.prevent="createTask">
        <input
          type="text" class="form-control" placeholder="Add tasks" aria-label="Add tasks" aria-describedby="button-addon2"/>
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
      <ToDoItem/>
    </section>
  </article>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import FilterTasks from "./FilterTasks.vue";
export default {
  name: "AppBody",
  components: {
    ToDoItem,
    FilterTasks
  },
  methods: {
    createTask: function() {
      this.$store.commit('createTask')
    }
  }
};
</script>
<style lang='scss'>
.app-body {
  height: 93vh;
  width: 100%;
  z-index: 999;
  transition: .8s;
  .body-item {
    background-color: #4fbeac;
    height: 100%;
    margin: 0 50px;
    padding: 50px;
    box-shadow: 10px 10px 25px #41454d;
    .body-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .counter{
        color: black;
      }
    }
    .form-control{
      background-color: rgba(255, 255, 255, 0.151);
    }
  }
}
</style>