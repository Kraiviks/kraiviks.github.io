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
        margin-left: -100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: .5s;
        background-color: #54575f;
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
            transition: .5s;
            &:hover {
                box-shadow: inset 0 0 30px #4FBEAC;
            }
        }
    }
</style>