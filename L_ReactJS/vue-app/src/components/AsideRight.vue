<template>
  <aside class="aside-right">
    <h1 class="title">Task templates</h1>
    <ol class="tasks-list">
      <li class="task-item">Add music</li>
      <li class="task-item">deleted video</li>
      <li class="task-item">create task</li>
      <li class="task-item">Рибалка</li>
      <li class="task-item">прогулка</li>
      <li class="task-item">тренеровка</li>
      <li class="task-item">Зверстати сайт</li>
    </ol>
    <button class="add-task">Add</button>
  </aside>
</template>

<script>
export default {
  name: "AsideRight",
};
</script>

<style lang='scss'>
.title{
  margin-top: 15px;
}
.aside-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 30px 30px 0;
  width: 300px;
  background-color: #54575f;
  box-shadow: 5px 3px 15px black;
  border-radius: 15px;
}

.tasks-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  $colors: rgb(192, 72, 72), rgb(81, 146, 172), rgb(58, 138, 104), green, blue, purple;
  $repeat: 30;
    @for $i from 1 through $repeat {
      li:nth-child(#{length($colors)}n + #{$i}) {
        background: lighten(nth($colors, random(length($colors))), 20%);
      }
    }
  .task-item {
    color: #54575f;
    text-align: center;
    margin: 3px;
    padding: 5px;
    border-radius: 20px;
    background-color: #4fbeac;
    cursor: pointer;
    user-select: none;
  }
}
.add-task {
  color: white;
  background-color: rgba(228, 228, 228, 0.24);
  border: none;
  border-radius: 20px;
  padding: 10px 50px;
  box-shadow: 0px 0px 15px #000;
  transition: 2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px #000;
    box-shadow: inset 0px 0px 15px #4fbeac;
  }
}
</style>