<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="order in orders"
              :key="order.id"
              :src="order.imageSrc"
              reverse-transition="fordere-transition"
              transition="fordere-transition"
            >
                <div class="slide-link">
                    <v-btn color="success" :to="'/order/'+ order.id">{{order.title}}</v-btn>
                </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex 
            xs12
            md6
            lg4
            v-for="order in orders"
            :key="order.id"

        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="order.imageSrc"
            >
              <v-card-title>{{order.title}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{order.description}}</div>
            </v-card-text>

            <v-card-actions>
              <div class="price">{{order.price}} грн.</div>
              <v-spacer></v-spacer>
              <v-btn text :to="'/order/' + order.id" > Open </v-btn>
              <v-btn raised class="pimary"> Order </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      orders: [
        {
          title: "Хот-Дог",
          description: "Описссссссссссссссс",
          price: '20',
          promo: false,
          imageSrc: require("@/assets/img/HotDog.jpg"),
          id: "1",
        },
        {
          title: "Паніні",
          description: "Lorem leo",
          price: '30',
          promo: true,
          imageSrc: require("@/assets/img/panini.jpg"),
          id: "2",
        },
        {
          title: "Лаваш",
          description: "Lorem lavash",
          price: '40',
          promo: false,
          imageSrc: require("@/assets/img/lavash.webp"),
          id: "4",
        },
      ],
    };
  },
};
</script>

<style>
    .slide-link{
        position: absolute;
        bottom: 50px;
        left: 50%;
        background-color: rgba(0,0,0, .3);
        transform: translate(-50%, 0);
        padding: 10px 50px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>