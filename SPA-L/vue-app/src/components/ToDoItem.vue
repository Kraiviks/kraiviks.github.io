<template>
  <ol class="list-group" v-if="filterA">
    <li
      class="list-group-item"
      :class="{ important: task.important, checkT: task.checked }"
      v-for="task in arrayTask"
      :key="task.id"
    >
      <div
        class="noCheckTask"
        :class="{ checkTask: task.checked }"
        @click="checkTask(task.id)"
      ></div>
      {{ task.label }}
      <div class="button-block">
        <i
          class="far fa-star"
          :class="{ fas: task.important }"
          @click="toggleImportant(task.id)"
        ></i>
        <i class="fas fa-minus" @click="delTask(task.id)"></i>
      </div>
    </li>
  </ol>
  <ol class="list-group" v-else-if="filterT">
    <li
      class="list-group-item"
      :class="{ important: task.important }"
      v-for="task in arrayT"
      :key="task.id"
    >
      <div
        class="noCheckTask"
        :class="{ checkTask: task.checked }"
        @click="checkTask(task.id)"
      ></div>
      {{ task.label }}
      <div class="button-block">
        <i
          class="far fa-star"
          :class="{ fas: task.important }"
          @click="toggleImportant(task.id)"
        ></i>
        <i class="fas fa-minus" @click="delTask(task.id)"></i>
      </div>
    </li>
  </ol>
  <ol class="list-group" v-else-if="filterC">
    <li
      class="list-group-item"
      :class="{ important: task.importan, checkT: task.checked }"
      v-for="task in arrayC"
      :key="task.id"
    >
      <div
        class="noCheckTask"
        :class="{ checkTask: task.checked }"
        @click="checkTask(task.id)"
      ></div>
      {{ task.label }}
      <div class="button-block">
        <i
          class="far fa-star"
          :class="{ fas: task.important }"
          @click="toggleImportant(task.id)"
        ></i>
        <i class="fas fa-minus" @click="delTask(task.id)"></i>
      </div>
    </li>
  </ol>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ToDoItem",
  computed: {
    ...mapState([
      "arrayTask",
      "arrayT",
      "arrayC",
      "filterT",
      "filterA",
      "filterC",
    ]),
  },
  methods: {
    delTask(id) {
      this.$store.commit("delTask", id);
    },
    toggleImportant(id) {
      this.$store.commit("toggleImportant", id);
    },
    checkTask(id) {
      this.$store.commit("checkTask", id);
    },
  },
};
</script>

<style lang='scss' scoped>
.list-group {
  overflow: hidden;
  overflow-y: auto;
  max-height: 75%;
  .checkT {
    text-decoration: line-through;
  }
  .list-group-item {
    color: black;
    display: flex;
    word-break: break-word;
    justify-content: space-between;
    align-items: center;
    outline: 1px solid #b57edc;
    .noCheckTask {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid #9ea0a4;
      margin-right: 5%;
      cursor: pointer;
    }
    .checkTask {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #4fbeac;
      box-shadow: 0 0 10px #4fbeac;
      margin-right: 5%;
      cursor: pointer;
    }
    .button-block {
      display: flex;
      i {
        margin: 0 5px;
        cursor: pointer;
      }
    }
    span {
      cursor: pointer;
    }
  }
}
</style>