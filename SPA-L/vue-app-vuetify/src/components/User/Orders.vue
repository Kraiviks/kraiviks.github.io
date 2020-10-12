<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list flat three-line>
          <v-list-item-group>
            <v-list-item
                
                v-for="order in orders"
                :key="order.id"
            >
                <v-list-item-action>
                  <v-checkbox 
                  
                    color="orange"
                    :input-value="order.done"
                    @change="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle
                    >{{order.phone}}</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn 
                        :to="'/order/'+ order.orderId"
                        color="success"
                    >Open</v-btn>
                </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        orders: [
            {
                id: 'da12',
                name: 'NameOrder',
                phone: '2312-3123-312-3',
                orderId: '123',
                done: false
            }
        ]
    };
  },
  methods: {
      markDone(order){
          order.done = true
      }
  },
};
</script>

<style>
</style>