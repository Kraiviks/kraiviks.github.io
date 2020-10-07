<template>
  <ol class="list-group">
      <li class="list-group-item" v-for="i in this.$store.state.arrayTask" :key="i.i">
        <input type="checkbox" name="" id="">
        {{i}}
        <div class="button-block">
          <i class="far fa-star"></i>
          <i class="fas fa-minus"></i>
        </div>
      </li>
  </ol>
</template>

<script>
export default {
    name: 'ToDoItem',
}
</script>

<style lang='scss'>
.list-group{
  overflow: hidden;
  overflow-y: auto;
  max-height: 90%;
  .list-group-item{
    color:black;
    display: flex;
    word-break: break-word;
    justify-content: space-between;
    align-items: center;
    outline: 1px solid #B57EDC;
    input[type="checkbox"]{
      border: 1px solid red;
      margin-right: 5%;
    }
    .button-block{
      display: flex;
      i{
        margin: 0 5px;
        cursor: pointer;
      }
    }
    span{
      cursor: pointer;
    }
  }
}
</style>