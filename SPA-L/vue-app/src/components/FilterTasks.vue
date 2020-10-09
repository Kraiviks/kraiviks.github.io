<template>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary" :class="{active: filterA}">
    <input type="radio" name="options" id="option1" @click="filterAll"> All
  </label>
  <label class="btn btn-secondary" :class="{active: filterT}">
    <input type="radio" name="options" id="option2" @click="filterActive"> Active
  </label>
  <label class="btn btn-secondary" :class="{active: filterC}">
    <input type="radio" name="options" id="option3" @click="filterCompleted"> Completed
  </label>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'FilterTasks',
    computed:{
      ...mapState(["filterA", "filterT", "filterC"])
    },
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