<template>
  <v-app>
  <v-navigation-drawer 
    app
    temporary
    v-model="drawer"
    >
    <!-- -->
    <v-list>
      <v-list-item
        v-for="link of links"
        :key="link.title"
        :to="link.url"
      >
        <v-list-item-icon>
          <v-icon color="black">
            mdi-{{link.icon}}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-card
    flat
    tile
  >
    <v-toolbar dense dark color="#54575f">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="logo">Kraiviks: App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="#0000" v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left>mdi-{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid >
            
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      drawer: false,
      links: [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'bookmark-outline', url: '/orders'},
        {title: 'New add', icon: 'note-plus', url: '/new'},
        {title: 'My ads', icon: 'format-list-bulleted', url: '/list'}
      ]
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  cursor: pointer;
  user-select: none;
}
</style>
