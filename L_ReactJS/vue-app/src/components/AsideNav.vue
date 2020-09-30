<template>
  <aside class="aside-nav">
      <ol class="aside-nav-list">
          <li class="list-item">Anime</li>
          <li class="list-item">Manga</li>
          <li class="list-item">Ranobe</li>
      </ol>
  </aside>
</template>

<script>
export default {
    name: 'AsideNav'
}
</script>

<style lang='scss'>
    .aside-nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        // width: 100px;
        background-color: #54575f;
            box-shadow: 5px 3px 15px black;
        .list-item{
            color: white;
            background-color: rgba(228, 228, 228, 0.24);
            padding: 15px 20px;
            margin: 3px 0;
            text-align: center;
            cursor: pointer;
        }
    }
</style>