<template>
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" checked> All
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2"> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3"> Completed
  </label>
</div>
</template>

<script>
export default {
    name: 'FilterTasks'
}
</script>

<style>

</style>