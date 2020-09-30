<template>
  <aside class="aside-left">
      <ol class="aside-left-list">
          <li class="list-item">Viks 1</li>
          <li class="list-item">Viks 2</li>
          <li class="list-item">1234567</li>
          <li class="list-item">+</li>
      </ol>
  </aside>
</template>

<script>
export default {
    name: 'AsideLeft'
}
</script>

<style lang='scss'>
    .aside-left{
        display: flex;
        flex-direction: columns;
        justify-content: center;
        align-items: center;
        // width: 100px;
        background-color: #54575f;
            box-shadow: 5px 3px 15px black;
        .list-item{
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
        }
    }
</style>