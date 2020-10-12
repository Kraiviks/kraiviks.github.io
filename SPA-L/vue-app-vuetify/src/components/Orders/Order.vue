<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card
                        contain
                        height="300"
                        src="order.imageSrc"
                    >
                        
                    </v-card>
                    <v-card-text>
                        <h1 class="text-primary">Lorem.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti, error inventore at illum tenetur ipsa libero laborum corporis ipsum quia quod eos blanditiis amet quae nostrum nam aliquid iste.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange" depressed>Edit</v-btn>
                        <v-btn color="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>