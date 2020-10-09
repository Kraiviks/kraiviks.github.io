<template>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" @click="filterAll"> All
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" @click="filterActive"> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3" @click="filterCompleted"> Completed
  </label>
</div>
</template>

<script>
export default {
    name: 'FilterTasks',
    methods: {
      filterAll(){
        this.$store.commit('filterAll')
      },
      filterActive(){
        this.$store.commit('filterActive')
      },
      filterCompleted(){
        this.$store.commit('filterCompleted')
      }
    }
}
</script>

<style scoped>
</style>